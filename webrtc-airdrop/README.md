# Orbit

A mobile-first, installable web app with an AirDrop-inspired perspective radar. The Rust WASM client owns WebSocket signaling, RTCPeerConnection negotiation, ICE buffering, data channels, separate audio/video peer connections, fixed microphone/camera/screen transceivers, track replacement, and transport selection. HTML/CSS/JavaScript provide the interface and chunked file transfer workflow. The Rust Axum server serves the application, broadcasts room membership, forwards signaling and optionally relays application traffic.

## Run

From this directory, with Rust/Cargo installed (Homebrew Rust also requires `brew install lld`):

```sh
./scripts/build.sh
./scripts/run.sh
```

Open http://localhost:8080 in two browser tabs. Give each device a name, enter the same room code and tap **Enter your orbit**. Click a device, then choose **Voice call** or **Video call**. The other device answers or declines. Text and file transfers remain available below the call buttons. Copy the room invite with the arrow beside its code. Turn broadcasting off to leave the room.

The build script supports rustup and Homebrew Rust (the latter uses its installed standard-library source). It installs the exact matching wasm-bindgen CLI into this project's ignored `target/tools` directory. First build needs internet access. `Cargo.lock` is committed for repeatable dependencies.

## Phones

Deploy behind an HTTPS reverse proxy that supports WebSocket upgrades, then open the same HTTPS URL on both phones. Add to Home Screen in Safari or install from Chrome's menu for a standalone app window. This is a browser/PWA app, not a native App Store binary. The app must remain open and active for discovery and transfers; background phone execution is not guaranteed. A trusted HTTPS origin is needed for phone WebRTC and clipboard features. Desktop localhost works for development.

`BIND` defaults to `0.0.0.0:8080`; `WEB_DIR` defaults to `web` relative to the process working directory. Run scripts handle that directory automatically.

## Traffic modes

- **Direct (default):** Rust server carries discovery and WebRTC offer/answer/ICE messages. Actual chat and file bytes flow over encrypted WebRTC data channels between browsers. A public Google STUN endpoint helps discover addresses.
- **Server relay:** enable the checkbox in settings on both devices. Application messages and file chunks travel over the Rust server's WebSocket route. This is an application relay, not a TURN/WebRTC media relay. Use HTTPS/WSS; the server can read relay content. Keep all devices in a room on the same mode for text and files. Voice, webcam, and screen sharing always use WebRTC, even when text relay is enabled; the application relay cannot carry real-time media.
- **TURN:** for direct mode across restrictive networks, provide `TURN_URL`, `TURN_USERNAME`, and `TURN_CREDENTIAL` to an existing TURN service. TURN forwards encrypted WebRTC packets; this repository does not implement a TURN service. Credentials from `/config` are public to app users, so use limited/short-lived credentials for deployment.

The radar displays actual room members, with decorative orbital positions. It does not measure distance or use Bluetooth, native AirDrop, or local radio discovery. Room codes are shared discovery scopes, not authentication. Anyone who knows a code can join and message its members. Use unguessable codes and deploy behind authentication for private use.

## File transfers

Files up to 25 MB are offered to the recipient before transfer. Accepted files travel in 12 KB chunks with data-channel backpressure; received files appear as download links. Transfers are held in browser memory, expire on disconnection, and do not resume. A receiver can hold at most four incoming transfers. No files or chats are persisted by the app. Relay mode has no end-to-end content encryption beyond HTTPS transport.

## Validation

```sh
cargo test -p orbit-server
cargo check --workspace
node --check web/app.js
```

`node scripts/smoke.mjs` against a running server checks two-device discovery, sender identity enforcement, signaling forwarding, relay delivery, cross-room isolation, and departure broadcasts. Requires Node 22+ with its built-in WebSocket API. `node scripts/browser-test.mjs` uses Playwright when installed to verify actual WASM, WebRTC messaging, accepted file transfer, relay mode and phone layout.

This prototype includes message-size limits, bounded outbound queues, rate limits and heartbeat cleanup. Before public hosting, add authentication, deployment-wide connection quotas, origin restrictions, dynamic TURN credentials, and abuse monitoring. Room discovery and relay messages currently live in one server process; multiple replicas need shared presence/routing.

API references: [Axum WebSockets](https://docs.rs/axum/latest/axum/extract/ws/index.html), [web-sys RTCPeerConnection](https://docs.rs/web-sys/latest/web_sys/struct.RtcPeerConnection.html).

## HTTPS reverse proxy example

With Caddy installed and a domain pointing to your host, this Caddyfile terminates HTTPS and forwards both HTTP and WebSockets:

```caddyfile
orbit.example.com {
    reverse_proxy 127.0.0.1:8080
}
```

Run Orbit with `BIND=127.0.0.1:8080 ./scripts/run.sh` behind the proxy. Both devices should open `https://orbit.example.com` and join the same room. A TURN service is separately configured only when direct WebRTC cannot cross the participants' networks. Do not expose static, long-lived TURN credentials in a public deployment.


## Voice, webcam, and screen sharing

Select a device on the radar and use **Voice call** or **Video call**. The caller grants microphone/camera permission; the recipient does not capture anything until answering. One call can be active per device. Incoming invitations expire after 45 seconds. You can continue texting and transferring files during a call.

- **Mute / Unmute** controls your microphone without ending the call.
- **Camera on / Camera off** enables or stops camera capture during a voice or video call.
- **Share screen / Stop sharing** opens your browser's source picker. Camera video and screen video use separate tracks, so your camera can remain on while sharing. Screen audio is not captured; your microphone remains the voice source.
- **Hang up**, leaving the room, or closing the page stops capture and closes the media connection. Ending a call leaves text/file connections available.
- If browser autoplay blocks the remote audio, use **Tap to hear the call**.

Microphone/camera need HTTPS (or localhost for desktop development). Screen capture requires browser support and an explicit click each time; on browsers without `getDisplayMedia`, the share button is disabled and viewing remote screen shares remains available. Mobile browser support varies. Phones can suspend calls when backgrounded or locked. Cross-network calls may require a configured TURN service. Rust handles media signaling; WebRTC carries the encrypted live media, directly or through your configured TURN service.

`node scripts/media-test.mjs` with Playwright installed exercises bidirectional voice and webcam with generated Web Audio and canvas media tracks, recipient consent before capture, muting, separate screen tracks using a generated canvas display source, stopping screen sharing, hangup/decline/repeated calls, room departure cleanup, and concurrent text chat. It does not open your real microphone, webcam, or system screen picker.

Media API references: [web-sys transceivers](https://docs.rs/web-sys/latest/web_sys/struct.RtcPeerConnection.html), [browser screen capture requirements](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia).

## Live deployment (October 21, 2026)

- Client: https://orbit-webrtc-indii.netlify.app (separate Netlify project, deployed with Netlify CLI).
- Rust server: https://happyfamilyok.com/orbit/ on the existing `107.175.194.17` VPS.
- Public health: https://happyfamilyok.com/orbit/health; WebSocket: `wss://happyfamilyok.com/orbit/ws`.
- Service: `orbit.service`, executable `/opt/orbit/orbit-server`, bound to `127.0.0.1:8980`.
- Apache includes `/etc/apache2/orbit-routes.conf` before the existing HTTPS catch-all proxy. Only `/orbit/` routes to Orbit; the main website continues through Anubis and the ordering backend keeps its existing service.

No Docker was installed or used. The stripped Linux x86-64 binary is statically linked with musl and built on the Mac, so no Rust toolchain or shared-library upgrades are needed on Ubuntu 18.04. A disposable APT download cache was cleared to make deployment space; installed packages, website data, and logs were preserved.

The Netlify client reads `/client-config.json` to find the HTTPS signaling server. Its Settings dialog also accepts an alternate server URL, and room invites include that URL. The server allows unauthenticated cross-origin configuration reads so a separately hosted client can retrieve its public ICE configuration. WebSocket signaling connects directly to the VPS, without passing through Netlify.

To package and redeploy the already-built client:

```sh
python3 scripts/package-netlify.py --server-url https://happyfamilyok.com/orbit/
netlify deploy --prod --no-build --dir target/netlify-client --site 5686e7b5-a863-4da7-bfbf-042e73a51790
```

To rebuild the native server on this Mac, local build dependencies are installed in the ignored `target/` directory (`cargo-zigbuild` 0.23.4 and Python `ziglang` 0.17.0). `scripts/build-vps.sh` uses the installed Homebrew Rust standard-library source and produces a static Linux binary without Docker. Then upload the binary and files under `deploy/` into `/tmp/orbit-deploy/` and run `python3 /tmp/orbit-deploy/install-vps.py` on the VPS. The installer tests local service health and validates Apache before reloading; it keeps the prior binary as `.previous` on subsequent deployments and backs up the original HTTPS vhost as `.before-orbit`.

Operations on the VPS:

```sh
systemctl status orbit
journalctl -u orbit -n 50 --no-pager
systemctl restart orbit
```

Optional TURN settings belong in `/etc/orbit.env` (`TURN_URL`, `TURN_USERNAME`, `TURN_CREDENTIAL`), followed by a service restart. No TURN service is installed as part of this deployment; signaling alone cannot guarantee connectivity through every NAT or firewall.

To roll back the initial Apache change, remove the `Include /etc/apache2/orbit-routes.conf` line from the HappyFamilyOK HTTPS vhost, run `apache2ctl configtest`, reload Apache, then disable/stop `orbit`. Avoid restoring an old vhost backup over newer unrelated changes.
