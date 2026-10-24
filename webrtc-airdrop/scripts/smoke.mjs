import assert from 'node:assert/strict';
const base = process.env.BASE_URL || 'http://localhost:8080';
const sockets=[];
async function node(room,name) {
  const url=new URL('ws',base.replace(/\/?$/, '/')); url.protocol=url.protocol.replace('http','ws'); url.search=new URLSearchParams({room,name});
  const ws=new WebSocket(url); sockets.push(ws); const messages=[];
  ws.addEventListener('message',e=>messages.push(JSON.parse(e.data)));
  const wait=async predicate=>{ const deadline=Date.now()+5000; while(Date.now()<deadline) { const index=messages.findIndex(predicate); if(index>=0) return messages.splice(index,1)[0]; await new Promise(r=>setTimeout(r,20)); } throw new Error(`Timeout for ${name}`); };
  const welcome=await wait(m=>m.type==='welcome'); return {ws,wait,id:welcome.id,messages};
}
try {
  assert.equal(await (await fetch(base+'/health')).text(),'ok');
  const room='test-'+Date.now(), a=await node(room,'A'), b=await node(room,'B'), c=await node(room+'-private','C');
  await a.wait(m=>m.type==='peers'&&m.peers.length===2);
  a.ws.send(JSON.stringify({type:'offer',to:b.id,from:c.id,sdp:'test-offer'}));
  const offer=await b.wait(m=>m.type==='offer'); assert.equal(offer.from,a.id); assert.equal(offer.sdp,'test-offer');
  b.ws.send(JSON.stringify({type:'relay',to:a.id,data:'hello'})); assert.equal((await a.wait(m=>m.type==='relay')).data,'hello');
  a.ws.send(JSON.stringify({type:'relay',to:c.id,data:'must not arrive'}));
  await new Promise(r=>setTimeout(r,200)); assert(!c.messages.some(m=>m.type==='relay'));
  b.ws.close(); await a.wait(m=>m.type==='peers'&&m.peers.length===1);
  console.log('PASS: health, discovery, signaling, sender identity, relay, room isolation, departure');
} finally { sockets.forEach(ws=>ws.close()); }
