export async function dispatchOrderInput(send, viewport, input, onActivity) {
  if (!input || !['tap', 'scroll'].includes(input.type)) {
    throw Object.assign(new Error('Unsupported ordering input'), { statusCode: 400 })
  }
  const finite = (value) => typeof value === 'number' && Number.isFinite(value)
  if (!finite(input.x) || !finite(input.y) ||
      (input.type === 'scroll' && (!finite(input.deltaX) || !finite(input.deltaY)))) {
    throw Object.assign(new Error('Invalid ordering input'), { statusCode: 400 })
  }
  const point = {
    x: Math.max(0, Math.min(viewport.width - 1, input.x)),
    y: Math.max(0, Math.min(viewport.height - 1, input.y)),
  }
  if (input.type === 'scroll') {
    const deltaX = Math.max(-2000, Math.min(2000, input.deltaX))
    const deltaY = Math.max(-2000, Math.min(2000, input.deltaY))
    if (!deltaX && !deltaY) return
    await send('Input.dispatchMouseEvent', { type: 'mouseWheel', ...point, deltaX, deltaY })
  } else {
    await send('Input.dispatchMouseEvent', {
      type: 'mousePressed', ...point, button: 'left', clickCount: 1,
    })
    await send('Input.dispatchMouseEvent', {
      type: 'mouseReleased', ...point, button: 'left', clickCount: 1,
    })
  }
  onActivity()
}
