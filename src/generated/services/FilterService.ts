/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilterResponse } from '../models/FilterResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FilterService {

    /**
     * @param collectionId Collection ID
     * @param tagsSort Sort tags by: `-count` by count, default `_id` by name
     * @param search Check "raindrops" documentation for more details
     * @returns FilterResponse Success
     * @throws ApiError
     */
    public static getRestV1Filters(
        collectionId: number,
        tagsSort?: '-count' | '_id',
        search?: string,
    ): CancelablePromise<FilterResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rest/v1/filters/{collectionId}',
            path: {
                'collectionId': collectionId,
            },
            query: {
                'tagsSort': tagsSort,
                'search': search,
            },
        });
    }

}
