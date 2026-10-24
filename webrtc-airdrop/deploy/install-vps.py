#!/usr/bin/env python3
"""Run as root on the inspected HappyFamilyOK VPS after uploading artifacts."""
from pathlib import Path
import shutil
import subprocess
import time
import urllib.request

root = Path('/opt/orbit')
root.mkdir(exist_ok=True)
(root / 'empty').mkdir(exist_ok=True)
binary = root / 'orbit-server'
if binary.exists():
    shutil.copy2(str(binary), str(binary) + '.previous')
shutil.copy2('/tmp/orbit-deploy/orbit-server', str(binary) + '.new')
Path(str(binary) + '.new').chmod(0o755)
Path(str(binary) + '.new').replace(binary)
shutil.copy2('/tmp/orbit-deploy/orbit.service', '/etc/systemd/system/orbit.service')
shutil.copy2('/tmp/orbit-deploy/apache-orbit.conf', '/etc/apache2/orbit-routes.conf')
subprocess.run(['systemctl', 'daemon-reload'], check=True)
subprocess.run(['systemctl', 'enable', 'orbit'], check=True)
subprocess.run(['systemctl', 'restart', 'orbit'], check=True)
for attempt in range(30):
    try:
        assert urllib.request.urlopen('http://127.0.0.1:8980/health', timeout=2).read() == b'ok'
        break
    except Exception:
        if attempt == 29:
            raise
        time.sleep(0.5)

site = Path('/etc/apache2/sites-available/happyfamily-anubis-le-ssl.conf')
original = site.read_text()
marker = '    Include /etc/apache2/orbit-routes.conf\n'
backup = Path(str(site) + '.before-orbit')
if marker not in original:
    if not backup.exists():
        shutil.copy2(site, backup)
    anchor = '    ProxyPass / '
    if anchor not in original:
        raise RuntimeError('Expected catch-all Apache route was not found; no config changed')
    site.write_text(original.replace(anchor, marker + anchor, 1))
try:
    subprocess.run(['apache2ctl', 'configtest'], check=True)
    subprocess.run(['systemctl', 'reload', 'apache2'], check=True)
except Exception:
    site.write_text(original)
    subprocess.run(['apache2ctl', 'configtest'], check=True)
    subprocess.run(['systemctl', 'reload', 'apache2'], check=True)
    raise
print('Orbit service healthy; Apache routes installed.')
