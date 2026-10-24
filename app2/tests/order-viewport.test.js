import { test } from 'node:test'
import assert from 'node:assert/strict'
import { normalizeOrderViewport } from '../server/utils/order-viewport.js'

test('preserves phone dimensions and normalizes invalid or oversized viewports', () => {
  assert.deepEqual(normalizeOrderViewport({ width: 390, height: 700, mobile: true }),
    { width: 390, height: 700, mobile: true })
  assert.deepEqual(normalizeOrderViewport({ width: NaN, height: Infinity }),
    { width: 1280, height: 800, mobile: false })
  assert.deepEqual(normalizeOrderViewport({ width: 99999, height: 2, mobile: 'true' }),
    { width: 3840, height: 200, mobile: false })
})
