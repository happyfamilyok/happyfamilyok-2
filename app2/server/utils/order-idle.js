export function createIdleWatch(onIdle, idleMs = 15_000) {
  let timer
  let stopped = false
  const stop = () => {
    stopped = true
    clearTimeout(timer)
  }
  const touch = () => {
    if (stopped) return
    clearTimeout(timer)
    timer = setTimeout(() => {
      stop()
      onIdle()
    }, idleMs)
    timer.unref?.()
  }
  touch()
  return { touch, stop }
}
