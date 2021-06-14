import { strict as assert } from 'assert'
import { test, run, group } from 'simut'

import { lonelyNumber, arrow } from '../src/'

group('Lonely number')

test('should return product', async () => assert.equal(lonelyNumber(1, 2, 3), 6, 'should return the product'))
test('should return the lonely number', async () => assert.equal(lonelyNumber(1, 1, 3), 3, 'should return the lonely number'))
test('should return 1', async () => assert.equal(lonelyNumber(3, 3, 3), 1, 'should return 1'))

group('Arrow')

test('should throw', async () => assert.throws(() => arrow('right', 2)))
test('should not throw', async () => assert.doesNotThrow(() => arrow('right', 3)))

test('should make a right arrow of size 3', async () => assert.equal(arrow('right', 3), '*\n *\n  *\n *\n*\n'))
test('should make a right arrow of size 5', async () => assert.equal(arrow('right', 5), '*\n *\n  *\n   *\n    *\n   *\n  *\n *\n*\n'))

test('should make a left arrow of size 3', async () => assert.equal(arrow('left', 3), '  *\n *\n*\n *\n  *\n'))
test('should make a left arrow of size 5', async () => assert.equal(arrow('left', 5), '    *\n   *\n  *\n *\n*\n *\n  *\n   *\n    *\n'))

run()
