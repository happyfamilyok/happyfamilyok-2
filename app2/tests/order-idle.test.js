import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createIdleWatch } from '../server/utils/order-idle.js'

test('closes once at 15 seconds with no interaction', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  let closed = 0
  const watch = createIdleWatch(() => closed++)
  t.mock.timers.tick(14_999)
  assert.equal(closed, 0)
  t.mock.timers.tick(1)
  assert.equal(closed, 1)
  watch.touch()
  t.mock.timers.tick(15_000)
  assert.equal(closed, 1)
})

test('interaction resets the full 15 seconds and stopping cancels release', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  let closed = 0
  const watch = createIdleWatch(() => closed++)
  t.mock.timers.tick(10_000)
  watch.touch()
  t.mock.timers.tick(14_999)
  assert.equal(closed, 0)
  t.mock.timers.tick(1)
  assert.equal(closed, 1)
  const next = createIdleWatch(() => closed++)
  next.stop()
  t.mock.timers.tick(15_000)
  assert.equal(closed, 1)
})
