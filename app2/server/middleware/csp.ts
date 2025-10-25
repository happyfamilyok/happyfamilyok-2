// server/middleware/csp.ts
import { randomBytes } from 'node:crypto'  // <-- Node crypto

export default defineEventHandler((event) => {
  const nonce = randomBytes(16).toString('base64')
  event.context.nonce = nonce

  setResponseHeaders(event, {
    'Content-Security-Policy': `
      default-src 'self';
      script-src 'self' 'nonce-${nonce}' blob: http://localhost:3000 http://localhost:5173 https://cdn.apple-mapkit.com https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.googleadservices.com https://tpc.googlesyndication.com https://www.gstatic.com https://static.hotjar.com https://script.hotjar.com;
      style-src 'self' 'nonce-${nonce}' blob: http://localhost:5173 https://static.hotjar.com https://www.gstatic.com;
      img-src 'self' data: blob: https:;
      connect-src 'self' ws: wss: https: http:;
      font-src 'self' data: https:;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
    `.replace(/\s+/g, ' ')
  })
})
