import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, 'dist');
const TEST_PORT = 8099;
const BASE_URL = `http://127.0.0.1:${TEST_PORT}`;

test('1. Build Output Verification', async (t) => {
  await t.test('dist directory exists', () => {
    assert.ok(fs.existsSync(DIST_DIR), 'dist directory should exist');
  });

  await t.test('dist/index.html exists and has root container', () => {
    const indexPath = path.join(DIST_DIR, 'index.html');
    assert.ok(fs.existsSync(indexPath), 'dist/index.html must exist');
    const html = fs.readFileSync(indexPath, 'utf-8');
    assert.match(html, /<div id="root"><\/div>/, 'index.html must contain #root div');
    assert.match(html, /<title>DEZO/i, 'index.html must have DEZO in title');
  });

  await t.test('dist/assets has JS and CSS bundles', () => {
    const assetsDir = path.join(DIST_DIR, 'assets');
    assert.ok(fs.existsSync(assetsDir), 'dist/assets should exist');
    const files = fs.readdirSync(assetsDir);
    const hasJs = files.some(f => f.startsWith('index-') && f.endsWith('.js'));
    const hasCss = files.some(f => f.startsWith('index-') && f.endsWith('.css'));
    assert.ok(hasJs, 'Must have bundled JS file');
    assert.ok(hasCss, 'Must have bundled CSS file');
  });

  await t.test('critical static assets exist in dist', () => {
    const assets = [
      'favicon.svg',
      'site.webmanifest',
      'dezo-logo-transparent.png',
      'backlinks_dezo_in.csv',
      'keywords_ecommerce.csv'
    ];
    for (const asset of assets) {
      assert.ok(fs.existsSync(path.join(DIST_DIR, asset)), `${asset} should exist in dist`);
    }
  });
});

test('2. Production Server & API Integration Tests', async (t) => {
  let serverProcess;

  // Start server on TEST_PORT
  await t.test('spawn server process', async () => {
    serverProcess = spawn('node', ['server.js'], {
      cwd: __dirname,
      env: { ...process.env, PORT: String(TEST_PORT) },
      stdio: 'pipe'
    });

    // Wait until server starts
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Server start timed out')), 5000);
      serverProcess.stdout.on('data', (data) => {
        const str = data.toString();
        if (str.includes(`http://localhost:${TEST_PORT}`)) {
          clearTimeout(timeout);
          resolve();
        }
      });
      serverProcess.stderr.on('data', (err) => {
        console.error('Server err:', err.toString());
      });
      serverProcess.on('error', (err) => {
        clearTimeout(timeout);
        reject(err);
      });
    });
  });

  await t.test('GET / serves index.html with HTTP 200 and security headers', async () => {
    const res = await fetch(`${BASE_URL}/`);
    assert.equal(res.status, 200);
    const contentType = res.headers.get('content-type');
    assert.ok(contentType?.includes('text/html'));
    assert.equal(res.headers.get('x-frame-options'), 'DENY');
    assert.equal(res.headers.get('x-content-type-options'), 'nosniff');
    assert.ok(res.headers.get('content-security-policy')?.includes("default-src 'self'"));
    assert.ok(res.headers.get('permissions-policy')?.includes('camera=()'));
    const body = await res.text();
    assert.ok(body.includes('id="root"'));
  });

  await t.test('SPA routes fallback to index.html with HTTP 200', async () => {
    const routes = ['/services', '/work', '/pricing', '/growth-lab', '/about', '/contact', '/start-a-project'];
    for (const route of routes) {
      const res = await fetch(`${BASE_URL}${route}`);
      assert.equal(res.status, 200, `Route ${route} should return 200`);
      const body = await res.text();
      assert.ok(body.includes('id="root"'), `Route ${route} should render SPA index`);
    }
  });

  await t.test('GET static assets serve correct MIME types', async () => {
    const res = await fetch(`${BASE_URL}/favicon.svg`);
    assert.equal(res.status, 200);
    assert.ok(res.headers.get('content-type')?.includes('image/svg+xml'));

    const manifestRes = await fetch(`${BASE_URL}/site.webmanifest`);
    assert.equal(manifestRes.status, 200);
    assert.ok(manifestRes.headers.get('content-type')?.includes('application/manifest+json'));
  });

  await t.test('POST /api/tools/probe requires URL parameter (HTTP 400)', async () => {
    const res = await fetch(`${BASE_URL}/api/tools/probe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
    assert.equal(res.status, 400);
    const data = await res.json();
    assert.equal(data.ok, false);
    assert.equal(data.error, 'URL is required');
  });

  await t.test('POST /api/tools/probe blocks loopback, private & metadata addresses (SSRF Protection)', async () => {
    const blockedTargets = [
      'http://localhost',
      'http://127.0.0.1',
      'http://192.168.1.1',
      'http://10.0.0.5',
      'http://172.20.0.1',
      'http://169.254.169.254',
      'http://metadata.google.internal'
    ];

    for (const target of blockedTargets) {
      const res = await fetch(`${BASE_URL}/api/tools/probe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: target })
      });
      assert.equal(res.status, 403, `Target ${target} must be blocked with 403`);
      const data = await res.json();
      assert.equal(data.ok, false);
      assert.match(data.error, /Private and loopback addresses cannot be scanned/i);
    }
  });

  await t.test('POST /api/tools/probe rejects non-standard ports and credentials (HTTP 400)', async () => {
    const badTargets = [
      'http://example.com:8080',
      'http://example.com:22',
      'http://user:pass@example.com'
    ];

    for (const target of badTargets) {
      const res = await fetch(`${BASE_URL}/api/tools/probe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: target })
      });
      assert.equal(res.status, 400, `Target ${target} must be rejected with 400`);
      const data = await res.json();
      assert.equal(data.ok, false);
    }
  });

  await t.test('POST /api/tools/probe correctly inspects public URL', async () => {
    const res = await fetch(`${BASE_URL}/api/tools/probe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'https://example.com' })
    });
    assert.equal(res.status, 200);
    const data = await res.json();
    assert.equal(data.ok, true);
    assert.equal(data.status, 200);
    assert.equal(data.title, 'Example Domain');
    assert.ok(data.ttfbMs >= 0);
  });

  // Teardown server
  t.after(() => {
    if (serverProcess) {
      serverProcess.kill();
    }
  });
});
