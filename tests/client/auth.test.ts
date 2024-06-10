import { it } from "^/tests/_helpers/vitest";
import tokenResponse from "^/tests/fixtures/token.json";
import { describe, expect } from "vitest";

// For sample data creation
const client_id = "<CLIENT_ID>";
const client_secret = "<CLIENT_SECRET>";
const redirect_uri = "<REDIRECT_URI>";
const code = "<AUTHORIZATION_CODE>";
const refresh_token = "<REFRESH_TOKEN>";

describe("auth.exchangeToken", () => {
	it("exchange authorization code with access token", async ({
		mockAxios,
		client,
	}) => {
		mockAxios
			.onPost("https://api.raindrop.io/v1/oauth/access_token")
			.reply((config) => {
				expect(JSON.parse(config.data)).toEqual({
					client_id,
					client_secret,
					redirect_uri,
					code,
					grant_type: "authorization_code",
				});
				return [200, tokenResponse];
			});
		const response = await client.auth.exchangeToken({
			client_id,
			client_secret,
			redirect_uri,
			code,
		});
		expect(mockAxios.history.post.length).toBe(1);
		expect(response.status).toBe(200);
		expect(response.data).toEqual(tokenResponse);
	});

	it("incorrect authorization code", ({ mockAxios, client }) => {
		mockAxios
			.onPost("https://api.raindrop.io/v1/oauth/access_token")
			.reply((config) => {
				expect(JSON.parse(config.data)).toEqual({
					client_id,
					client_secret,
					redirect_uri,
					code,
					grant_type: "authorization_code",
				});
				return [
					200,
					{
						result: false,
						status: 400,
						errorMessage: "Incorrect code",
					},
				];
			});
		expect(
			client.auth.exchangeToken({
				client_id,
				client_secret,
				redirect_uri,
				code,
			}),
		).rejects.toThrowError(/^Request failed with error: .+$/);
	});

	it("client id or client secret is not valid", ({ mockAxios, client }) => {
		mockAxios
			.onPost("https://api.raindrop.io/v1/oauth/access_token")
			.reply((config) => {
				expect(JSON.parse(config.data)).toEqual({
					client_id,
					client_secret,
					redirect_uri,
					code,
					grant_type: "authorization_code",
				});
				return [
					200,
					{
						result: false,
						status: 400,
						errorMessage: "client_id or client_secret is invalid",
					},
				];
			});
		expect(
			client.auth.exchangeToken({
				client_id,
				client_secret,
				redirect_uri,
				code,
			}),
		).rejects.toThrowError(/^Request failed with error: .+$/);
	});
});

describe("auth.refreshToken", () => {
	it("refresh token", async ({ mockAxios, client }) => {
		mockAxios
			.onPost("https://api.raindrop.io/v1/oauth/access_token")
			.reply((config) => {
				expect(JSON.parse(config.data)).toEqual({
					client_id,
					client_secret,
					refresh_token,
					grant_type: "refresh_token",
				});
				return [200, tokenResponse];
			});
		const response = await client.auth.refreshToken({
			client_id,
			client_secret,
			refresh_token,
		});
		expect(mockAxios.history.post.length).toBe(1);
		expect(response.status).toBe(200);
		expect(response.data).toEqual(tokenResponse);
	});

	it("incorrect refresh token", ({ mockAxios, client }) => {
		mockAxios
			.onPost("https://api.raindrop.io/v1/oauth/access_token")
			.reply((config) => {
				expect(JSON.parse(config.data)).toEqual({
					client_id,
					client_secret,
					refresh_token,
					grant_type: "refresh_token",
				});
				return [
					200,
					{
						result: false,
						status: 400,
						errorMessage: "Incorrect refresh_token",
					},
				];
			});
		expect(
			client.auth.refreshToken({ client_id, client_secret, refresh_token }),
		).rejects.toThrowError(/^Request failed with error: .+$/);
	});
});
