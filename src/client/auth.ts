import { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
	GetOrRefreshToken200Response,
	ObtainToken,
	ObtainTokenGrantTypeEnum,
	RefreshToken,
	RefreshTokenGrantTypeEnum,
	TokenErrorResponse,
	TokenResponse,
	AuthenticationApi as _AuthenticationApi
} from '~/generated';

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
