import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH || 'playwright');
const base=process.env.BASE_URL || 'http://localhost:8080';
const browser=await chromium.launch({headless:true,args:['--use-fake-device-for-media-stream','--autoplay-policy=no-user-gesture-required']});
const errors=[];
try {
  const context=await browser.newContext({permissions:['microphone','camera'],viewport:{width:390,height:844}});
  // A deterministic display source exercises the same replaceTrack transport and
  // stop-sharing UI without opening the operating system's private desktop picker.
  await context.addInitScript(()=>{
    let captures=0;
    window.testStreams=[];
    const videoSource=(width,height)=>{
      const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
      const ctx=canvas.getContext('2d');let frame=0;
      const interval=setInterval(()=>{ctx.fillStyle=frame++%2?'#a1f7d1':'#345586';ctx.fillRect(0,0,width,height);ctx.fillStyle='black';ctx.font='30px sans-serif';ctx.fillText('Test frame '+frame,20,50);},60);
      const stream=canvas.captureStream(15),track=stream.getVideoTracks()[0],stop=track.stop.bind(track);
      track.stop=()=>{clearInterval(interval);stop();};return stream;
    };
    navigator.mediaDevices.getUserMedia=async constraints=>{
      captures++;
      if(window.testRejectCapture){window.testRejectCapture=false;throw new DOMException('Test permission denied','NotAllowedError');}
      const stream=new MediaStream();
      if(constraints.audio){const ctx=new AudioContext();await ctx.resume();const oscillator=ctx.createOscillator();oscillator.frequency.value=440;const output=ctx.createMediaStreamDestination();oscillator.connect(output);oscillator.start();const track=output.stream.getAudioTracks()[0],stop=track.stop.bind(track);track.stop=()=>{stop();oscillator.stop();ctx.close();};stream.addTrack(track);}
      if(constraints.video)stream.addTrack(videoSource(640,360).getVideoTracks()[0]);
      window.testStreams.push(stream);return stream;
    };
    window.testCaptures=()=>captures;
    navigator.mediaDevices.getDisplayMedia=async()=>{
      const stream=videoSource(960,540);
      window.testDisplayStream=stream; return stream;
    };
  });
  const a=await context.newPage(), b=await context.newPage();
  for(const p of [a,b])p.on('pageerror',e=>errors.push(e.message));
  async function join(p,name,room){await p.goto(`${base}/?room=${room}`,{waitUntil:'domcontentloaded'});await p.locator('#join-dialog').waitFor();await p.fill('#device-name',name);await p.locator('#join-form .primary').click();await p.waitForFunction(()=>document.querySelector('#network').textContent.includes('ONLINE'));}
  const room='media-'+Date.now();await join(a,'Alice',room);await join(b,'Bob',room);
  await a.locator('.node.connected').waitFor();await b.locator('.node.connected').waitFor();await a.locator('.node').click();await b.locator('.node').click();
  await a.click('#voice-call');await b.locator('#incoming-actions').waitFor();
  assert.equal(await b.evaluate(()=>window.testCaptures()),0,'incoming calls must not capture before acceptance');
  await b.click('#accept-call');
  for(const p of [a,b])await p.waitForFunction(()=>document.querySelector('#call-state').textContent==='Live');
  for(const p of [a,b])await p.waitForFunction(()=>document.querySelector('#remote-audio').currentTime>0&&document.querySelector('#remote-audio').srcObject?.getAudioTracks()[0]?.readyState==='live');
  console.log('PASS: accepted bidirectional voice call, no recipient capture before answer');
  await a.click('#mute-call');await b.waitForFunction(()=>document.querySelector('#remote-status').textContent==='Microphone muted');assert(await a.evaluate(()=>document.querySelector('#mute-call').getAttribute('aria-pressed')==='true'));
  await a.click('#mute-call');
  await a.click('#camera-call');await b.waitForFunction(()=>!document.querySelector('#remote-video').hidden&&document.querySelector('#remote-video').videoWidth>0);
  await b.click('#camera-call');await a.waitForFunction(()=>!document.querySelector('#remote-video').hidden&&document.querySelector('#remote-video').videoWidth>0);
  await a.click('#camera-call');await b.locator('#remote-video').waitFor({state:'hidden'});
  await a.click('#camera-call');await b.waitForFunction(()=>!document.querySelector('#remote-video').hidden&&document.querySelector('#remote-video').videoWidth>0);
  console.log('PASS: mute/unmute and bidirectional webcam with camera stop/restart');
  await a.click('#screen-call');await b.waitForFunction(()=>!document.querySelector('#remote-screen-stage').hidden&&document.querySelector('#remote-screen').videoWidth===960);
  assert(await b.evaluate(()=>!document.querySelector('#remote-video').hidden),'camera stays visible while sharing screen');
  await a.screenshot({path:'/tmp/orbit-call.png',fullPage:true});
  await a.click('#screen-call');await b.locator('#remote-screen-stage').waitFor({state:'hidden'});
  await a.click('#screen-call');await b.locator('#remote-screen-stage').waitFor();
  await a.evaluate(()=>{const t=window.testDisplayStream.getVideoTracks()[0];t.stop();t.dispatchEvent(new Event('ended'));});
  await b.locator('#remote-screen-stage').waitFor({state:'hidden'});
  console.log('PASS: separate screen track, stop sharing, and browser-ended capture cleanup');
  await a.fill('#message','Text during a call');await a.locator('.send').click();await b.locator('.bubble').filter({hasText:'Text during a call'}).waitFor();
  await a.click('#hangup-call');await b.locator('#call-stage').waitFor({state:'hidden'});
  for(const p of [a,b])assert(await p.evaluate(()=>window.testStreams.every(s=>s.getTracks().every(t=>t.readyState==='ended'))));
  for(const p of [a,b])assert(await p.evaluate(()=>['local-video','remote-video','remote-audio','local-screen','remote-screen'].every(id=>document.getElementById(id).srcObject===null)));
  await a.click('#video-call');await b.locator('#incoming-actions').waitFor();await b.click('#decline-call');await a.locator('#call-stage').waitFor({state:'hidden'});
  await a.evaluate(()=>window.testRejectCapture=true);await a.click('#voice-call');await a.locator('#toast').filter({hasText:'permission was denied'}).waitFor();await a.locator('#call-stage').waitFor({state:'hidden'});
  await a.click('#video-call');await b.locator('#incoming-actions').waitFor();await b.click('#accept-call');
  for(const p of [a,b]){await p.waitForFunction(()=>document.querySelector('#call-state').textContent==='Live');await p.waitForFunction(()=>document.querySelector('#remote-video').videoWidth>0);}
  await a.click('#broadcast');await b.locator('#call-stage').waitFor({state:'hidden'});
  for(const p of [a,b])assert(await p.evaluate(()=>window.testStreams.every(s=>s.getTracks().every(t=>t.readyState==='ended'))));
  assert.deepEqual(errors,[]);console.log('PASS: concurrent text, hangup cleanup, decline, repeat video call, leave cleanup');
}finally{await browser.close();}
