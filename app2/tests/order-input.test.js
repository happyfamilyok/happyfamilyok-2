import { test } from 'node:test'
import assert from 'node:assert/strict'
import { dispatchOrderInput } from '../server/utils/order-input.js'
import { createIdleWatch } from '../server/utils/order-idle.js'
import { createOrderTouch } from '../utils/order-touch.js'

const viewport = { width: 390, height: 650 }
test('swipes forward scroll without a tap; taps and cancelled gestures remain separate', () => {
  const inputs = []
  const touch = createOrderTouch(input => inputs.push(input))
  touch.start(1, 100, 400)
  touch.move(1, 101, 398)
  assert.equal(inputs.length, 0)
  touch.move(1, 100, 300)
  touch.end(1, 100, 250)
  assert.deepEqual(inputs.map(i => i.type), ['scroll', 'scroll'])
  assert.equal(inputs.reduce((sum, i) => sum + i.deltaY, 0), 150)
  touch.start(2, 100, 200)
  touch.end(2, 100, 200)
  assert.equal(inputs.at(-1).type, 'tap')
  touch.start(3, 100, 200)
  touch.cancel()
  touch.end(3, 100, 200)
  assert.equal(inputs.length, 3)
})

test('forwarded scroll resets the 15-second timer, then inactivity closes the session', async t => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  let closed = 0
  const idle = createIdleWatch(() => closed++)
  const commands = []
  t.mock.timers.tick(10_000)
  await dispatchOrderInput(async (...args) => commands.push(args), viewport,
    { type: 'scroll', x: 100, y: 300, deltaX: 0, deltaY: 150 }, idle.touch)
  assert.equal(commands[0][1].type, 'mouseWheel')
  t.mock.timers.tick(14_999)
  assert.equal(closed, 0)
  t.mock.timers.tick(1)
  assert.equal(closed, 1)
})

test('invalid, empty, or failed input does not count as activity', async () => {
  let activity = 0
  const touch = () => activity++
  await assert.rejects(dispatchOrderInput(async () => {}, viewport,
    { type: 'scroll', x: NaN, y: 3, deltaX: 0, deltaY: 10 }, touch))
  await dispatchOrderInput(async () => {}, viewport,
    { type: 'scroll', x: 1, y: 1, deltaX: 0, deltaY: 0 }, touch)
  await assert.rejects(dispatchOrderInput(async () => { throw Error('Disconnected') }, viewport,
    { type: 'tap', x: 10, y: 10 }, touch))
  assert.equal(activity, 0)
})
