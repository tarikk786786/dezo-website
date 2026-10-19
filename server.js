import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 8000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json'
};

async function handleProbe(req, res) {
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', async () => {
    try {
      const data = JSON.parse(body || '{}');
      const targetUrl = data.url;

      if (!targetUrl || typeof targetUrl !== 'string') {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ ok: false, error: 'URL is required' }));
      }

      let parsedUrl;
      try {
        parsedUrl = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
      } catch {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ ok: false, error: 'Invalid URL format' }));
      }

      const host = parsedUrl.hostname.toLowerCase();
      const isPrivate = host === 'localhost' || host === '127.0.0.1' || host === '::1' || host.startsWith('192.168.') || host.startsWith('10.');
      if (isPrivate) {
        res.writeHead(403, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ ok: false, error: 'Private and loopback addresses cannot be scanned' }));
      }

      const startTime = Date.now();
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(parsedUrl.toString(), {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 (compatible; DEZOPublicProbe/1.0; +https://dezo.in)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
      }).finally(() => clearTimeout(timeoutId));

      const ttfbMs = Date.now() - startTime;
      const rawHtml = await response.text();
      const sampleHtml = rawHtml.slice(0, 150000);

      const titleMatch = sampleHtml.match(/<title[^>]*>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : '';

      const hasCanonical = /<link[^>]+rel=["']canonical["']/i.test(sampleHtml) || /<link[^>]+rel=canonical/i.test(sampleHtml);
      const hasJsonLd = /<script[^>]+type=["']application\/ld\+json["']/i.test(sampleHtml);
      const hasViewport = /<meta[^>]+name=["']viewport["']/i.test(sampleHtml);
      const hasRobotsMeta = /<meta[^>]+name=["']robots["']/i.test(sampleHtml);

      const headersObj = {};
      response.headers.forEach((value, key) => {
        headersObj[key] = value;
      });

      const result = {
        ok: true,
        url: targetUrl,
        finalUrl: response.url || parsedUrl.toString(),
        status: response.status,
        ttfbMs,
        contentType: response.headers.get('content-type') || 'text/html',
        server: response.headers.get('server') || '',
        headers: headersObj,
        title,
        hasCanonical,
        hasJsonLd,
        hasViewport,
        hasRobotsMeta,
        htmlBytesSampled: sampleHtml.length
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(result));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ ok: false, error: err.message || 'Probe error' }));
    }
  });
}

const server = http.createServer((req, res) => {
  // Probe API endpoint
  if (req.url === '/api/tools/probe' && req.method === 'POST') {
    return handleProbe(req, res);
  }

  // Static file serving from dist
  let reqPath = req.url.split('?')[0];
  let filePath = path.join(DIST_DIR, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    return fs.createReadStream(filePath).pipe(res);
  }

  // SPA fallback to index.html
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return fs.createReadStream(indexPath).pipe(res);
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('DEZO Website Build Not Found. Run `npm run build` first.');
});

server.listen(PORT, () => {
  console.log(`DEZO Production Server running on http://localhost:${PORT}`);
});
