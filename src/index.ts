/**
 * Add two numbers.
 * @param a Left number.
 * @param b Right number.
 * @returns Sum of numbers.
 */
export function add(a: number, b: number): number {
	return a + b;
}

import * as generated from './generated';
export { generated };

import { Client } from './generated';
export { Client };

/* c8 ignore start */
if (import.meta.vitest) {
	const { expect, it } = import.meta.vitest;

	it(add, () => {
		expect(add(1, 3)).toEqual(4);
	});
}
/* c8 ignore stop */
