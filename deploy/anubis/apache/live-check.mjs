import http from 'node:http';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import { createIdleProxy } from './idle-proxy.mjs';
let clock = 1000;
const proxy = createIdleProxy({ now: () => clock });
await new Promise(resolve => proxy.listen(0, '127.0.0.1', resolve));
const cookies = new Map();
const request = path => new Promise((resolve, reject) => {
  const req = http.get({ hostname: '127.0.0.1', port: proxy.address().port, path,
    headers: { Host: 'happyfamilyok.com', 'X-Real-IP': '127.0.0.1',
      'X-Forwarded-Proto': 'https', 'User-Agent': 'Mozilla/5.0',
      Cookie: [...cookies].map(([k,v]) => `${k}=${v}`).join('; ') } }, res => {
    for (const c of res.headers['set-cookie'] || []) {
      const pair = c.split(';')[0]; const i = pair.indexOf('=');
      if (/Max-Age=0|Max-Age=-/i.test(c)) cookies.delete(pair.slice(0,i));
      else cookies.set(pair.slice(0,i), pair.slice(i+1));
    }
    let body = ''; res.on('data', c => body += c);
    res.on('end', () => resolve({ body, status: res.statusCode }));
  }); req.on('error', reject);
});
try {
  const initial = await request('/');
  const challenge = JSON.parse(initial.body.match(/<script id="anubis_challenge"[^>]*>(.*?)<\/script>/s)[1]);
  assert.equal(challenge.rules.difficulty, 5);
  let nonce = 0, response;
  const began = Date.now();
  while (true) {
    response = createHash('sha256').update(challenge.challenge.randomData + nonce).digest('hex');
    if (response.startsWith('0'.repeat(challenge.rules.difficulty))) break;
    nonce++;
    if (Date.now() - began > 45000) throw new Error('Proof test exceeded time limit');
  }
  const params = new URLSearchParams({ id: challenge.challenge.id, nonce: String(nonce), response,
    elapsedTime: String(Date.now()-began), redir: 'https://happyfamilyok.com/' });
  const passed = await request('/.within.website/x/cmd/anubis/api/pass-challenge?' + params);
  assert.equal(passed.status, 302);
  assert.ok([...cookies.keys()].some(k => k.startsWith('happyfamily-anubis-idle-auth')));
  let page = await request('/'); assert.ok(page.body.includes('Happy Family')); assert.ok(!page.body.includes('id="anubis_challenge"'));
  clock += 299999;
  page = await request('/'); assert.ok(!page.body.includes('id="anubis_challenge"'));
  clock += 299999;
  page = await request('/'); assert.ok(!page.body.includes('id="anubis_challenge"'));
  clock += 300000;
  page = await request('/'); assert.ok(page.body.includes('id="anubis_challenge"'));
  console.log('Real Anubis proof accepted; pass survives ongoing activity and expires after five idle minutes (controlled clock).');
} finally { await new Promise(resolve => proxy.close(resolve)); }
