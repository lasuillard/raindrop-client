import * as api from './generated';
export default api;

export { Raindrop } from './client';

/* c8 ignore start */
if (import.meta.vitest) {
	const { it } = import.meta.vitest;

	it.skip('Nothing to test here');
}
/* c8 ignore stop */
