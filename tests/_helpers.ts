import NodeHTTPAdapter from "@pollyjs/adapter-node-http";
import { Polly } from "@pollyjs/core";
import FSPersister from "@pollyjs/persister-fs";
import type { Use } from "@vitest/runner";
import { Configuration } from "^/src/generated";
import axios, { type AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import type { Task } from "vitest";
import { test as base } from "vitest";
import { Raindrop } from "~/client";
import { type RegisterHook, generateTypeTest } from "./_type_testing";

Polly.register(NodeHTTPAdapter);
Polly.register(FSPersister);

// biome-ignore lint/correctness/noEmptyPattern: PASS
async function axiosInstance({}, use: Use<AxiosInstance>) {
	const instance = axios.create({
		validateStatus: () => true,
	});
	await use(instance);
}

async function mockAxios(
	{ axiosInstance }: { axiosInstance: AxiosInstance },
	use: Use<MockAdapter>,
) {
	const mockAxios = new MockAdapter(axiosInstance, {
		onNoMatch: "throwException",
	});
	await use(mockAxios);
	mockAxios.resetHandlers();
	mockAxios.resetHistory();
}

async function client(
	{ axiosInstance }: { axiosInstance: AxiosInstance },
	use: Use<Raindrop>,
) {
	const accessToken = process.env.RAINDROP_API_TOKEN;
	const client = new Raindrop(
		new Configuration({ accessToken }),
		axiosInstance,
	);
	await use(client);
}

async function polly({ task }: { task: Task }, use: Use<Polly>) {
	const _polly = new Polly(task.id, {
		adapters: ["node-http"],
		persister: "fs",
		persisterOptions: {
			fs: {
				recordingsDir: "tests/__recordings__",
			},
		},
		recordFailedRequests: true,
		matchRequestsBy: {
			headers: {
				exclude: ["authorization"],
			},
		},
	});
	_polly.server.any().on("beforePersist", (_, recording) => {
		recording.request.headers = recording.request.headers.map(
			// @ts-expect-error Don't care
			(header: Header) => {
				if (header.name === "authorization") {
					header.value = "<REDACTED>";
				}
				return header;
			},
		);
	});
	await use(_polly);
	await _polly.stop();
}

export const it = base.extend({
	axiosInstance,
	mockAxios,
	client,
	polly: [polly, { auto: true }],
	generateTypeTest,
});

declare module "vitest" {
	export interface TestContext {
		axiosInstance: AxiosInstance;
		mockAxios: MockAdapter;
		client: Raindrop;
		polly: Polly;
		generateTypeTest: RegisterHook;
	}
}
