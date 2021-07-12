import { strict as assert } from 'assert'
import { test, run, only, group } from 'simut'

import { lonelyNumber, drawArrow, drawCube, translateShift, inRange } from '../src/'

group('Lonely number')

test('should not throw', async () => assert.doesNotThrow(() => lonelyNumber(1, 2, 3)))

test('should return product', async () => assert.equal(lonelyNumber(1, 2, 3), 6))
test('should return the lonely number', async () => assert.equal(lonelyNumber(1, 1, 3), 3))
test('should return 1', async () => assert.equal(lonelyNumber(3, 3, 3), 1))

group('Arrow')

test('should throw', async () => assert.throws(() => drawArrow('right', 2)))
test('should not throw', async () => assert.doesNotThrow(() => drawArrow('right', 3)))

test('should make a right arrow of size 3', async () => assert.equal(drawArrow('right', 3), '\n*\n *\n  *\n *\n*\n'))
test('should make a right arrow of size 5', async () =>
	assert.equal(drawArrow('right', 5), '\n*\n *\n  *\n   *\n    *\n   *\n  *\n *\n*\n'))

test('should make a left arrow of size 3', async () => assert.equal(drawArrow('left', 3), '\n  *\n *\n*\n *\n  *\n'))
test('should make a left arrow of size 5', async () =>
	assert.equal(drawArrow('left', 5), '\n    *\n   *\n  *\n *\n*\n *\n  *\n   *\n    *\n'))

group('Cube')

test('should not throw', async () => assert.doesNotThrow(() => drawCube(3)))

test('should make a cube of height 2', async () => assert.equal(drawCube(2), `\n  +----+\n /    /|\n+----+ |\n|    | +\n|    |/\n+----+`))
test('should make a cube of height 3', async () =>
	assert.equal(drawCube(3), `\n   +------+\n  /      /|\n /      / |\n+------+  |\n|      |  +\n|      | /\n|      |/\n+------+`))
test('should make a cube of height 4', async () =>
	assert.equal(
		drawCube(4),
		`\n   +--------+\n  /        /|\n /        / |\n+--------+  |\n|        |  |\n|        |  +\n|        | /\n|        |/\n+--------+`
	))

group('Translate Shift')

test('should not throw', async () => assert.doesNotThrow(() => translateShift('translateShift')))

test('should translate correctly', async () => assert.equal(translateShift(';p; epe'), 'lol wow'))
test('should translate correctly', async () => assert.equal(translateShift('vtsmnrttu'), 'cranberry'))
test('should translate correctly', async () => assert.equal(translateShift('vtsmnrttu/'), 'cranberry.'))
test('should translate correctly', async () => assert.equal(translateShift('vtsmnrttu1'), 'cranberry/'))

group('In Range')

test('should not throw', async () => assert.doesNotThrow(() => inRange('192.168.4.27', '192.168.0.0/16')))

test('should return right bool', async () => assert.equal(inRange('192.168.4.27', '192.168.0.0/16'), true))
test('should return right bool', async () => assert.equal(inRange('192.168.4.27', '192.168.1.0/24'), false))

run()
