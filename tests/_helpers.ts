import NodeHTTPAdapter from '@pollyjs/adapter-node-http';
import { Polly } from '@pollyjs/core';
import FSPersister from '@pollyjs/persister-fs';
import { Configuration } from '^/src/generated';
import axios, { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { test as base } from 'vitest';
import { Raindrop } from '~/client';

Polly.register(NodeHTTPAdapter);
Polly.register(FSPersister);

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
	const accessToken = process.env.RAINDROP_API_TOKEN;
	if (!accessToken) {
		throw new Error('Raindrop API test account access token not provided.');
	}
	const client = new Raindrop(new Configuration({ accessToken }), axiosInstance);
	await use(client);
}

// @ts-expect-error Don't waste time typing this
// eslint-disable-next-line jsdoc/require-jsdoc
async function polly({ task }, use) {
	const _polly = new Polly(task.id, {
		adapters: ['node-http'],
		persister: 'fs',
		persisterOptions: {
			fs: {
				recordingsDir: 'tests/__recordings__'
			}
		},
		recordFailedRequests: true
	});
	_polly.server.any().on('beforePersist', (_, recording) => {
		// @ts-expect-error Don't care
		recording.request.headers = recording.request.headers.map((header) => {
			if (header.name == 'authorization') {
				header.value = '<REDACTED>';
			}
			return header;
		});
	});
	await use(_polly);
	await _polly.stop();
}

export const it = base.extend({
	axiosInstance,
	mockAxios,
	client,
	polly: [polly, { auto: true }]
});

declare module 'vitest' {
	export interface TestContext {
		axiosInstance: AxiosInstance;
		mockAxios: MockAdapter;
		client: Raindrop;
		polly: Polly;
	}
}
