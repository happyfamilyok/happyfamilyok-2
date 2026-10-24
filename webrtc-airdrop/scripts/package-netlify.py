#!/usr/bin/env python3
"""Package only public client assets; never upload server sources or build tools."""
import argparse
import json
from pathlib import Path
import shutil
from urllib.parse import urlparse

parser = argparse.ArgumentParser()
parser.add_argument('--server-url', required=True)
args = parser.parse_args()
url = urlparse(args.server_url)
if url.scheme != 'https' or not url.hostname or url.username or url.password or url.query or url.fragment:
    parser.error('server URL must be HTTPS without credentials, a query, or a fragment')
root = Path(__file__).resolve().parents[1]
out = root / 'target/netlify-client'
out.mkdir(parents=True, exist_ok=True)
for name in ['index.html', 'app.js', 'media.js', 'style.css', 'icon.svg', 'manifest.webmanifest']:
    shutil.copy2(root / 'web' / name, out / name)
(out / 'pkg').mkdir(exist_ok=True)
for name in ['orbit_client.js', 'orbit_client_bg.wasm']:
    shutil.copy2(root / 'web/pkg' / name, out / 'pkg' / name)
(out / 'client-config.json').write_text(json.dumps({'serverUrl': args.server_url.rstrip('/') + '/', 'requireServerUrl': True}) + '\n')
(out / '_headers').write_text('/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Cache-Control: public, max-age=0, must-revalidate\n/pkg/*.wasm\n  Content-Type: application/wasm\n')
print(out)
