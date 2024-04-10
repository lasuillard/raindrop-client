import { Configuration } from '^/src/generated';
import axios, { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { test as base } from 'vitest';
import { Raindrop } from '~/client';

// @ts-expect-error Don't waste time typing this
// eslint-disable-next-line no-empty-pattern, jsdoc/require-jsdoc
async function axiosInstance({}, use) {
	const instance = axios.create();
	await use(instance);
}

// @ts-expect-error Don't waste time typing this
// eslint-disable-next-line jsdoc/require-jsdoc
async function mockAxios({ axiosInstance }, use) {
	const mockAxios = new MockAdapter(axiosInstance, { onNoMatch: 'throwException' });
	await use(mockAxios);
	mockAxios.resetHandlers();
	mockAxios.resetHistory();
}

// @ts-expect-error Don't waste time typing this
// eslint-disable-next-line jsdoc/require-jsdoc
async function client({ axiosInstance }, use) {
	const client = new Raindrop(new Configuration(), axiosInstance);
	await use(client);
}

export const it = base.extend({
	axiosInstance,
	mockAxios,
	client
});

declare module 'vitest' {
	export interface TestContext {
		axiosInstance: AxiosInstance;
		mockAxios: MockAdapter;
		client: Raindrop;
	}
}
