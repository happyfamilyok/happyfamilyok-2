// Capture and UI live here; Rust/WASM owns media peer connections and signaling.
const $ = id => document.getElementById(id);
export class MediaCall {
  constructor({getClient,getSelected,getPeers,isActive,notify,selectPeer}) {
    Object.assign(this,{getClient,getSelected,getPeers,isActive,notify,selectPeer});
    this.call=null; this.epoch=0; this.mic=null; this.camera=null; this.screen=null;
    $('voice-call').onclick=()=>this.start(false);
    $('video-call').onclick=()=>this.start(true);
    $('accept-call').onclick=()=>this.answer();
    $('decline-call').onclick=()=>this.end(true,'Call declined');
    $('hangup-call').onclick=()=>this.end(true,'Call ended');
    $('mute-call').onclick=()=>this.mute();
    $('camera-call').onclick=()=>this.toggleCamera();
    $('screen-call').onclick=()=>this.toggleScreen();
    $('play-audio').onclick=()=>this.playAudio();
  }
  bind(client) {
    client.set_media_callback((id,session,track,slot)=>{
      if (!this.call || this.call.id!==id || this.call.session!==session) return;
      const key=slot==='0'?'remote-audio':slot==='1'?'remote-video':'remote-screen';
      $(key).srcObject=new MediaStream([track]);
      if (slot==='0') this.playAudio(); else $(key).play().catch(()=>{});
    });
  }
  name(id) { return this.getPeers().find(p=>p.id===id)?.name || 'Device'; }
  control(action,extra={}) {
    const c=this.call; if (!c || !this.isActive()) return;
    this.getClient().call_signal(c.id,JSON.stringify({action,session:c.session,...extra}));
  }
  async capture(video,epoch) {
    if (!navigator.mediaDevices?.getUserMedia) throw new Error('Microphone and camera need HTTPS and a supported browser.');
    const stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true},video:video?{facingMode:'user',width:{ideal:1280},height:{ideal:720}}:false});
    if (epoch!==this.epoch || !this.call) { stream.getTracks().forEach(t=>t.stop()); throw new Error('Call cancelled'); }
    this.mic=new MediaStream(stream.getAudioTracks());
    this.camera=video?new MediaStream(stream.getVideoTracks()):null;
    $('local-video').srcObject=this.camera;
    const microphone=this.mic.getAudioTracks()[0];
    if(microphone)microphone.onended=()=>{if(epoch===this.epoch)this.end(true,'Microphone disconnected');};
    if(this.camera)this.watchCamera(this.camera,epoch);
  }
  async start(video) {
    if (this.call) return this.notify('Finish your current call first.');
    const id=this.getSelected(); if (!id || !this.isActive()) return this.notify('Select an online device first.');
    const epoch=++this.epoch;
    this.call={id,session:crypto.randomUUID(),video,state:'Preparing microphone…',remoteCamera:video,remoteScreen:false}; this.render();
    try {
      await this.capture(video,epoch);
      if (epoch!==this.epoch) return;
      await this.getClient().media_start(id,this.call.session,true,this.mic.getAudioTracks()[0],this.camera?.getVideoTracks()[0]);
      if (epoch!==this.epoch) return;
      this.call.state='Calling…'; this.control('invite',{video}); this.render(); this.timeout(45000,'No answer');
    } catch(e) { if(epoch===this.epoch) { this.notify(this.error(e)); this.end(true); } }
  }
  async answer() {
    if (!this.call?.incoming || this.call.answering) return;
    const epoch=this.epoch; this.call.answering=true; this.call.state='Preparing microphone…'; clearTimeout(this.timer); this.render();
    try {
      await this.capture(this.call.video,epoch);
      if (epoch!==this.epoch) return;
      await this.getClient().media_start(this.call.id,this.call.session,false,this.mic.getAudioTracks()[0],this.camera?.getVideoTracks()[0]);
      if (epoch!==this.epoch) return;
      this.call.incoming=false; this.call.state='Connecting…'; this.control('accept'); this.render(); this.timeout(30000,'Connection timed out. Configure TURN for restrictive networks.');
    } catch(e) { if(epoch===this.epoch) { this.notify(this.error(e)); this.end(true); } }
  }
  async event(e) {
    if(e.type==='call') {
      const d=e.data; if (!d || typeof d.session!=='string') return;
      if(d.action==='invite') {
        if (!this.getPeers().some(p=>p.id===e.from)) return;
        if(this.call) { this.getClient().call_signal(e.from,JSON.stringify({action:'decline',session:d.session,reason:'busy'})); return; }
        ++this.epoch; this.call={id:e.from,session:d.session,video:d.video===true,incoming:true,state:'Incoming call',remoteCamera:d.video===true,remoteScreen:false}; this.selectPeer(e.from); this.render(); this.timeout(45000,'Missed call'); return;
      }
      const c=this.call; if(!c || c.id!==e.from || c.session!==d.session) return;
      if(d.action==='accept' && c.state==='Calling…') {
        c.state='Connecting…'; this.render(); this.timeout(30000,'Connection timed out. Configure TURN for restrictive networks.');
        try { await this.getClient().media_offer(c.id); } catch(e) { if(this.call===c){this.notify(this.error(e)); this.end(true);} }
      }
      if(d.action==='hangup' || d.action==='decline') this.end(false,d.reason==='busy'?'This device is in another call.':d.action==='decline'?'Call declined':'Call ended');
      if(d.action==='status') { c.remoteCamera=d.camera===true; c.remoteScreen=d.screen===true; c.remoteMuted=d.muted===true; this.render(); }
    }
    if(e.type==='media-state' && this.call?.id===e.id && this.call.session===e.session) {
      if(e.state==='Connected') { this.call.state='Live'; clearTimeout(this.timer); this.status(); this.render(); }
      if(e.state==='Disconnected') { this.call.state='Reconnecting…'; this.render(); this.timeout(20000,'Connection lost'); }
      if(e.state==='Failed') this.end(true,'Call connection failed. Configure TURN for restrictive networks.');
    }
    if(e.type==='offline') this.end(false);
    if(e.type==='peers' && this.call && !e.peers.some(p=>p.id===this.call.id)) this.end(false,'The other device left.');
  }
  timeout(ms,message) { clearTimeout(this.timer); const epoch=this.epoch; this.timer=setTimeout(()=>{if(epoch===this.epoch)this.end(true,message);},ms); }
  status() { try {this.control('status',{camera:!!this.camera,screen:!!this.screen,muted:this.mic?.getAudioTracks()[0]?.enabled===false});} catch{} }
  mute() { const track=this.mic?.getAudioTracks()[0]; if(!track)return; track.enabled=!track.enabled; this.status(); this.render(); }
  async toggleCamera() {
    const c=this.call, epoch=this.epoch; if (!c || c.state!=='Live' || this.cameraBusy) return;
    this.cameraBusy=true;
    try {
      if (this.camera) {
        await this.getClient().media_track(c.id,1,undefined); this.camera.getTracks().forEach(t=>t.stop()); this.camera=null; $('local-video').srcObject=null;
      } else {
        const stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:1280},height:{ideal:720}},audio:false});
        if(epoch!==this.epoch) {stream.getTracks().forEach(t=>t.stop());return;}
        try { await this.getClient().media_track(c.id,1,stream.getVideoTracks()[0]); } catch(e) {stream.getTracks().forEach(t=>t.stop());throw e;}
        if(epoch!==this.epoch){stream.getTracks().forEach(t=>t.stop());return;}
        this.camera=stream; $('local-video').srcObject=stream; this.watchCamera(stream,epoch);
      }
      this.status(); this.render();
    } catch(e) {this.notify(this.error(e));} finally {this.cameraBusy=false;}
  }
  watchCamera(stream,epoch) {
    stream.getVideoTracks()[0].onended=async()=>{
      if(epoch!==this.epoch || this.camera!==stream)return;
      this.camera=null; $('local-video').srcObject=null;
      try{await this.getClient().media_track(this.call.id,1,undefined);}catch{}
      if(epoch===this.epoch){this.status();this.render();}
    };
  }
  async toggleScreen() {
    const c=this.call, epoch=this.epoch; if(!c || c.state!=='Live' || this.screenBusy)return;
    if(!navigator.mediaDevices?.getDisplayMedia)return this.notify('This browser cannot share its screen. You can still view a shared screen.');
    this.screenBusy=true;
    try {
      if(this.screen) {
        await this.getClient().media_track(c.id,2,undefined); this.screen.getTracks().forEach(t=>t.stop()); this.screen=null; $('local-screen').srcObject=null;
      } else {
        // Invoke directly from the click handler: screen capture requires user activation.
        const stream=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:{ideal:15,max:30}},audio:false});
        if(epoch!==this.epoch){stream.getTracks().forEach(t=>t.stop());return;}
        try {await this.getClient().media_track(c.id,2,stream.getVideoTracks()[0]);} catch(e){stream.getTracks().forEach(t=>t.stop());throw e;}
        if(epoch!==this.epoch){stream.getTracks().forEach(t=>t.stop());return;}
        this.screen=stream; $('local-screen').srcObject=stream;
        stream.getVideoTracks()[0].onended=async()=>{
          if(this.screen!==stream)return; this.screen=null; $('local-screen').srcObject=null;
          if(epoch===this.epoch){try{await this.getClient().media_track(c.id,2,undefined);}catch{} this.status();this.render();}
        };
      }
      this.status(); this.render();
    } catch(e) {if(e?.name!=='NotAllowedError')this.notify(this.error(e));} finally {this.screenBusy=false;}
  }
  async playAudio() { try {await $('remote-audio').play(); $('play-audio').hidden=true;} catch {$('play-audio').hidden=false;} }
  end(notifyPeer=false,message) {
    if(notifyPeer)try{this.control(this.call?.incoming?'decline':'hangup');}catch{}
    ++this.epoch; clearTimeout(this.timer);
    if(this.call)this.getClient()?.media_stop(this.call.id);
    for(const stream of [this.mic,this.camera,this.screen])stream?.getTracks().forEach(t=>t.stop());
    this.mic=this.camera=this.screen=null; this.call=null;
    for(const id of ['local-video','remote-video','remote-audio','local-screen','remote-screen']) {$(id).pause();$(id).srcObject=null;}
    $('play-audio').hidden=true; this.render(); if(message)this.notify(message);
  }
  error(e) { if(e?.name==='NotAllowedError')return 'Microphone or camera permission was denied. Allow access in your browser to call.'; if(e?.name==='NotFoundError')return 'No microphone or camera was found.'; return `Call error: ${e?.message || e}`; }
  render() {
    const c=this.call; $('call-stage').hidden=!c; document.body.classList.toggle('in-call',!!c); if(!c)return;
    if(this.renderedSession!==c.session){this.renderedSession=c.session;requestAnimationFrame(()=>$('call-stage').scrollIntoView({behavior:'smooth',block:'start'}));}
    $('call-name').textContent=this.name(c.id); $('voice-name').textContent=this.name(c.id); $('call-state').textContent=c.state;
    $('incoming-actions').hidden=!c.incoming; $('call-content').hidden=!!c.incoming;
    $('incoming-description').textContent=`${this.name(c.id)} is inviting you to a ${c.video?'video':'voice'} call. Your microphone${c.video?' and camera':''} will turn on when you answer.`;
    $('accept-call').disabled=!!c.answering;
    $('remote-video').hidden=!c.remoteCamera; $('voice-avatar').hidden=!!c.remoteCamera;
    $('local-video').hidden=!this.camera; $('remote-screen-stage').hidden=!c.remoteScreen; $('local-screen-stage').hidden=!this.screen;
    const muted=this.mic?.getAudioTracks()[0]?.enabled===false;
    $('mute-call').setAttribute('aria-pressed',String(muted)); $('mute-call').querySelector('small').textContent=muted?'Unmute':'Mute';
    $('camera-call').setAttribute('aria-pressed',String(!!this.camera)); $('camera-call').querySelector('small').textContent=this.camera?'Camera off':'Camera on';
    $('screen-call').setAttribute('aria-pressed',String(!!this.screen)); $('screen-call').querySelector('small').textContent=this.screen?'Stop sharing':'Share screen';
    $('remote-status').textContent=c.remoteMuted?'Microphone muted':'Private voice connection';
    $('camera-call').disabled=c.state!=='Live'; $('screen-call').disabled=c.state!=='Live'||!navigator.mediaDevices?.getDisplayMedia;
    $('call-hint').textContent=navigator.mediaDevices?.getDisplayMedia?'WebRTC · encrypted audio, camera, and screen':'WebRTC · encrypted audio and video · this browser can view shared screens';
  }
}
