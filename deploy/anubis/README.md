# Deployment choices

The existing Apache server deployment is documented in [apache/README.md](apache/README.md).
It proxies the existing Netlify site through Anubis and is the configuration
installed on the user's server. The Docker stack below is an alternative for
hosting the Nuxt app directly.

# Happy Family with Anubis

This deployment serves the Nuxt website through Caddy (HTTPS), then Anubis,
then the Node server. Only Caddy publishes host ports; Nuxt and Anubis are
reachable inside the Compose network. Anubis v1.27.0 uses its bundled default
bot policy. No frontend script or Nuxt middleware is needed.

## Deploy

Use a Linux server with Docker Engine and the Compose plugin. From this folder:

1. Copy `.env.example` to `.env`.
2. Set `SITE_DOMAIN` to the public website hostname.
3. Run `openssl rand -hex 32` and paste its output into `ANUBIS_SIGNING_KEY`.
   Keep this file private and retain the key across restarts.
4. Point the hostname's DNS A record (and AAAA record, if used) to the server.
   Allow inbound TCP 80 and 443, and optionally UDP 443 for HTTP/3.
5. Run `docker compose --env-file .env config --quiet`.
6. Run `docker compose --env-file .env up -d --build`.

Caddy obtains and renews the HTTPS certificate automatically. Keep the
`caddy_data` volume when updating containers. The Node image installs Chromium
for the app's existing Playwright functionality. The external order service
continues to use `ORDER_EMBED_ORIGIN`; this stack protects this website only.

If you also serve a second hostname (for example www), configure its DNS and
add it to the Caddy site address, or redirect it to the primary hostname.

## Check

- Open `https://YOUR_DOMAIN` in a fresh browser session. Depending on the default
  policy, Anubis either allows the request or presents its challenge. Complete
  any challenge and verify the home page, menu, and ordering page work.
- Check browser requests for challenge assets under `/.within.website/x/anubis/`.
- Inspect `docker compose logs --tail=100 caddy anubis website` if requests fail.
- Verify ports 3000, 8923, and 9090 are not published on the server.

## Existing Netlify deployment

The repository's `netlify.toml` remains unchanged. Netlify cannot run this
long-lived Anubis container as part of its normal Nuxt build. Deploy this stack
and point the public domain to it to activate protection. A publicly accessible
Netlify copy remains an alternative route to the content; disable or restrict
that copy after verifying the new deployment if all access must use Anubis.

Do not put a CDN or another proxy ahead of Caddy without configuring trusted
proxy IP ranges and the real-client-IP forwarding rules. The supplied Caddyfile
assumes Caddy receives the browser connection directly.

## Update or stop

Run `docker compose pull` and `docker compose up -d --build` to refresh the
containers. Anubis is pinned; review upstream release notes before changing its
tag. Run `docker compose down` to stop the stack without deleting certificates.

Documentation: https://anubis.techaro.lol/docs/admin/installation
Source and releases: https://github.com/TecharoHQ/anubis
