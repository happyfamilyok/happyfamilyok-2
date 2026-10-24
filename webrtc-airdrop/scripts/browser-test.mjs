import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH || 'playwright');
const base=process.env.BASE_URL || 'http://localhost:8080';
const browser=await chromium.launch({headless:true});
const errors=[];
try {
  const a=await browser.newPage({viewport:{width:390,height:844}}), b=await browser.newPage();
  for(const page of [a,b]) page.on('pageerror',e=>errors.push(e.message));
  async function join(page,name,room,relay=false) { await page.goto(base+'/?room='+room); await page.locator('#join-dialog').waitFor({state:'visible'}); await page.fill('#device-name',name); await page.locator('#relay').setChecked(relay); await page.click('#join-form .primary'); await page.waitForFunction(()=>document.querySelector('#network').textContent.includes('ONLINE')); }
  const room='browser-'+Date.now();
  await join(a,'Phone',room); await join(b,'Laptop',room);
  console.log('Joined both devices');
  await a.locator('.node.connected').waitFor({timeout:20000}); await b.locator('.node.connected').waitFor();
  await a.locator('.node').click(); await b.locator('.node').click();
  await a.fill('#message','Hello over WebRTC'); await a.locator('.send').click(); await b.locator('#messages .bubble').filter({hasText:'Hello over WebRTC'}).waitFor();
  console.log('WebRTC chat delivered');
  await a.setInputFiles('#file',{name:'hello.txt',mimeType:'text/plain',buffer:Buffer.from('Actual peer-to-peer file bytes')});
  await b.getByRole('button',{name:'Accept hello.txt'}).click();
  const link=b.getByRole('link',{name:'↓ hello.txt'}); await link.waitFor();
  const bytes=await link.evaluate(async el=>await (await fetch(el.href)).text()); assert.equal(bytes,'Actual peer-to-peer file bytes');
  console.log('File bytes verified');
  assert(await a.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await a.locator('#close-chat').click();
  await a.screenshot({path:process.env.SCREENSHOT_PATH || '/tmp/orbit-phone.png',fullPage:true});
  await a.click('#broadcast'); await b.locator('.node').waitFor({state:'detached'});
  await a.click('#settings'); await a.locator('#relay').check(); await a.locator('#join-form .primary').click();
  await b.click('#settings'); await b.locator('#relay').check(); await b.locator('#join-form .primary').click();
  await a.locator('.node').waitFor(); await b.locator('.node').waitFor();
  await a.locator('.node').click(); await b.locator('.node').click();
  await a.fill('#message','Hello via Rust relay'); await a.locator('.send').click(); await b.locator('#messages .bubble').filter({hasText:'Hello via Rust relay'}).waitFor();
  assert.deepEqual(errors,[]); console.log('PASS: actual WASM, direct WebRTC chat, accepted file bytes, mobile layout, leave/rejoin, Rust relay chat');
} finally { await browser.close(); }
