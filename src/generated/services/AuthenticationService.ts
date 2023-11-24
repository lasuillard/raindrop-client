/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObtainToken } from '../models/ObtainToken';
import type { RefreshToken } from '../models/RefreshToken';
import type { TokenResponse } from '../models/TokenResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthenticationService {

    /**
     * Authorization request
     * Direct the user to our authorization URL with specified request parameters.
     *
     * - If the user is not logged in, they will be asked to log in
     *
     * - The user will be asked if he would like to grant your application access to his Raindrop.io data
     * @param redirectUri
     * @param clientId
     * @returns void
     * @throws ApiError
     */
    public static getOauthAuthorize(
        redirectUri: string,
        clientId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth/authorize',
            query: {
                'redirect_uri': redirectUri,
                'client_id': clientId,
            },
            errors: {
                307: `Direct to Raindrop authorization page.`,
            },
        });
    }

    /**
     * Obtain or refresh access token
     * Once you have the authorization code, you can exchange it for the access_token by doing a POST request with all required body parameters as JSON.
     *
     * For security reasons access tokens (except "test tokens") will expire after two weeks. In this case you should request the new one, by calling POST request with body parameters (JSON).
     *
     * @param requestBody
     * @returns TokenResponse Success
     * @throws ApiError
     */
    public static postOauthAccessToken(
        requestBody?: (ObtainToken | RefreshToken),
    ): CancelablePromise<TokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oauth/access_token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when code parameter is invalid`,
            },
        });
    }

}
