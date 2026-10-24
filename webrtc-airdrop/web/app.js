import { MediaCall } from '/media.js';
const $ = id => document.getElementById(id);
let client, ownId, peers = [], selected, relay = false, active = false, connected = new Set(), starting = new Set(), inbox = new Map(), history = new Map(), transfers = new Map(), downloads = [], toastTimer, generation = 0;
let Client;
let clientConfig = {serverUrl:""};
const media = new MediaCall({getClient:()=>client,getSelected:()=>selected,getPeers:()=>peers,isActive:()=>active,notify:toast,selectPeer:select});
const MAX_FILE = 25 * 1024 * 1024;
const CHUNK = 12000;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
function toast(message) { $('toast').textContent = message; $('toast').classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => $('toast').classList.remove('show'), 4000); }
function system(text) { if (!selected) return; addMessage(selected, {system:text}); }
function addMessage(id, entry) { const list = history.get(id) || []; list.push(entry); history.set(id, list.slice(-200)); if (selected === id) renderMessages(); }
function renderMessages() {
  const root = $('messages'); root.replaceChildren();
  for (const entry of history.get(selected) || []) {
    const el = document.createElement('div');
    if (entry.system) { el.className = 'system'; el.textContent = entry.system; }
    else { el.className = `bubble ${entry.mine ? 'mine' : ''}`; const meta = document.createElement('span'); meta.className = 'meta'; meta.textContent = entry.mine ? 'YOU' : (peers.find(p => p.id === selected)?.name || 'DEVICE'); el.append(meta);
      if (entry.url) { const link = document.createElement('a'); link.href = entry.url; link.download = entry.name; link.textContent = `↓ ${entry.name}`; el.append(link); }
      else el.append(document.createTextNode(entry.text));
    }
    root.append(el);
  }
  for (const t of inbox.values()) if (t.from === selected && !t.accepted) renderOffer(selected,t);
  root.scrollTop = root.scrollHeight;
}
function renderPeers() {
  $('nodes').replaceChildren();
  const others = peers.filter(p => p.id !== ownId).sort((a,b) => a.id.localeCompare(b.id));
  others.forEach((p, i) => {
    const angle = -Math.PI + i * 2 * Math.PI / Math.max(others.length, 3);
    const button = document.createElement('button'); button.className = `node ${connected.has(p.id) ? 'connected' : ''} ${selected === p.id ? 'selected' : ''}`;
    button.style.left = `${50 + Math.cos(angle) * 33}%`; button.style.top = `${48 + Math.sin(angle) * 30}%`;
    const avatar = document.createElement('span'); avatar.className = 'avatar'; avatar.textContent = /phone|iphone|android/i.test(p.name) ? '▯' : '▱';
    const name = document.createElement('strong'); name.textContent = p.name;
    const status = document.createElement('small'); status.textContent = relay ? 'SERVER RELAY' : connected.has(p.id) ? 'CONNECTED' : starting.has(p.id) ? 'CONNECTING…' : 'ESTABLISHING LINK…';
    button.append(avatar,name,status); button.onclick = () => select(p.id); $('nodes').append(button);
  });
  $('empty').hidden = others.length > 0;
  $('discovery-status').textContent = active ? others.length ? `${others.length} ${others.length === 1 ? 'device' : 'devices'} in your orbit · tap to connect` : 'Broadcasting · waiting for another device' : 'Your next connection starts here';
  $('broadcast').setAttribute('aria-checked', String(active));
  $('visibility-note').textContent = active ? 'Discoverable to room members' : 'Broadcast is paused';
}
function select(id) {
  selected = id; $('chat').hidden = false;
  $('chat-title').textContent = peers.find(p => p.id === id)?.name || 'Device';
  $('transport-note').textContent = relay ? 'Server relay · contents are visible to the server' : 'Direct WebRTC · encrypted in transit';
  renderMessages(); renderPeers(); $('chat').scrollIntoView({behavior:'smooth',block:'nearest'});
}
function sendPacket(id, packet) { if (!active || !client) throw new Error('Join the room first'); client.send(id, JSON.stringify(packet), relay); }
async function onEvent(text, token) {
  if (token !== generation) return;
  const e = JSON.parse(text);
  await media.event(e);
  if (e.type === 'welcome') { ownId = e.id; active = true; $('network').innerHTML = '<i></i> ONLINE'; $('network').classList.add('online'); renderPeers(); }
  if (e.type === 'peers') {
    peers = e.peers;
    for (const id of [...connected, ...starting]) if (!peers.some(p => p.id === id)) { client.forget(id); connected.delete(id); starting.delete(id); }
    if (selected && !peers.some(p => p.id === selected)) { system('This device left the room.'); selected = undefined; $('chat').hidden = true; }
    renderPeers();
    // Exactly one initiator per pair prevents offer glare. Connections are established
    // automatically; selecting a node opens its conversation.
    if (!relay) for (const p of peers) if (p.id !== ownId && ownId < p.id && !connected.has(p.id) && !starting.has(p.id)) {
      starting.add(p.id);
      client.connect(p.id).catch(error => { starting.delete(p.id); toast(`Connection failed: ${error}`); });
    }
  }
  if (e.type === 'connected') { connected.add(e.id); starting.delete(e.id); renderPeers(); }
  if (e.type === 'disconnected' || (e.type === 'connection-state' && ['Failed','Closed','Disconnected'].includes(e.state))) { connected.delete(e.id); starting.delete(e.id); renderPeers(); if (e.state === 'Failed') toast('Direct connection failed. Configure TURN or enable server relay in settings.'); }
  if (e.type === 'offline') { active = false; connected.clear(); starting.clear(); $('network').innerHTML = '<i></i> OFFLINE'; $('network').classList.remove('online'); peers = []; renderPeers(); toast('Disconnected. Use the broadcast switch to rejoin.'); }
  if (e.type === 'error') toast(e.message);
  if (e.type === 'data') receive(e);
}
function receive(event) {
  try {
    const data = JSON.parse(event.data); const id = event.from;
    if (!peers.some(p => p.id === id)) return;
    if (data.kind === 'text' && typeof data.text === 'string' && data.text.length <= 16000) {
      addMessage(id,{text:data.text}); if (!selected) select(id); else if (selected !== id) toast(`Message from ${peers.find(p=>p.id===id)?.name}`);
    }
    if (data.kind === 'file-offer') {
      if (!Number.isInteger(data.size) || data.size < 0 || data.size > MAX_FILE || typeof data.name !== 'string' || data.name.length > 255 || typeof data.id !== 'string') return;
      if (inbox.size >= 4) return;
      inbox.set(`${id}:${data.id}`,{...data,from:id,parts:[],received:0,accepted:false,created:Date.now()});
      addMessage(id,{system:`Incoming file: ${data.name} (${(data.size / 1024).toFixed(1)} KB). Accept to receive.`}); select(id);
      renderMessages();
    }
    if (data.kind === 'file-accept') { const t = transfers.get(data.id); if (t && t.to === id) t.accepted = true; }
    if (data.kind === 'file-chunk') {
      const key = `${id}:${data.id}`; const transfer = inbox.get(key); if (!transfer?.accepted || typeof data.bytes !== 'string' || data.bytes.length > 18000) return;
      const chunk = Uint8Array.from(atob(data.bytes),c => c.charCodeAt(0));
      transfer.received += chunk.length;
      if (transfer.received > transfer.size) { inbox.delete(key); return; }
      transfer.parts.push(chunk);
      $('file-progress').hidden = false; $('file-progress').textContent = `Receiving ${transfer.name} · ${Math.round(transfer.received/Math.max(1,transfer.size)*100)}%`;
    }
    if (data.kind === 'file-end') {
      const key = `${id}:${data.id}`; const t = inbox.get(key);
      if (t?.accepted && t.received === t.size) { const url = URL.createObjectURL(new Blob(t.parts,{type:'application/octet-stream'})); downloads.push(url); addMessage(id,{url,name:t.name}); toast('File received'); }
      inbox.delete(key); $('file-progress').hidden = true;
    }
  } catch { toast('Could not read a message from this device.'); }
}
function renderOffer(id,data) {
  const button = document.createElement('button'); button.className = 'primary'; button.textContent = `Accept ${data.name}`;
  button.onclick = () => { try { const t = inbox.get(`${id}:${data.id}`); if (!t) throw new Error('Offer expired'); sendPacket(id,{kind:'file-accept',id:data.id}); t.accepted = true; button.remove(); } catch(e) { toast(String(e)); } };
  $('messages').append(button);
}
async function join() {
  const name = $('device-name').value.trim(), room = $('room').value.trim();
  if (!name || !room) return;
  $('join-error').textContent = '';
  try {
    if (!Client) throw new Error('WASM is not built yet. Run ./scripts/build.sh, then reload.');
    const configuredServer = $('server-url').value.trim();
    if (clientConfig.requireServerUrl && !configuredServer) throw new Error('Enter the public HTTPS address of the Rust signaling server.');
    const server = new URL(configuredServer || location.origin);
    if (!['http:','https:'].includes(server.protocol) || server.username || server.password || server.search || server.hash) throw new Error('Use an HTTP(S) server URL without credentials or query parameters.');
    if (location.protocol === 'https:' && server.protocol !== 'https:') throw new Error('An HTTPS client needs an HTTPS signaling server.');
    server.pathname = server.pathname.replace(/\/?$/, '/');
    const response = await fetch(new URL('config', server)); if (!response.ok) throw new Error('Server configuration unavailable');
    const config = await response.text();
    media.end(true); generation++; client?.close(); client?.free(); connected.clear(); starting.clear(); active = false; selected = undefined; peers = []; $('chat').hidden = true; inbox.clear(); transfers.clear(); history.clear();
    relay = $('relay').checked;
    const url = new URL('ws',server); url.protocol = server.protocol === 'https:' ? 'wss:' : 'ws:'; url.searchParams.set('room',room); url.searchParams.set('name',name);
    const token = generation; client = new Client(url.href,config,text => onEvent(text,token)); media.bind(client);
    localStorage.setItem('orbit-name',name); localStorage.setItem('orbit-room',room); localStorage.setItem('orbit-server',configuredServer);
    $('self-name').textContent = name; $('room-label').textContent = room;
    const invite = new URL(location.href); invite.searchParams.set('room',room); if(configuredServer)invite.searchParams.set('server',configuredServer); else invite.searchParams.delete('server'); window.history.replaceState(null,'',invite);
    $('join-dialog').close(); renderPeers();
  } catch(e) { $('join-error').textContent = String(e); }
}
$('join-form').onsubmit = e => { e.preventDefault(); join(); };
$('settings').onclick = () => $('join-dialog').showModal();
$('broadcast').onclick = () => { if (active) { media.end(true); generation++; client?.close(); active = false; peers = []; connected.clear(); starting.clear(); $('network').innerHTML = '<i></i> OFFLINE'; $('network').classList.remove('online'); $('chat').hidden = true; renderPeers(); } else join(); };
$('copy-room').onclick = async () => { try { const invite = new URL(location.href); invite.searchParams.set('room',$('room').value); if($('server-url').value.trim())invite.searchParams.set('server',$('server-url').value.trim()); await navigator.clipboard.writeText(invite.href); toast('Room invite copied'); } catch { toast('Share this page’s URL to invite another device'); } };
$('close-chat').onclick = () => { selected = undefined; $('chat').hidden = true; renderPeers(); };
$('message-form').onsubmit = e => { e.preventDefault(); const text = $('message').value.trim(); if (!text || !selected) return; try { sendPacket(selected,{kind:'text',text}); addMessage(selected,{text,mine:true}); $('message').value = ''; } catch(error) { toast(String(error)); } };
$('attach').onclick = () => $('file').click();
$('file').onchange = async () => {
  const file = $('file').files[0], to = selected, token = generation, transport = client;
  $('file').value = ''; if (!file || !to) return;
  if (file.size > MAX_FILE) return toast('Choose a file smaller than 25 MB');
  const id = crypto.randomUUID(); const transfer = {to,accepted:false}; transfers.set(id,transfer);
  try {
    sendPacket(to,{kind:'file-offer',id,name:file.name,size:file.size}); system(`Waiting for the other device to accept ${file.name}…`);
    const deadline = Date.now()+60000;
    while (!transfer.accepted) { if (Date.now()>deadline || token !== generation || !active) throw new Error('File offer expired'); await delay(100); }
    $('file-progress').hidden = false;
    for (let offset=0;offset<file.size;offset+=CHUNK) {
      if (token !== generation || !active) throw new Error('Transfer interrupted');
      while (transport.buffered(to)>256*1024) { if (token !== generation || !active || Date.now()>deadline+300000) throw new Error('Transfer stalled'); await delay(25); }
      const bytes = new Uint8Array(await file.slice(offset,offset+CHUNK).arrayBuffer());
      sendPacket(to,{kind:'file-chunk',id,bytes:btoa(String.fromCharCode(...bytes))});
      $('file-progress').textContent = `Sending ${file.name} · ${Math.min(100,Math.round((offset+bytes.length)/file.size*100))}%`;
      await delay(relay ? 15 : 1);
    }
    sendPacket(to,{kind:'file-end',id}); addMessage(to,{mine:true,text:`Sent ${file.name}`});
  } catch(e) { toast(String(e)); }
  finally { transfers.delete(id); $('file-progress').hidden = true; }
};
setInterval(() => { for (const [key,t] of inbox) if (Date.now()-t.created > 360000) inbox.delete(key); },30000);
window.addEventListener('pagehide', () => { media.end(true); client?.close(); downloads.forEach(URL.revokeObjectURL); });
$('device-name').value = localStorage.getItem('orbit-name') || (/Mobi/i.test(navigator.userAgent) ? 'My phone' : 'My computer');
$('room').value = new URLSearchParams(location.search).get('room') || localStorage.getItem('orbit-room') || `orbit-${Array.from(crypto.getRandomValues(new Uint8Array(12)),x=>x.toString(16).padStart(2,'0')).join('')}`;
try { const response = await fetch('/client-config.json'); if(response.ok)clientConfig = await response.json(); } catch {}
$('server-url').value = new URLSearchParams(location.search).get('server') || clientConfig.serverUrl || localStorage.getItem('orbit-server') || '';
try { const module = await import('/pkg/orbit_client.js'); await module.default(); Client = module.Client; } catch { $('join-error').textContent = 'Build the WASM client with ./scripts/build.sh to start connecting.'; }
renderPeers(); $('join-dialog').showModal();
