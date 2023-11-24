/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyResponse } from '../models/EmptyResponse';
import type { Response } from '../models/Response';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagService {

    /**
     * Get tags
     * @param collectionId Optional collection ID, when not specified all tags from all collections will be retrieved
     * @returns any Success
     * @throws ApiError
     */
    public static getRestV1Tags(
        collectionId?: number,
    ): CancelablePromise<Response> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rest/v1/tags/{collectionId}',
            path: {
                'collectionId': collectionId,
            },
        });
    }

    /**
     * Rename tag / Merge tags
     * @param collectionId It's possible to restrict rename action to just one collection. It's optional
     * @param requestBody
     * @returns EmptyResponse Success
     * @throws ApiError
     */
    public static putRestV1Tags(
        collectionId?: number,
        requestBody?: {
            /**
             * New name
             */
            replace?: string;
            /**
             * Rename: Specify **array** with **only one** string (name of a tag)
             *
             * Merge: List of tags
             */
            tags?: Array<string>;
        },
    ): CancelablePromise<EmptyResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/rest/v1/tags/{collectionId}',
            path: {
                'collectionId': collectionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove tags
     * @param collectionId It's possible to restrict rename action to just one collection. It's optional
     * @param requestBody
     * @returns EmptyResponse Success
     * @throws ApiError
     */
    public static deleteRestV1Tags(
        collectionId?: number,
        requestBody?: {
            /**
             * List of tags
             */
            tags?: Array<string>;
        },
    ): CancelablePromise<EmptyResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/rest/v1/tags/{collectionId}',
            path: {
                'collectionId': collectionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
