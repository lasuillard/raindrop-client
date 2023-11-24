/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRaindrop } from '../models/CreateRaindrop';
import type { HighlightResponse } from '../models/HighlightResponse';
import type { RaindropSingleResponse } from '../models/RaindropSingleResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class HighlightService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get raindrop
     * @param id Existing raindrop ID
     * @returns any Success
     * @throws ApiError
     */
    public getRaindrop(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/v1/raindrop/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update raindrop
     * @param id Existing raindrop ID
     * @param requestBody
     * @returns RaindropSingleResponse Success
     * @throws ApiError
     */
    public updateRaindrop(
        id: number,
        requestBody?: CreateRaindrop,
    ): CancelablePromise<RaindropSingleResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/v1/raindrop/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all highlights
     * @param page
     * @param perpage How many highlights per page. 50 max. Default 25
     * @returns HighlightResponse OK
     * @throws ApiError
     */
    public getAllHighlights(
        page?: number,
        perpage?: number,
    ): CancelablePromise<HighlightResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/v1/highlights',
            query: {
                'page': page,
                'perpage': perpage,
            },
        });
    }

    /**
     * Get all highlights in a collection
     * @param collectionId Collection ID
     * @param page
     * @param perpage How many highlights per page. 50 max. Default 25
     * @returns HighlightResponse Success
     * @throws ApiError
     */
    public getHighlightsInCollection(
        collectionId: number,
        page?: number,
        perpage?: number,
    ): CancelablePromise<HighlightResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/v1/highlights/{collectionId}',
            path: {
                'collectionId': collectionId,
            },
            query: {
                'page': page,
                'perpage': perpage,
            },
        });
    }

}
