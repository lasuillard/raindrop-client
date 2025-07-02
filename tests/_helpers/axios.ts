import { Configuration } from "^/src/generated";
import type { Use } from "@vitest/runner";
import axios, { type AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import rateLimit from "axios-rate-limit";
import { Raindrop } from "~/client";

// biome-ignore lint/correctness/noEmptyPattern: PASS
export async function axiosInstance({}, use: Use<AxiosInstance>) {
	const instance = axios.create({
		validateStatus: () => true,
	});
	instance.interceptors.response.use((response) => {
		const { method, path } = response.request;
		if (
			method === "POST" &&
			/^\/rest\/v1\/collection\/.+\/sharing$/.test(path)
		) {
			response.data.token = "<REDACTED>";
		}
		return response;
	});
	const rateLimited = rateLimit(instance, { maxRPS: 5 });
	await use(rateLimited);
}

export async function mockAxios(
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

export async function client(
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
