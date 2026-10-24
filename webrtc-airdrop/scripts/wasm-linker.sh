#!/usr/bin/env bash
set -euo pipefail
# Homebrew's Rust and lld can depend on different LLVM releases. Resolve the
# linker's versioned dylibs in this process only, without changing brew links.
linker=$(command -v wasm-ld || true)
if [[ -z "$linker" ]]; then
  for candidate in /opt/homebrew/opt/lld/bin/wasm-ld /usr/local/opt/lld/bin/wasm-ld; do
    if [[ -x "$candidate" ]]; then linker=$candidate; break; fi
  done
fi
if [[ -z "$linker" ]]; then printf 'Missing wasm-ld; install lld.\n' >&2; exit 1; fi
if [[ "$(uname -s)" == Darwin ]]; then
  libraries="${DYLD_LIBRARY_PATH:-}"
  for lib in /opt/homebrew/Cellar/{llvm,z3}/*/lib /usr/local/Cellar/{llvm,z3}/*/lib; do
    if [[ -d "$lib" ]]; then libraries="${libraries:+$libraries:}$lib"; fi
  done
  export DYLD_LIBRARY_PATH="$libraries"
fi
exec "$linker" "$@"
