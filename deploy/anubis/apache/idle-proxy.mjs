import http from 'node:http';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';

export function createIdleProxy({ targetPort = 8923, idleMs = 300000,
  cookiePrefix = 'happyfamily-anubis-idle', now = Date.now } = {}) {
  const sessions = new Map();
  const authName = name => name === `${cookiePrefix}-auth` || name.startsWith(`${cookiePrefix}-auth-`);
  const key = (host, value) => createHash('sha256').update(host + '\0' + value).digest('hex');
  function headersWithoutHop(headers) {
    const result = { ...headers };
    const nominated = String(headers.connection || '').split(',').map(s => s.trim().toLowerCase());
    for (const name of [...nominated, 'connection', 'keep-alive', 'proxy-authenticate',
      'proxy-authorization', 'te', 'trailer', 'transfer-encoding', 'upgrade']) delete result[name];
    return result;
  }
  const cleanup = setInterval(() => {
    for (const [id, seen] of sessions) if (now() - seen >= idleMs) sessions.delete(id);
  }, 60000).unref();
  const server = http.createServer((req, res) => {
    const host = String(req.headers.host || '').toLowerCase();
    const headers = headersWithoutHop(req.headers);
    const expired = [];
    const cookies = String(req.headers.cookie || '').split(';').map(c => c.trim()).filter(Boolean);
    headers.cookie = cookies.filter(cookie => {
      const separator = cookie.indexOf('=');
      if (separator < 1) return true;
      const name = cookie.slice(0, separator);
      if (!authName(name)) return true;
      const id = key(host, cookie.slice(separator + 1));
      const seen = sessions.get(id);
      if (seen === undefined || now() - seen >= idleMs) {
        sessions.delete(id);
        expired.push(`${name}=; Path=/; Max-Age=0; Secure; HttpOnly; SameSite=Lax`);
        return false;
      }
      sessions.set(id, now());
      return true;
    }).join('; ');
    if (!headers.cookie) delete headers.cookie;
    const upstream = http.request({ hostname: '127.0.0.1', port: targetPort,
      path: req.url, method: req.method, headers }, response => {
      const outgoing = headersWithoutHop(response.headers);
      const issued = response.headers['set-cookie'] || [];
      for (const cookie of issued) {
        const first = cookie.split(';', 1)[0];
        const separator = first.indexOf('=');
        const name = first.slice(0, separator);
        const value = first.slice(separator + 1);
        if (!authName(name)) continue;
        const id = key(host, value);
        if (!value || /(?:^|;)\s*max-age\s*=\s*(?:0|-[0-9]+)/i.test(cookie)) {
          sessions.delete(id);
        } else {
          if (sessions.size >= 100000) sessions.delete(sessions.keys().next().value);
          sessions.set(id, now());
        }
      }
      // Clear old passes before any new cookies issued by Anubis.
      if (expired.length || issued.length) outgoing['set-cookie'] = [...expired, ...issued];
      res.writeHead(response.statusCode, outgoing);
      response.on('error', () => res.destroy());
      response.pipe(res);
    });
    upstream.setTimeout(120000, () => upstream.destroy(new Error('Upstream timeout')));
    upstream.on('error', () => {
      if (!res.headersSent) res.writeHead(502, { 'Content-Type': 'text/plain', 'Cache-Control': 'no-store' });
      res.end('Website protection temporarily unavailable. Please retry.');
    });
    req.on('aborted', () => upstream.destroy());
    res.on('close', () => { if (!res.writableFinished) upstream.destroy(); });
    req.pipe(upstream);
  });
  server.on('close', () => clearInterval(cleanup));
  return server;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const idleMs = Number(process.env.IDLE_TIMEOUT_MS || 300000);
  if (!Number.isFinite(idleMs) || idleMs <= 0) throw new Error('Invalid idle timeout');
  createIdleProxy({ idleMs, cookiePrefix: process.env.AUTH_COOKIE_PREFIX || 'happyfamily-anubis-idle' })
    .listen(Number(process.env.PORT || 8924), '127.0.0.1', () => console.log('Idle proxy listening on loopback'));
}
