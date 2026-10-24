import { test } from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { createIdleProxy } from './idle-proxy.mjs';

const name = 'happyfamily-anubis-idle-auth-123';
test('passes expire after inactivity, reset on activity, and fail closed across hosts/restarts', async () => {
  let clock = 1000;
  const backend = http.createServer((req, res) => {
    if (req.url === '/pass') res.setHeader('Set-Cookie', `${name}=signed-token; Path=/; Secure`);
    res.end(req.headers.cookie || 'challenge');
  });
  await new Promise(resolve => backend.listen(0, '127.0.0.1', resolve));
  const options = { targetPort: backend.address().port, now: () => clock };
  let proxy = createIdleProxy(options);
  await new Promise(resolve => proxy.listen(0, '127.0.0.1', resolve));
  const request = (path = '/', cookie = `${name}=signed-token`, host = 'happyfamilyok.com') => new Promise((resolve, reject) => {
    http.get({ host: '127.0.0.1', port: proxy.address().port, path, headers: { Host: host, Cookie: cookie } }, res => {
      let body = ''; res.on('data', c => body += c); res.on('end', () => resolve({ body, headers: res.headers }));
    }).on('error', reject);
  });
  try {
    assert.equal((await request('/', `other=x; ${name}=unknown`)).body, 'other=x');
    await request('/pass', '');
    assert.equal((await request()).body, `${name}=signed-token`);
    clock += 299999;
    assert.equal((await request()).body, `${name}=signed-token`);
    clock += 299999;
    assert.equal((await request()).body, `${name}=signed-token`); // activity extends beyond original five minutes
    clock += 300000;
    const expired = await request();
    assert.equal(expired.body, 'challenge');
    assert.match(expired.headers['set-cookie'][0], /Max-Age=0/);
    await request('/pass', '');
    assert.equal((await request('/', `${name}=signed-token`, 'www.happyfamilyok.com')).body, 'challenge');
    await new Promise(resolve => proxy.close(resolve));
    proxy = createIdleProxy(options);
    await new Promise(resolve => proxy.listen(0, '127.0.0.1', resolve));
    assert.equal((await request()).body, 'challenge');
  } finally {
    await new Promise(resolve => proxy.close(resolve));
    await new Promise(resolve => backend.close(resolve));
  }
});
