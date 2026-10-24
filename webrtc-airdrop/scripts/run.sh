#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
if [[ ! -f web/pkg/orbit_client_bg.wasm ]]; then
  printf 'Run ./scripts/build.sh first.\n' >&2
  exit 1
fi
exec cargo run --locked -p orbit-server --release
