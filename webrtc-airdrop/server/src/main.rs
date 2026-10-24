use axum::{
    Json, Router,
    extract::{
        Query, State, WebSocketUpgrade,
        ws::{Message, WebSocket},
    },
    response::IntoResponse,
    routing::get,
};
use futures_util::{SinkExt, StreamExt};
use serde::Deserialize;
use serde_json::{Value, json};
use std::{collections::HashMap, sync::Arc, time::Duration};
use tokio::sync::{RwLock, mpsc};
use tower_http::{services::ServeDir, set_header::SetResponseHeaderLayer};
use uuid::Uuid;

#[derive(Clone)]
struct Peer {
    name: String,
    room: String,
    tx: mpsc::Sender<Message>,
}
#[derive(Clone, Default)]
struct App {
    peers: Arc<RwLock<HashMap<String, Peer>>>,
}
#[derive(Deserialize)]
struct Join {
    room: String,
    name: String,
}
fn valid(s: &str, max: usize) -> bool {
    !s.is_empty() && s.len() <= max && s.chars().all(|c| c.is_alphanumeric() || " -_".contains(c))
}
async fn upgrade(
    State(app): State<App>,
    Query(join): Query<Join>,
    ws: WebSocketUpgrade,
) -> axum::response::Response {
    if !valid(&join.room, 64) || !valid(&join.name, 40) {
        return (axum::http::StatusCode::BAD_REQUEST, "Invalid room or name").into_response();
    }
    if app.peers.read().await.len() >= 512 {
        return axum::http::StatusCode::SERVICE_UNAVAILABLE.into_response();
    }
    ws.max_message_size(96 * 1024)
        .on_upgrade(move |socket| session(app, join, socket))
}
async fn roster(app: &App, room: &str) {
    let peers = app.peers.read().await;
    let nodes: Vec<Value> = peers
        .iter()
        .filter(|(_, p)| p.room == room)
        .map(|(id, p)| json!({"id":id,"name":p.name}))
        .collect();
    let message = Message::Text(json!({"type":"peers","peers":nodes}).to_string().into());
    for p in peers.values().filter(|p| p.room == room) {
        let _ = p.tx.try_send(message.clone());
    }
}
fn routed_message(mut value: Value, from: &str) -> Option<(String, Value)> {
    let kind = value.get("type")?.as_str()?;
    if ![
        "offer",
        "answer",
        "ice",
        "relay",
        "call",
        "media-offer",
        "media-answer",
        "media-ice",
    ]
    .contains(&kind)
    {
        return None;
    }
    let to = value.get("to")?.as_str()?.to_owned();
    value.as_object_mut()?.insert("from".into(), json!(from));
    Some((to, value))
}
async fn session(app: App, join: Join, socket: WebSocket) {
    let id = Uuid::new_v4().to_string();
    let (tx, mut rx) = mpsc::channel::<Message>(128);
    let (mut sink, mut stream) = socket.split();
    tx.try_send(Message::Text(
        json!({"type":"welcome","id":id}).to_string().into(),
    ))
    .ok();
    app.peers.write().await.insert(
        id.clone(),
        Peer {
            name: join.name,
            room: join.room.clone(),
            tx: tx.clone(),
        },
    );
    roster(&app, &join.room).await;
    let writer = tokio::spawn(async move {
        while let Some(msg) = rx.recv().await {
            if sink.send(msg).await.is_err() {
                break;
            }
        }
    });
    let mut heartbeat = tokio::time::interval(Duration::from_secs(20));
    let mut last_seen = tokio::time::Instant::now();
    let mut window = tokio::time::Instant::now();
    let mut count = 0u32;
    loop {
        tokio::select! {
            _ = heartbeat.tick() => {
                if last_seen.elapsed() > Duration::from_secs(60) || tx.try_send(Message::Ping(vec![].into())).is_err() { break; }
            }
            next = stream.next() => {
                let Some(Ok(msg)) = next else { break; };
                last_seen = tokio::time::Instant::now();
                if window.elapsed() >= Duration::from_secs(1) { window = tokio::time::Instant::now(); count = 0; }
                count += 1;
                if count > 256 { break; }
                match msg {
                    Message::Text(text) => {
                        let Ok(value) = serde_json::from_str::<Value>(&text) else { continue; };
                        if let Some((to, payload)) = routed_message(value, &id) {
                            let peers = app.peers.read().await;
                            if let Some(peer) = peers.get(&to).filter(|p| p.room == join.room) {
                                if peer.tx.try_send(Message::Text(payload.to_string().into())).is_err() {
                                    let _ = tx.try_send(Message::Text(json!({"type":"error","message":"Peer is busy; retry."}).to_string().into()));
                                }
                            }
                        }
                    }
                    Message::Close(_) => break,
                    _ => {}
                }
            }
        }
    }
    app.peers.write().await.remove(&id);
    writer.abort();
    roster(&app, &join.room).await;
}
async fn config() -> Json<Value> {
    // Configure TURN URLs and short-lived credentials via environment for restrictive networks.
    let mut ice = vec![json!({"urls":["stun:stun.l.google.com:19302"]})];
    if let Ok(url) = std::env::var("TURN_URL") {
        ice.push(json!({"urls":[url], "username":std::env::var("TURN_USERNAME").unwrap_or_default(), "credential":std::env::var("TURN_CREDENTIAL").unwrap_or_default()}));
    }
    Json(json!({"iceServers":ice}))
}
#[tokio::main]
async fn main() {
    let assets = std::env::var("WEB_DIR").unwrap_or_else(|_| "web".into());
    let router = Router::new()
        .route("/ws", get(upgrade))
        .route("/config", get(config))
        .route("/health", get(|| async { "ok" }))
        .fallback_service(ServeDir::new(assets))
        .with_state(App::default())
        // Configuration is public and can be fetched by the separately hosted WASM client.
        .layer(SetResponseHeaderLayer::if_not_present(
            axum::http::header::ACCESS_CONTROL_ALLOW_ORIGIN,
            axum::http::HeaderValue::from_static("*"),
        ));
    let bind = std::env::var("BIND").unwrap_or_else(|_| "0.0.0.0:8080".into());
    let listener = tokio::net::TcpListener::bind(&bind)
        .await
        .expect("bind server");
    println!("Orbit listening at http://{bind}");
    axum::serve(listener, router)
        .with_graceful_shutdown(async {
            tokio::signal::ctrl_c().await.ok();
        })
        .await
        .unwrap();
}
#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn sender_cannot_be_spoofed() {
        let (_, v) = routed_message(
            json!({"type":"offer","to":"other","from":"spoof","sdp":"x"}),
            "actual",
        )
        .unwrap();
        assert_eq!(v["from"], "actual");
        assert!(routed_message(json!({"type":"peers","to":"other"}), "actual").is_none());
    }
    #[test]
    fn room_validation() {
        assert!(valid("moon-42", 64));
        assert!(!valid("", 64));
        assert!(!valid("bad/room", 64));
        assert!(!valid(&"x".repeat(65), 64));
    }
}
