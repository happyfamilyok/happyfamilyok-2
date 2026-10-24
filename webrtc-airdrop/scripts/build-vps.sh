#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
# Local build only. No Docker and no compiler installed on the VPS.
# Install cargo-zigbuild into target/tools and Zig into target/zig-python first.
export CARGO_ZIGBUILD_ZIG_COMMAND="${CARGO_ZIGBUILD_ZIG_COMMAND:-$PWD/target/zig-python/ziglang/zig}"
export CARGO_ZIGBUILD_CACHE_DIR="$PWD/target/zigbuild-cache"
export ZIG_GLOBAL_CACHE_DIR="$PWD/target/zig-cache"
export CARGO_PROFILE_RELEASE_PANIC=abort
export RUSTFLAGS="${RUSTFLAGS:-} -C link-self-contained=no"
export RUSTC_BOOTSTRAP=1
target/tools/bin/cargo-zigbuild zigbuild --locked -p orbit-server --release --target x86_64-unknown-linux-musl -Z build-std=std,panic_abort
if command -v llvm-strip >/dev/null 2>&1; then
  llvm-strip --strip-all target/x86_64-unknown-linux-musl/release/orbit-server
elif [[ -x /opt/homebrew/opt/llvm/bin/llvm-strip ]]; then
  /opt/homebrew/opt/llvm/bin/llvm-strip --strip-all target/x86_64-unknown-linux-musl/release/orbit-server
fi
