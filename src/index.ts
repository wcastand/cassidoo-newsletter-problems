export function lonelyNumber(a: number, b: number, c: number): number {
	const res = a * b * c
	if (res === Math.pow(a, 3)) return 1
	if (a === b || b === c || c === a) return a ^ b ^ c
	return res
}

export function drawArrow(direction: 'left' | 'right', n: number): string {
	if (n % 2 === 0) throw 'n should be an odd number'
	let str = '\n'
	if ('right' === direction) {
		for (let x = 0, dir = 1, i = 1; x < n * 2 - 1; x++) {
			// @ts-ignore
			if (i == n * dir) dir = !dir
			for (let j = 0; j < i - 1; j++) str += ' '
			str += '*\n'
			i += (dir << 1) - 1
		}
	} else {
		for (var c = -n + 1, l = n; c < l; c++) {
			for (let j = 0; j < Math.abs(c); j++) str += ' '
			str += '*\n'
		}
	}
	return str
}

export function drawCube(size: number): string {
	const x = size * 2
	const nbl = Math.ceil(size / 2)

	const empty = ' '.repeat(x)
	const v = '|' + empty + '|'
	const d = '/' + empty + '/'
	const l = '+' + '-'.repeat(x) + '+'
	const end = '\n'

	let cube = '\n'
	let k = 0
	cube += ' '.repeat(nbl + 1) + l + end
	k++
	for (let i = 0; i < nbl; i++) cube += ' '.repeat(nbl - i) + d + ' '.repeat(i) + '|' + end
	k += nbl
	cube += l + ' '.repeat(nbl) + '|' + end
	k++
	for (let i = 0; i < size; i++) {
		cube += v
		if (size + 1 === k) cube += ' '.repeat(nbl) + '+' + end
		else if (k > size + 1) cube += ' '.repeat(nbl - (k - (size + 1))) + '/' + end
		else cube += ' '.repeat(nbl) + '|' + end
		k++
	}
	cube += l
	return cube
}

export function translateShift(str: string): string {
	const map = `1234567890-=qwertyuiop[]asdfghjkl;'\zxcvbnm,./`.split('')
	return str
		.split('')
		.map((c) => {
			const idx = map.findIndex((v) => v === c.toLowerCase())
			return idx !== -1 ? map[idx - 1 <= 0 ? map.length - 1 : idx - 1] : c
		})
		.join('')
}

function converttobit(ip: string): string {
	const v = ip.split('.')
	const bin = v.map((s) => parseInt(s, 10)).map((s) => ('000000000' + s.toString(2)).substr(-8))
	return bin.join('')
}

export function inRange(ip: string, range: string): boolean {
	const [start, mask] = range.split('/')
	const prefix = parseInt(mask, 10)
	return converttobit(ip).slice(0, prefix) === converttobit(start).slice(0, prefix)
}
