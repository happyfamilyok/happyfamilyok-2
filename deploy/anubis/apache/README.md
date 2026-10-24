# Existing Apache server deployment

Anubis v1.27.0 is installed on 107.175.194.17 as the systemd service
`happyfamily-anubis`. Apache forwards requests to the inactivity proxy on 127.0.0.1:8924,
which forwards requests to Anubis on 127.0.0.1:8923. Anubis forwards approved requests to the existing Netlify
origin at https://happyfamilyok.netlify.app, keeping the website's existing
Netlify build and publish workflow.

The release archive was verified against the SHA-256 digest published by
GitHub. It is extracted to `/opt/happyfamily-anubis`. Its private settings are
in `/etc/happyfamily-anubis.env`, mode 600; do not commit that file. The supplied
service uses a dynamic user and filesystem protection. Metrics listen only on
127.0.0.1:9090. The bundled bot policy is customized in `/etc/happyfamily-anubis-policy.yaml`
(repository copy: `botPolicies.yaml`). Normal browser challenges use the `fast`
algorithm at difficulty 5, set on October 2, 2026. The weight 20–29 challenge
also uses difficulty 5. Unknown clients at all lower suspicion weights also receive difficulty 5;
explicit bot rules retain their defaults. Existing valid cookies may avoid a new
challenge until expiry. Difficulty is a hash-prefix target, not a reCAPTCHA
score or a fixed duration. Both public domains were verified to issue level 5
challenges after restarting the service.

Protection is live on https://happyfamilyok.com and https://www.happyfamilyok.com
as of October 2, 2026. Both domains resolve to 107.175.194.17, use a valid
Let's Encrypt certificate, and redirect HTTP to HTTPS. The existing Certbot
timer handles renewal. The protected preview remains available at
https://happyfamily.107-175-194-17.nip.io.

## Domain activation procedure (completed)

At the DNS provider, replace existing root-domain A records with an A record
for `@` pointing to `107.175.194.17`. Point `www` to the same IP with an A record
(or a CNAME to happyfamilyok.com). Remove old AAAA records unless IPv6 routing
and Apache service on this server are configured. Keep MX and TXT records.

After DNS resolves to this server, run on the server:

```sh
certbot --apache -d happyfamilyok.com -d www.happyfamilyok.com --non-interactive --agree-tos --redirect
```

In the generated HTTPS virtual host, change `X-Forwarded-Proto "http"` to
`X-Forwarded-Proto "https"`, then run `apache2ctl configtest` and
`systemctl reload apache2`. Check both HTTPS domains in a fresh browser and
complete any challenge. Verify the menu and ordering integration.

Checks performed on both public domains: HTTPS certificate validation passed;
HTTP redirects to HTTPS; challenge assets return 200; Apache configuration passed; service is active; home and
menu return 200 through the proxy; a browser user agent gets an Anubis
challenge; GPTBot gets an Access Denied page (Anubis returns HTTP 200 for that
page); the existing order backend health endpoint returns 200. `/order`
returns 404 on both the existing Netlify website and this proxy.

## Operations

- Status: `systemctl status happyfamily-anubis`
- Logs: `journalctl -u happyfamily-anubis -n 100`
- Restart: `systemctl restart happyfamily-anubis`
- Certificates: `certbot renew` (existing Certbot renewal setup)

The separate order backend virtual host and service are unchanged. The Netlify
origin remains publicly accessible, so requests made directly to it bypass
this proxy. Full origin enforcement needs a separate access restriction at
Netlify or migration to a private origin.

To roll back public traffic, restore the previous Netlify DNS records. After
DNS propagation, disable only the new `happyfamily-anubis` and
`happyfamily-anubis-preview` Apache sites (including their SSL variants), test
and reload Apache, and stop the `happyfamily-anubis` service. Leave the existing
order-embed sites enabled.

Valve's developer wiki was checked on October 2, 2026 and returned `fast`
difficulty 4. This deployment uses level 5; level 6 previously proved too slow on phones. M3 solve
time has not been measured; proof-of-work duration varies by device and nonce.

## Five-minute inactivity timeout

Installed October 10, 2026. `happyfamily-anubis-idle.service` runs the dependency-free
Node proxy in `/opt/happyfamily-anubis-idle`. A pass remains usable while requests
with that pass arrive less than five minutes apart. After five minutes without
a request, the proxy strips the pass before forwarding and clears its browser
cookie, causing Anubis to issue a fresh challenge. Merely keeping a page open
does not reset the timer; background requests do. The existing signed token
expiry remains an additional absolute upper bound. Difficulty remains 5.

`COOKIE_PREFIX=happyfamily-anubis-idle` starts a new pass-cookie namespace;
existing passes are not retained during this rollout. The proxy stores only
hashed pass identifiers, scoped to host, and timestamps in memory. Restarting
it causes visitors to pass the challenge again. It listens only on loopback,
and its maximum session count is 100,000; reaching that limit evicts the oldest
inserted entry. It does not issue or sign Anubis tokens.

Tests: `node --test idle-proxy.test.mjs` checks inactivity expiration, activity
extension, unrelated cookies, unknown passes, host separation, and restarts.
`node live-check.mjs` exercises a real Anubis proof and upstream access using a
controlled clock; it is intended for the configured server only.

To roll back the inactivity timeout, change the new Apache virtual hosts'
proxy port from 8924 to 8923, test and reload Apache, and stop
`happyfamily-anubis-idle`. Keep `happyfamily-anubis` running.

## CLI fallback policy fix

On October 10, 2026, the zero-weight ALLOW threshold was replaced with a `fast`
difficulty-5 CHALLENGE. The low-positive-weight metarefresh challenge also uses
`fast` difficulty 5. This closes the user-agent fallback that previously let
wget, curl, and clients without browser user agents fetch content directly.
Both public domains were verified to challenge wget, curl, browser, and empty
user-agent requests. Explicit allowed crawlers and essential paths retain their
existing rules. The public Netlify origin remains an alternative bypass.
