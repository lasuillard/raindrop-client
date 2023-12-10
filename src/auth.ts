import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import tokenResponse from '../tests/fixtures/token.json';
import {
	Configuration,
	GetOrRefreshToken200Response,
	ObtainToken,
	ObtainTokenGrantTypeEnum,
	RefreshToken,
	RefreshTokenGrantTypeEnum,
	TokenErrorResponse,
	TokenResponse,
	AuthenticationApi as _AuthenticationApi
} from './generated';

export class AuthenticationApi extends _AuthenticationApi {
	/**
	 * Wrapper function of {@link _AuthenticationApi.getOrRefreshToken} for token exchange.
	 * @param request {@link ObtainToken} but without `grant_type` field.
	 * @param options Axios request configuration.
	 * @returns API response.
	 */
	async exchangeToken(
		request: Omit<ObtainToken, 'grant_type'>,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		options?: AxiosRequestConfig<any>
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<AxiosResponse<TokenResponse, any>> {
		return this.getOrRefreshToken(
			{ ...request, grant_type: ObtainTokenGrantTypeEnum.AuthorizationCode },
			options
		).then((response) => {
			if (isErrorResponse(response.data)) {
				throw new Error(`Request failed with error: ${response.data.errorMessage}`);
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return response as AxiosResponse<TokenResponse, any>;
		});
	}

	/**
	 * Wrapper function of {@link _AuthenticationApi.getOrRefreshToken} for token refresh.
	 * @param request {@link RefreshToken} but without `grant_type` field.
	 * @param options Axios request configuration.
	 * @returns API response.
	 */
	async refreshToken(
		request: Omit<RefreshToken, 'grant_type'>,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		options?: AxiosRequestConfig<any>
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<AxiosResponse<TokenResponse, any>> {
		return this.getOrRefreshToken(
			{ ...request, grant_type: RefreshTokenGrantTypeEnum.RefreshToken },
			options
		).then((response) => {
			if (isErrorResponse(response.data)) {
				throw new Error(`Request failed with error: ${response.data.errorMessage}`);
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return response as AxiosResponse<TokenResponse, any>;
		});
	}
}

/**
 * Determine response is error or not.
 * @param data Response data to judge.
 * @returns Whether it is error.
 */
function isErrorResponse(data: GetOrRefreshToken200Response): data is TokenErrorResponse {
	return 'result' in data && data.result === false;
}

/* c8 ignore start */
if (import.meta.vitest) {
	const { describe, expect, it, afterEach } = import.meta.vitest;

	// For sample data creation
	const client_id = '<CLIENT_ID>';
	const client_secret = '<CLIENT_SECRET>';
	const redirect_uri = '<REDIRECT_URI>';
	const code = '<AUTHORIZATION_CODE>';
	const refresh_token = '<REFRESH_TOKEN>';

	// Mocks
	const mockAxios = new MockAdapter(axios, { onNoMatch: 'throwException' });

	const authApi = new AuthenticationApi(new Configuration(), undefined, axios);

	afterEach(() => {
		mockAxios.resetHandlers();
		mockAxios.resetHistory();
	});

	describe(authApi.exchangeToken, () => {
		it('exchange authorization code with access token', async () => {
			mockAxios.onPost('https://api.raindrop.io/v1/oauth/access_token').reply((config) => {
				expect(JSON.parse(config.data)).toEqual({
					client_id,
					client_secret,
					redirect_uri,
					code,
					grant_type: 'authorization_code'
				});
				return [200, tokenResponse];
			});
			const response = await authApi.exchangeToken({
				client_id,
				client_secret,
				redirect_uri,
				code
			});
			expect(mockAxios.history.post.length).toBe(1);
			expect(response.status).toBe(200);
			expect(response.data).toEqual(tokenResponse);
		});

		it('incorrect authorization code', () => {
			mockAxios.onPost('https://api.raindrop.io/v1/oauth/access_token').reply((config) => {
				expect(JSON.parse(config.data)).toEqual({
					client_id,
					client_secret,
					redirect_uri,
					code,
					grant_type: 'authorization_code'
				});
				return [
					200,
					{
						result: false,
						status: 400,
						errorMessage: 'Incorrect code'
					}
				];
			});
			expect(
				authApi.exchangeToken({
					client_id,
					client_secret,
					redirect_uri,
					code
				})
			).rejects.toThrowError(/^Request failed with error: .+$/);
		});

		it('client id or client secret is not valid', () => {
			mockAxios.onPost('https://api.raindrop.io/v1/oauth/access_token').reply((config) => {
				expect(JSON.parse(config.data)).toEqual({
					client_id,
					client_secret,
					redirect_uri,
					code,
					grant_type: 'authorization_code'
				});
				return [
					200,
					{
						result: false,
						status: 400,
						errorMessage: 'client_id or client_secret is invalid'
					}
				];
			});
			expect(
				authApi.exchangeToken({
					client_id,
					client_secret,
					redirect_uri,
					code
				})
			).rejects.toThrowError(/^Request failed with error: .+$/);
		});
	});

	describe(authApi.refreshToken, () => {
		it('refresh token', async () => {
			mockAxios.onPost('https://api.raindrop.io/v1/oauth/access_token').reply((config) => {
				expect(JSON.parse(config.data)).toEqual({
					client_id,
					client_secret,
					refresh_token,
					grant_type: 'refresh_token'
				});
				return [200, tokenResponse];
			});
			const response = await authApi.refreshToken({ client_id, client_secret, refresh_token });
			expect(mockAxios.history.post.length).toBe(1);
			expect(response.status).toBe(200);
			expect(response.data).toEqual(tokenResponse);
		});

		it('incorrect refresh token', () => {
			mockAxios.onPost('https://api.raindrop.io/v1/oauth/access_token').reply((config) => {
				expect(JSON.parse(config.data)).toEqual({
					client_id,
					client_secret,
					refresh_token,
					grant_type: 'refresh_token'
				});
				return [
					200,
					{
						result: false,
						status: 400,
						errorMessage: 'Incorrect refresh_token'
					}
				];
			});
			expect(
				authApi.refreshToken({ client_id, client_secret, refresh_token })
			).rejects.toThrowError(/^Request failed with error: .+$/);
		});
	});
}
/* c8 ignore stop */
