import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createOrderSessionController } from '../utils/order-session.js'

const flush = async () => { await Promise.resolve(); await Promise.resolve() }
function setup(t, request) {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  const state = { phase: 'waiting', liveViewUrl: '' }
  let visible = true
  let creates = 0
  const released = []
  const requests = []
  const controller = createOrderSessionController({
    state,
    isPageVisible: () => visible,
    release: id => released.push(id),
    request: async (...args) => {
      requests.push(args)
      if (args[0] === '/api/order-embed/viewport') return { ok: true }
      if (args[1].method === 'POST') {
        creates++
        return request ? request() : { sessionId: 'shared-session', liveViewUrl: 'https://example.com/live' }
      }
      return { active: false }
    },
  })
  return { state, controller, released, requests, get creates() { return creates }, setPageVisible(value) { visible = value } }
}

test('starts only when a component is in view and the tab is visible', async t => {
  const app = setup(t)
  app.controller.ensureStarted()
  assert.equal(app.creates, 0)
  app.setPageVisible(false)
  app.controller.setVisible('first', true)
  assert.equal(app.creates, 0)
  app.setPageVisible(true)
  app.controller.ensureStarted()
  await flush()
  assert.equal(app.creates, 1)
  assert.equal(app.state.phase, 'active')
})

test('instances share one in-flight request and retain the session across unmounts', async t => {
  let resolve
  const app = setup(t, () => new Promise(r => { resolve = r }))
  app.controller.setVisible('first', true)
  app.controller.setVisible('second', true)
  assert.equal(app.creates, 1)
  resolve({ sessionId: 'one', liveViewUrl: 'https://example.com/live' })
  await flush()
  app.controller.removeInstance('first')
  app.controller.removeInstance('second')
  app.controller.setVisible('third', true)
  assert.equal(app.creates, 1)
  assert.deepEqual(app.released, [])
  assert.equal(app.state.liveViewUrl, 'https://example.com/live')
})

test('keeps the same startup result during a gap between components', async t => {
  let resolve
  const app = setup(t, () => new Promise(r => { resolve = r }))
  app.controller.setVisible('first', true)
  app.controller.removeInstance('first')
  resolve({ sessionId: 'unused', liveViewUrl: 'https://example.com/live' })
  await flush()
  assert.deepEqual(app.released, [])
  assert.equal(app.state.phase, 'active')
  assert.equal(app.state.activeInstance, null)
  app.controller.setVisible('next', true)
  assert.equal(app.state.activeInstance, 'next')
  assert.equal(app.creates, 1)
  assert.equal(app.state.liveViewUrl, 'https://example.com/live')
})

test('idle expiry updates all instances and does not automatically recreate a session', async t => {
  const app = setup(t)
  app.controller.setVisible('first', true)
  await flush()
  t.mock.timers.tick(3000)
  await flush()
  assert.equal(app.state.phase, 'closed')
  assert.equal(app.state.liveViewUrl, '')
  app.controller.setVisible('second', true)
  assert.equal(app.creates, 1)
  await app.controller.startSession()
  assert.equal(app.creates, 2)
})


test('only one visible instance owns the viewer and ownership transfers without a new session', async t => {
  const app = setup(t)
  app.controller.setVisible('first', true)
  app.controller.setVisible('second', true)
  await flush()
  assert.equal(app.state.activeInstance, 'first')
  app.controller.setVisible('first', false)
  assert.equal(app.state.activeInstance, 'second')
  assert.equal(app.creates, 1)
  assert.deepEqual(app.released, [])
})


test('a loaded viewer remains mounted when scrolling away from full visibility', async t => {
  const app = setup(t)
  app.controller.setVisible('first', true)
  await flush()
  app.controller.hideStatus()
  app.controller.setVisible('first', false)
  assert.equal(app.state.activeInstance, 'first')
  assert.equal(app.state.liveViewUrl, 'https://example.com/live')
  app.controller.setVisible('second', true)
  assert.equal(app.state.activeInstance, 'second')
  assert.equal(app.creates, 1)
})


test('uses the visible component dimensions for creation and resizes the shared session on handoff', async t => {
  const app = setup(t)
  const phone = { width: 390, height: 700, mobile: true }
  const desktop = { width: 1200, height: 750, mobile: false }
  app.controller.setViewport('phone', phone)
  app.controller.setVisible('phone', true)
  await flush()
  assert.deepEqual(app.requests[0][1].body.viewport, phone)
  app.controller.setViewport('desktop', desktop)
  app.controller.setVisible('phone', false)
  app.controller.setVisible('desktop', true)
  await flush()
  const resize = app.requests.find(([url]) => url === '/api/order-embed/viewport')
  assert.deepEqual(resize[1].body, { sessionId: 'shared-session', viewport: desktop })
  assert.equal(app.creates, 1)
  app.controller.setViewport('desktop', { ...desktop, height: 500 })
  t.mock.timers.tick(150)
  await flush()
  assert.equal(app.requests.at(-1)[1].body.viewport.height, 500)
  assert.equal(app.creates, 1)
})
