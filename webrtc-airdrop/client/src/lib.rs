use serde_json::{Value, json};
use std::{cell::RefCell, collections::HashMap, rc::Rc};
use wasm_bindgen::{JsCast, prelude::*};
use wasm_bindgen_futures::{JsFuture, spawn_local};
use web_sys::*;

struct Link {
    pc: RtcPeerConnection,
    dc: Option<RtcDataChannel>,
    pending: Vec<RtcIceCandidateInit>,
    ready: bool,
}
struct Media {
    pc: RtcPeerConnection,
    session: String,
    tracks: Vec<Option<MediaStreamTrack>>,
    pending: Vec<RtcIceCandidateInit>,
    ready: bool,
    ice_callback: Option<Closure<dyn FnMut(RtcPeerConnectionIceEvent)>>,
    track_callback: Option<Closure<dyn FnMut(RtcTrackEvent)>>,
    state_callback: Option<Closure<dyn FnMut(Event)>>,
}
struct Inner {
    media: HashMap<String, Media>,
    media_callback: Option<js_sys::Function>,
    ws: WebSocket,
    links: HashMap<String, Link>,
    callback: js_sys::Function,
    config: RtcConfiguration,
}
#[wasm_bindgen]
pub struct Client {
    inner: Rc<RefCell<Inner>>,
}
fn emit(s: &Rc<RefCell<Inner>>, v: Value) {
    let cb = s.borrow().callback.clone();
    let _ = cb.call1(&JsValue::NULL, &JsValue::from_str(&v.to_string()));
}
fn signal(s: &Rc<RefCell<Inner>>, v: Value) -> Result<(), JsValue> {
    s.borrow().ws.send_with_str(&v.to_string())
}
fn report(s: &Rc<RefCell<Inner>>, e: JsValue) {
    emit(s, json!({"type":"error","message":format!("{e:?}")}));
}
fn channel(s: &Rc<RefCell<Inner>>, id: String, dc: RtcDataChannel) {
    s.borrow_mut().links.get_mut(&id).unwrap().dc = Some(dc.clone());
    let weak = Rc::downgrade(s);
    let peer = id.clone();
    let open = Closure::<dyn FnMut(Event)>::new(move |_| {
        if let Some(s) = weak.upgrade() {
            emit(&s, json!({"type":"connected","id":peer}));
        }
    });
    dc.set_onopen(Some(open.as_ref().unchecked_ref()));
    open.forget();
    let weak = Rc::downgrade(s);
    let peer = id.clone();
    let close = Closure::<dyn FnMut(Event)>::new(move |_| {
        if let Some(s) = weak.upgrade() {
            emit(&s, json!({"type":"disconnected","id":peer}));
        }
    });
    dc.set_onclose(Some(close.as_ref().unchecked_ref()));
    close.forget();
    let weak = Rc::downgrade(s);
    let message = Closure::<dyn FnMut(MessageEvent)>::new(move |event: MessageEvent| {
        if let (Some(s), Some(data)) = (weak.upgrade(), event.data().as_string()) {
            emit(&s, json!({"type":"data","from":id,"data":data,"via":"p2p"}));
        }
    });
    dc.set_onmessage(Some(message.as_ref().unchecked_ref()));
    message.forget();
}
fn peer(s: &Rc<RefCell<Inner>>, id: &str, initiator: bool) -> Result<RtcPeerConnection, JsValue> {
    if let Some(link) = s.borrow().links.get(id) {
        return Ok(link.pc.clone());
    }
    let pc = RtcPeerConnection::new_with_configuration(&s.borrow().config)?;
    s.borrow_mut().links.insert(
        id.into(),
        Link {
            pc: pc.clone(),
            dc: None,
            pending: vec![],
            ready: false,
        },
    );
    let weak = Rc::downgrade(s);
    let target = id.to_string();
    let ice = Closure::<dyn FnMut(RtcPeerConnectionIceEvent)>::new(
        move |event: RtcPeerConnectionIceEvent| {
            if let (Some(s), Some(c)) = (weak.upgrade(), event.candidate()) {
                let _ = signal(
                    &s,
                    json!({"type":"ice","to":target,"candidate":c.candidate(),"sdpMid":c.sdp_mid(),"sdpMLineIndex":c.sdp_m_line_index()}),
                );
            }
        },
    );
    pc.set_onicecandidate(Some(ice.as_ref().unchecked_ref()));
    ice.forget();
    let weak = Rc::downgrade(s);
    let target = id.to_string();
    let ondc = Closure::<dyn FnMut(RtcDataChannelEvent)>::new(move |event: RtcDataChannelEvent| {
        if let Some(s) = weak.upgrade() {
            channel(&s, target.clone(), event.channel());
        }
    });
    pc.set_ondatachannel(Some(ondc.as_ref().unchecked_ref()));
    ondc.forget();
    let weak = Rc::downgrade(s);
    let target = id.to_string();
    let observed = pc.clone();
    let state = Closure::<dyn FnMut(Event)>::new(move |_| {
        if let Some(s) = weak.upgrade() {
            emit(
                &s,
                json!({"type":"connection-state","id":target,"state":format!("{:?}",observed.connection_state())}),
            );
        }
    });
    pc.set_onconnectionstatechange(Some(state.as_ref().unchecked_ref()));
    state.forget();
    if initiator {
        channel(s, id.into(), pc.create_data_channel("orbit"));
    }
    Ok(pc)
}
async fn local(
    s: &Rc<RefCell<Inner>>,
    id: &str,
    pc: &RtcPeerConnection,
    offer: bool,
) -> Result<(), JsValue> {
    let raw = JsFuture::from(if offer {
        pc.create_offer()
    } else {
        pc.create_answer()
    })
    .await?;
    let sdp = js_sys::Reflect::get(&raw, &"sdp".into())?
        .as_string()
        .unwrap_or_default();
    let desc = RtcSessionDescriptionInit::new(if offer {
        RtcSdpType::Offer
    } else {
        RtcSdpType::Answer
    });
    desc.set_sdp(&sdp);
    JsFuture::from(pc.set_local_description(&desc)).await?;
    signal(
        s,
        json!({"type":if offer {"offer"} else {"answer"},"to":id,"sdp":sdp}),
    )
}
async fn incoming(s: Rc<RefCell<Inner>>, v: Value) -> Result<(), JsValue> {
    let kind = v["type"].as_str().unwrap_or_default();
    let id = v["from"].as_str().unwrap_or_default();
    if kind.starts_with("media-") {
        return incoming_media(s, v).await;
    }
    match kind {
        "offer" | "answer" => {
            let pc = peer(&s, id, false)?;
            let desc = RtcSessionDescriptionInit::new(if kind == "offer" {
                RtcSdpType::Offer
            } else {
                RtcSdpType::Answer
            });
            desc.set_sdp(v["sdp"].as_str().unwrap_or_default());
            JsFuture::from(pc.set_remote_description(&desc)).await?;
            let pending = {
                let mut state = s.borrow_mut();
                let link = state.links.get_mut(id).unwrap();
                link.ready = true;
                std::mem::take(&mut link.pending)
            };
            for c in pending {
                JsFuture::from(pc.add_ice_candidate_with_opt_rtc_ice_candidate_init(Some(&c)))
                    .await?;
            }
            if kind == "offer" {
                local(&s, id, &pc, false).await?;
            }
        }
        "ice" => {
            let pc = peer(&s, id, false)?;
            let c = RtcIceCandidateInit::new(v["candidate"].as_str().unwrap_or_default());
            c.set_sdp_mid(v["sdpMid"].as_str());
            c.set_sdp_m_line_index(v["sdpMLineIndex"].as_u64().map(|x| x as u16));
            let ready = s.borrow().links[id].ready;
            if ready {
                JsFuture::from(pc.add_ice_candidate_with_opt_rtc_ice_candidate_init(Some(&c)))
                    .await?;
            } else {
                s.borrow_mut().links.get_mut(id).unwrap().pending.push(c);
            }
        }
        "relay" => emit(
            &s,
            json!({"type":"data","from":id,"data":v["data"],"via":"relay"}),
        ),
        _ => emit(&s, v),
    }
    Ok(())
}
#[wasm_bindgen]
impl Client {
    #[wasm_bindgen(constructor)]
    pub fn new(
        url: &str,
        config_json: &str,
        callback: js_sys::Function,
    ) -> Result<Client, JsValue> {
        let config: RtcConfiguration = js_sys::JSON::parse(config_json)?.unchecked_into();
        let ws = WebSocket::new(url)?;
        let inner = Rc::new(RefCell::new(Inner {
            media: HashMap::new(),
            media_callback: None,
            ws: ws.clone(),
            links: HashMap::new(),
            callback,
            config,
        }));
        let weak = Rc::downgrade(&inner);
        let msg = Closure::<dyn FnMut(MessageEvent)>::new(move |event: MessageEvent| {
            if let (Some(s), Some(text)) = (weak.upgrade(), event.data().as_string()) {
                if let Ok(v) = serde_json::from_str(&text) {
                    spawn_local(async move {
                        if let Err(e) = incoming(s.clone(), v).await {
                            report(&s, e);
                        }
                    });
                }
            }
        });
        ws.set_onmessage(Some(msg.as_ref().unchecked_ref()));
        msg.forget();
        let weak = Rc::downgrade(&inner);
        let closed = Closure::<dyn FnMut(Event)>::new(move |_| {
            if let Some(s) = weak.upgrade() {
                emit(&s, json!({"type":"offline"}));
            }
        });
        ws.set_onclose(Some(closed.as_ref().unchecked_ref()));
        closed.forget();
        let weak = Rc::downgrade(&inner);
        let error = Closure::<dyn FnMut(Event)>::new(move |_| {
            if let Some(s) = weak.upgrade() {
                emit(
                    &s,
                    json!({"type":"error","message":"Signaling connection failed. Check the server and HTTPS."}),
                );
            }
        });
        ws.set_onerror(Some(error.as_ref().unchecked_ref()));
        error.forget();
        Ok(Client { inner })
    }
    pub async fn connect(&self, id: String) -> Result<(), JsValue> {
        // Call only on the lexicographically smaller peer to prevent simultaneous offers.
        let pc = peer(&self.inner, &id, true)?;
        local(&self.inner, &id, &pc, true).await
    }
    pub fn send(&self, id: &str, data: &str, relay: bool) -> Result<(), JsValue> {
        if data.len() > 64000 {
            return Err("Message too large".into());
        }
        if relay {
            return signal(&self.inner, json!({"type":"relay","to":id,"data":data}));
        }
        let dc = self
            .inner
            .borrow()
            .links
            .get(id)
            .and_then(|l| l.dc.clone())
            .ok_or(JsValue::from_str("Connect this device first"))?;
        if dc.ready_state() != RtcDataChannelState::Open {
            return Err("Connection is not ready".into());
        }
        if dc.buffered_amount() > 1024 * 1024 {
            return Err("Connection busy. Retry shortly.".into());
        }
        dc.send_with_str(data)
    }
    pub fn set_media_callback(&self, callback: js_sys::Function) {
        self.inner.borrow_mut().media_callback = Some(callback);
    }
    pub fn call_signal(&self, id: &str, payload: &str) -> Result<(), JsValue> {
        let data: Value =
            serde_json::from_str(payload).map_err(|_| JsValue::from_str("Invalid call control"))?;
        signal(&self.inner, json!({"type":"call","to":id,"data":data}))
    }
    pub async fn media_start(
        &self,
        id: String,
        session: String,
        initiator: bool,
        audio: Option<MediaStreamTrack>,
        camera: Option<MediaStreamTrack>,
    ) -> Result<(), JsValue> {
        self.media_stop(&id);
        let pc = RtcPeerConnection::new_with_configuration(&self.inner.borrow().config)?;
        let tracks = vec![audio, camera, None];
        self.inner.borrow_mut().media.insert(
            id.clone(),
            Media {
                pc: pc.clone(),
                session: session.clone(),
                tracks: tracks.clone(),
                pending: vec![],
                ready: false,
                ice_callback: None,
                track_callback: None,
                state_callback: None,
            },
        );
        let weak = Rc::downgrade(&self.inner);
        let target = id.clone();
        let token = session.clone();
        let ice = Closure::<dyn FnMut(RtcPeerConnectionIceEvent)>::new(
            move |e: RtcPeerConnectionIceEvent| {
                if let (Some(s), Some(c)) = (weak.upgrade(), e.candidate()) {
                    let _ = signal(
                        &s,
                        json!({"type":"media-ice","to":target,"session":token,"candidate":c.candidate(),"sdpMid":c.sdp_mid(),"sdpMLineIndex":c.sdp_m_line_index()}),
                    );
                }
            },
        );
        pc.set_onicecandidate(Some(ice.as_ref().unchecked_ref()));
        self.inner
            .borrow_mut()
            .media
            .get_mut(&id)
            .unwrap()
            .ice_callback = Some(ice);
        let weak = Rc::downgrade(&self.inner);
        let target = id.clone();
        let token = session.clone();
        let track = Closure::<dyn FnMut(RtcTrackEvent)>::new(move |e: RtcTrackEvent| {
            if let Some(s) = weak.upgrade() {
                let callback = s.borrow().media_callback.clone();
                if let Some(cb) = callback {
                    let slot = e.transceiver().mid().unwrap_or_default();
                    let _ = cb.call4(
                        &JsValue::NULL,
                        &target.clone().into(),
                        &token.clone().into(),
                        &e.track(),
                        &slot.into(),
                    );
                }
            }
        });
        pc.set_ontrack(Some(track.as_ref().unchecked_ref()));
        self.inner
            .borrow_mut()
            .media
            .get_mut(&id)
            .unwrap()
            .track_callback = Some(track);
        let weak = Rc::downgrade(&self.inner);
        let target = id.clone();
        let token = session.clone();
        let observed = pc.clone();
        let state = Closure::<dyn FnMut(Event)>::new(move |_| {
            if let Some(s) = weak.upgrade() {
                emit(
                    &s,
                    json!({"type":"media-state","id":target,"session":token,"state":format!("{:?}",observed.connection_state())}),
                );
            }
        });
        pc.set_onconnectionstatechange(Some(state.as_ref().unchecked_ref()));
        self.inner
            .borrow_mut()
            .media
            .get_mut(&id)
            .unwrap()
            .state_callback = Some(state);
        if initiator {
            let init = RtcRtpTransceiverInit::new();
            init.set_direction(RtcRtpTransceiverDirection::Sendrecv);
            for (slot, kind) in ["audio", "video", "video"].iter().enumerate() {
                let t = pc.add_transceiver_with_str_and_init(kind, &init);
                JsFuture::from(t.sender().replace_track(tracks[slot].as_ref())).await?;
            }
        }
        Ok(())
    }
    pub async fn media_offer(&self, id: String) -> Result<(), JsValue> {
        let (pc, session) = {
            let state = self.inner.borrow();
            let m = state.media.get(&id).ok_or(JsValue::from_str("No call"))?;
            (m.pc.clone(), m.session.clone())
        };
        media_local(&self.inner, &id, &session, &pc, true).await
    }
    pub async fn media_track(
        &self,
        id: String,
        slot: usize,
        track: Option<MediaStreamTrack>,
    ) -> Result<(), JsValue> {
        if slot > 2 {
            return Err("Invalid media slot".into());
        }
        let pc = {
            let mut state = self.inner.borrow_mut();
            let m = state
                .media
                .get_mut(&id)
                .ok_or(JsValue::from_str("No call"))?;
            m.tracks[slot] = track.clone();
            m.pc.clone()
        };
        let t = pc.get_transceivers().get(slot as u32);
        if t.is_undefined() {
            return Err("Call is not ready".into());
        }
        let t: RtcRtpTransceiver = t.unchecked_into();
        JsFuture::from(t.sender().replace_track(track.as_ref())).await?;
        Ok(())
    }
    pub fn media_stop(&self, id: &str) {
        if let Some(m) = self.inner.borrow_mut().media.remove(id) {
            m.pc.set_ontrack(None);
            m.pc.set_onicecandidate(None);
            m.pc.set_onconnectionstatechange(None);
            m.pc.close();
        }
    }
    pub fn buffered(&self, id: &str) -> u32 {
        self.inner
            .borrow()
            .links
            .get(id)
            .and_then(|l| l.dc.as_ref())
            .map(|d| d.buffered_amount())
            .unwrap_or(0)
    }
    pub fn forget(&self, id: &str) {
        if let Some(link) = self.inner.borrow_mut().links.remove(id) {
            link.pc.close();
        }
    }
    pub fn close(&self) {
        let s = self.inner.borrow();
        s.ws.close().ok();
        for media in s.media.values() {
            media.pc.set_ontrack(None);
            media.pc.set_onicecandidate(None);
            media.pc.set_onconnectionstatechange(None);
            media.pc.close();
        }
        for link in s.links.values() {
            link.pc.close();
        }
    }
}
impl Drop for Client {
    fn drop(&mut self) {
        self.close();
    }
}

async fn media_local(
    s: &Rc<RefCell<Inner>>,
    id: &str,
    session: &str,
    pc: &RtcPeerConnection,
    offer: bool,
) -> Result<(), JsValue> {
    let raw = JsFuture::from(if offer {
        pc.create_offer()
    } else {
        pc.create_answer()
    })
    .await?;
    let sdp = js_sys::Reflect::get(&raw, &"sdp".into())?
        .as_string()
        .unwrap_or_default();
    let desc = RtcSessionDescriptionInit::new(if offer {
        RtcSdpType::Offer
    } else {
        RtcSdpType::Answer
    });
    desc.set_sdp(&sdp);
    JsFuture::from(pc.set_local_description(&desc)).await?;
    signal(
        s,
        json!({"type":if offer {"media-offer"} else {"media-answer"},"to":id,"session":session,"sdp":sdp}),
    )
}
async fn incoming_media(s: Rc<RefCell<Inner>>, v: Value) -> Result<(), JsValue> {
    let id = v["from"].as_str().unwrap_or_default();
    let (pc, session) = {
        let state = s.borrow();
        let Some(m) = state.media.get(id) else {
            return Ok(());
        };
        if v["session"].as_str() != Some(m.session.as_str()) {
            return Ok(());
        }
        (m.pc.clone(), m.session.clone())
    };
    if v["type"] == "media-ice" {
        let c = RtcIceCandidateInit::new(v["candidate"].as_str().unwrap_or_default());
        c.set_sdp_mid(v["sdpMid"].as_str());
        c.set_sdp_m_line_index(v["sdpMLineIndex"].as_u64().map(|n| n as u16));
        let ready = s.borrow().media[id].ready;
        if ready {
            JsFuture::from(pc.add_ice_candidate_with_opt_rtc_ice_candidate_init(Some(&c))).await?;
        } else if let Some(m) = s.borrow_mut().media.get_mut(id) {
            m.pending.push(c);
        }
        return Ok(());
    }
    let offer = v["type"] == "media-offer";
    let desc = RtcSessionDescriptionInit::new(if offer {
        RtcSdpType::Offer
    } else {
        RtcSdpType::Answer
    });
    desc.set_sdp(v["sdp"].as_str().unwrap_or_default());
    JsFuture::from(pc.set_remote_description(&desc)).await?;
    let (pending, tracks) = {
        let mut state = s.borrow_mut();
        let Some(m) = state.media.get_mut(id) else {
            return Ok(());
        };
        m.ready = true;
        (std::mem::take(&mut m.pending), m.tracks.clone())
    };
    for c in pending {
        JsFuture::from(pc.add_ice_candidate_with_opt_rtc_ice_candidate_init(Some(&c))).await?;
    }
    if offer {
        for (slot, t) in pc.get_transceivers().iter().enumerate() {
            let t: RtcRtpTransceiver = t.unchecked_into();
            t.set_direction(RtcRtpTransceiverDirection::Sendrecv);
            JsFuture::from(
                t.sender()
                    .replace_track(tracks.get(slot).and_then(|t| t.as_ref())),
            )
            .await?;
        }
        media_local(&s, id, &session, &pc, false).await?;
    }
    Ok(())
}
