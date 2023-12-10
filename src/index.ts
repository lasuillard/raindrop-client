import * as client from './client';
import * as generated from './generated'; // For those who think this library lacks something
import * as utils from './utils';

export { client, generated, utils };

// Handy default
export default client.Raindrop;

/* c8 ignore start */
if (import.meta.vitest) {
	const { it } = import.meta.vitest;

	it.skip('Nothing to test here');
}
/* c8 ignore stop */
