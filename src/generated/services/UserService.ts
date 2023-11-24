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
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get system collections count
     * @returns StatResponse Success
     * @throws ApiError
     */
    public getSystemCollectionStats(): CancelablePromise<StatResponse> {
        return this.httpRequest.request({
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
    public getCurrentUser(): CancelablePromise<UserResponse> {
        return this.httpRequest.request({
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
    public updateCurrentUser(
        requestBody?: {
            groups?: Array<Group>;
            config?: UserConfig;
            newpassword?: string;
            oldpassword?: string;
            fullName?: string;
            email?: string;
        },
    ): CancelablePromise<UserResponse> {
        return this.httpRequest.request({
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
    public getPublicUserByName(
        name: number,
    ): CancelablePromise<Response> {
        return this.httpRequest.request({
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
    public connectSocialNetworkProvider(
        provider: 'facebook' | 'google' | 'twitter' | 'vkontate' | 'dropbox' | 'gdrive',
    ): CancelablePromise<void> {
        return this.httpRequest.request({
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
    public disconnectSocialNetworkProvider(
        provider: 'facebook' | 'google' | 'twitter' | 'vkontate' | 'dropbox' | 'gdrive',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/v1/user/connect/{provider}/revoke',
            path: {
                'provider': provider,
            },
        });
    }

}
