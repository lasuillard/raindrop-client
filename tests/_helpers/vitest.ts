import type { Polly } from "@pollyjs/core";
import type { AxiosInstance } from "axios";
import type MockAdapter from "axios-mock-adapter";
import { test as base } from "vitest";
import type { Raindrop } from "~/client";
import { axiosInstance, client, mockAxios } from "./axios";
import { polly } from "./polly";
import { type SetupTools, resetData, setupTools } from "./raindrop";
import { type RegisterHook, generateTypeTest } from "./typechecks";

export const it = base.extend({
	// HTTP utils
	axiosInstance,
	mockAxios,
	polly: [polly, { auto: true }],
	// Schema testing
	generateTypeTest,
	// Raindrop.io fixtures
	setupTools,
	client,
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
		setupTools: SetupTools;
	}
}
