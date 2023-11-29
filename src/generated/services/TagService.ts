/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Response } from '../models/Response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TagService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get tags
     * @param collectionId Optional collection ID, when not specified all tags from all collections will be retrieved
     * @returns any Success
     * @throws ApiError
     */
    public getTagsInCollection(
        collectionId?: number,
    ): CancelablePromise<Response> {
        return this.httpRequest.request({
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
     * @returns Response Success
     * @throws ApiError
     */
    public renameOrMergeTags(
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
    ): CancelablePromise<Response> {
        return this.httpRequest.request({
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
     * @returns Response Success
     * @throws ApiError
     */
    public removeTagsFromCollection(
        collectionId?: number,
        requestBody?: {
            /**
             * List of tags
             */
            tags?: Array<string>;
        },
    ): CancelablePromise<Response> {
        return this.httpRequest.request({
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
