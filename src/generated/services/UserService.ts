/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Group } from '../models/Group';
import type { Response } from '../models/Response';
import type { StatResponse } from '../models/StatResponse';
import type { UserConfig } from '../models/UserConfig';
import type { UserResponse } from '../models/UserResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Get system collections count
     * @returns StatResponse Success
     * @throws ApiError
     */
    public static getRestV1UserStats(): CancelablePromise<StatResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rest/v1/user/stats',
        });
    }

    /**
     * Get user
     * Get currently authenticated user details
     * @returns UserResponse Success
     * @throws ApiError
     */
    public static getRestV1User(): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rest/v1/user',
            errors: {
                401: `Unauthenticated`,
            },
        });
    }

    /**
     * Update user
     * To change email, config, password, etc... you can do it from single endpoint
     * @param requestBody
     * @returns UserResponse Success
     * @throws ApiError
     */
    public static putRestV1User(
        requestBody?: {
            groups?: Array<Group>;
            config?: UserConfig;
            newpassword?: string;
            oldpassword?: string;
            fullName?: string;
            email?: string;
        },
    ): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/rest/v1/user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }

    /**
     * Get user by name
     * Get's publicly available user details
     * @param name Username
     * @returns any Success
     * @throws ApiError
     */
    public static getRestV1User1(
        name: number,
    ): CancelablePromise<Response> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rest/v1/user/{name}',
            path: {
                'name': name,
            },
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * Connect social network acount
     * Connect social network account as sign in authentication option
     * @param provider facebook google twitter vkontakte dropbox or gdrive
     * @returns void
     * @throws ApiError
     */
    public static getRestV1UserConnect(
        provider: 'facebook' | 'google' | 'twitter' | 'vkontate' | 'dropbox' | 'gdrive',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rest/v1/user/connect/{provider}',
            path: {
                'provider': provider,
            },
            errors: {
                307: `Temporary redirect`,
            },
        });
    }

    /**
     * Disconnect social network account
     * Disconnect social network account from available authentication options
     * @param provider facebook google twitter vkontakte dropbox or gdrive
     * @returns any Success
     * @throws ApiError
     */
    public static getRestV1UserConnectRevoke(
        provider: 'facebook' | 'google' | 'twitter' | 'vkontate' | 'dropbox' | 'gdrive',
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rest/v1/user/connect/{provider}/revoke',
            path: {
                'provider': provider,
            },
        });
    }

}
