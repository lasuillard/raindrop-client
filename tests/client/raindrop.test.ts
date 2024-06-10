import { it } from "^/tests/_helpers/vitest";
import raindropResponse from "^/tests/fixtures/raindrops.json";
import { describe, expect } from "vitest";

// Mocks
const mockPaginatedResponse = (page: number, pageSize: number) => {
	return {
		...raindropResponse,
		items: raindropResponse.items.slice(page * pageSize, (page + 1) * pageSize),
	};
};

const getParams = (url: string) =>
	Object.fromEntries(new URL(url).searchParams.entries());

describe("raindrop.getAllRaindrops", () => {
	it("fetch full pagination results", async ({ mockAxios, client }) => {
		mockAxios
			.onGet(/https:\/\/api\.raindrop\.io\/rest\/v1\/raindrops\/0/)
			.reply((config) => {
				const params = getParams(config.url ?? "");
				expect(params).toEqual({
					sort: "",
					perpage: "1",
					page: expect.any(String),
					search: "",
				});
				const response = mockPaginatedResponse(Number.parseInt(params.page), 1);
				return [200, response];
			});
		const result = await client.raindrop.getAllRaindrops(0, { pageSize: 1 });
		expect(mockAxios.history.get.length).toBe(5);
		expect(result).toHaveLength(5);
		expect(result).toEqual(raindropResponse.items);
	});

	it("single page size", async ({ mockAxios, client }) => {
		mockAxios
			.onGet(/https:\/\/api\.raindrop\.io\/rest\/v1\/raindrops\/0/)
			.reply((config) => {
				const params = getParams(config.url ?? "");
				expect(params).toEqual({
					sort: "",
					perpage: "5",
					page: "0",
					search: "",
				});
				return [200, mockPaginatedResponse(0, 5)];
			});
		const result = await client.raindrop.getAllRaindrops(0, { pageSize: 5 });
		expect(mockAxios.history.get.length).toBe(1);
		expect(result).toEqual(raindropResponse.items);
	});

	// TODO: Should rewrite whole custom client codes using Polly
	it.skip("collection not found", ({ mockAxios, client }) => {
		mockAxios
			.onGet(/https:\/\/api\.raindrop\.io\/rest\/v1\/raindrops\/35947374/)
			.reply((config) => {
				const params = getParams(config.url ?? "");
				expect(params).toEqual({
					sort: "",
					perpage: "50",
					page: "0",
					search: "",
				});
				return [
					403,
					{
						result: false,
						status: 403,
						errorMessage: "collection 35947374 not found",
						access: false,
					},
				];
			});
		expect(client.raindrop.getAllRaindrops(35947374)).rejects.toThrowError(
			"Request failed with status code 403",
		);
	});
});
