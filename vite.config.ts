import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import type { IncomingMessage, ServerResponse } from 'http';

function probeApiPlugin(): Plugin {
  return {
    name: 'dezo-probe-api',
    configureServer(server) {
      server.middlewares.use(async (req: IncomingMessage, res: ServerResponse, next) => {
        if (req.url === '/api/tools/probe' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');
              const targetUrl = data.url;

              if (!targetUrl || typeof targetUrl !== 'string') {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ ok: false, error: 'URL is required' }));
              }

              let parsedUrl: URL;
              try {
                parsedUrl = new URL(targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`);
              } catch {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ ok: false, error: 'Invalid URL format' }));
              }

              // Disallow localhost / private loopback addresses
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

              const headersObj: Record<string, string> = {};
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
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              return res.end(JSON.stringify({ ok: false, error: err.message || 'Probe error' }));
            }
          });
        } else {
          next();
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), probeApiPlugin()],
  server: {
    port: 5173,
    host: true
  }
});
