#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
if command -v rustup >/dev/null 2>&1; then
  rustup target add wasm32-unknown-unknown
  cargo build --locked -p orbit-client --release --target wasm32-unknown-unknown
else
  # Homebrew Rust ships library source but no wasm standard library.
  export CARGO_TARGET_WASM32_UNKNOWN_UNKNOWN_LINKER="${CARGO_TARGET_WASM32_UNKNOWN_UNKNOWN_LINKER:-$PWD/scripts/wasm-linker.sh}"
  RUSTC_BOOTSTRAP=1 cargo build --locked -p orbit-client --release --target wasm32-unknown-unknown -Z build-std=std,panic_abort
fi
version=$(sed -n '/name = "wasm-bindgen"/{n;s/version = "\(.*\)"/\1/p;}' Cargo.lock | head -1)
bindgen=target/tools/bin/wasm-bindgen
if [[ ! -x "$bindgen" ]] || [[ "$("$bindgen" --version)" != "wasm-bindgen $version" ]]; then
  cargo install wasm-bindgen-cli --locked --version "$version" --root target/tools
fi
"$bindgen" --target web --out-dir web/pkg target/wasm32-unknown-unknown/release/orbit_client.wasm
cargo build --locked -p orbit-server --release
printf '\nBuilt. Run ./scripts/run.sh and open http://localhost:8080\n'
