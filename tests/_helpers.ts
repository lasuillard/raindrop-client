import { Configuration } from '^/src/generated';
import * as _axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { test as base } from 'vitest';
import { Raindrop } from '../src/client';

// eslint-disable-next-line jsdoc/require-jsdoc
async function axios(
	// eslint-disable-next-line no-empty-pattern
	{},
	// @ts-expect-error Don't know type of `use()`
	use
) {
	await use(_axios);
}

// eslint-disable-next-line jsdoc/require-jsdoc
async function mockAxios(
	{ axios }: { axios: _axios.AxiosInstance },
	// @ts-expect-error Don't know type of `use()`
	use
) {
	const mockAxios = new MockAdapter(axios, { onNoMatch: 'throwException' });
	await use(mockAxios);
}

// eslint-disable-next-line jsdoc/require-jsdoc
async function client(
	{ axios }: { axios: _axios.AxiosInstance },
	// @ts-expect-error Don't know type of `use()`
	use
) {
	const client = new Raindrop(new Configuration(), axios);
	await use(client);
}

export const it = base.extend({
	axios,
	mockAxios,
	client
});

declare module 'vitest' {
	export interface TestContext {
		axios: _axios.AxiosInstance;
		mockAxios: MockAdapter;
		client: Raindrop;
	}
}
