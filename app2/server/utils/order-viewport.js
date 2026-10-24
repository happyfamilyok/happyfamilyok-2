export function normalizeOrderViewport(value = {}) {
  const dimension = (number, fallback, min, max) => {
    const parsed = Number(number)
    return Number.isFinite(parsed) && parsed > 0
      ? Math.min(max, Math.max(min, Math.round(parsed))) : fallback
  }
  return {
    width: dimension(value?.width, 1280, 240, 3840),
    height: dimension(value?.height, 800, 200, 2160),
    mobile: value?.mobile === true,
  }
}
