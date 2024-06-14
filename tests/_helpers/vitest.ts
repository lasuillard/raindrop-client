import type { Polly } from "@pollyjs/core";
import type { AxiosInstance } from "axios";
import type MockAdapter from "axios-mock-adapter";
import { test as base } from "vitest";
import type { Raindrop } from "~/client";
import { axiosInstance, client, mockAxios } from "./axios";
import { polly } from "./polly";
import { resetData } from "./raindrop";
import { type RegisterHook, generateTypeTest } from "./typechecks";

export const it = base.extend({
	axiosInstance,
	mockAxios,
	client,
	polly: [polly, { auto: true }],
	generateTypeTest,
	resetData,
});

declare module "vitest" {
	export interface TestContext {
		axiosInstance: AxiosInstance;
		mockAxios: MockAdapter;
		client: Raindrop;
		polly: Polly;
		generateTypeTest: RegisterHook;
		resetData: undefined;
	}
}
