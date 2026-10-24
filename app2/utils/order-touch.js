// Ignore finger jitter; once a swipe starts it must never also send a tap.
export function createOrderTouch(send) {
  let gesture
  return {
    start(id, x, y) { gesture = { id, x, y, startX: x, startY: y, moved: false } },
    move(id, x, y) {
      if (!gesture || gesture.id !== id) return
      if (!gesture.moved && Math.hypot(x - gesture.startX, y - gesture.startY) < 6) return
      gesture.moved = true
      send({ type: 'scroll', x, y, deltaX: gesture.x - x, deltaY: gesture.y - y })
      gesture.x = x
      gesture.y = y
    },
    end(id, x, y) {
      if (!gesture || gesture.id !== id) return
      if (gesture.moved) this.move(id, x, y)
      else send({ type: 'tap', x, y })
      gesture = null
    },
    cancel() { gesture = null },
  }
}
