export function lonelyNumber(a: number, b: number, c: number): number {
	const res = a * b * c
	if (res === Math.pow(a, 3)) return 1
	if (a === b || b === c || c === a) return a ^ b ^ c
	return res
}

export function arrow(direction: 'left' | 'right', n: number): string {
	if (n % 2 === 0) throw 'n should be an odd number'
	let str = ''
	if ('right' === direction) {
		for (let x = 0, dir = 1, i = 1; x < n * 2 - 1; x++) {
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
