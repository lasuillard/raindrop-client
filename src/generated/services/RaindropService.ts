/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRaindrop } from '../models/CreateRaindrop';
import type { RaindropResponseMany } from '../models/RaindropResponseMany';
import type { RaindropResponseOne } from '../models/RaindropResponseOne';
import type { Response } from '../models/Response';
import type { SuggestResponse } from '../models/SuggestResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RaindropService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create raindrop
     * @param requestBody
     * @returns RaindropResponseOne Success
     * @throws ApiError
     */
    public createRaindrop(
        requestBody?: CreateRaindrop,
    ): CancelablePromise<RaindropResponseOne> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/v1/raindrop',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

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
     * @returns RaindropResponseOne Success
     * @throws ApiError
     */
    public updateRaindrop(
        id: number,
        requestBody?: CreateRaindrop,
    ): CancelablePromise<RaindropResponseOne> {
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
     * Remove raindrop
     * When you remove raindrop it will be moved to user Trash collection. But if you try to remove raindrop from Trash, it will be removed permanently.
     * @param id Existing raindrop ID
     * @returns Response Success
     * @throws ApiError
     */
    public removeRaindrop(
        id: number,
    ): CancelablePromise<Response> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/v1/raindrop/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Upload file
     * Make sure to send PUT request with [multipart/form-data](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST#example) body
     * @param formData
     * @returns RaindropResponseOne Success
     * @throws ApiError
     */
    public uploadFile(
        formData?: {
            /**
             * File
             */
            file?: Blob;
            /**
             * Collection Id
             */
            collectionId?: number;
        },
    ): CancelablePromise<RaindropResponseOne> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/v1/raindrop/file',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Upload cover
     * PNG, GIF or JPEG
     * @param id Existing raindrop ID
     * @param formData
     * @returns RaindropResponseOne Success
     * @throws ApiError
     */
    public uploadRaindropCover(
        id: number,
        formData?: {
            /**
             * File
             */
            cover?: Blob;
        },
    ): CancelablePromise<RaindropResponseOne> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/v1/raindrop/{id}/cover',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad request`,
            },
        });
    }

    /**
     * Get permanent copy
     * Links permanently saved with all content (only in PRO plan). Using this method you can navigate to this copy.
     * @param id Existing raindrop ID
     * @returns void
     * @throws ApiError
     */
    public getPermanentCopy(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/v1/raindrop/{id}/cache',
            path: {
                'id': id,
            },
            errors: {
                307: `Success`,
            },
        });
    }

    /**
     * Suggest collection and tags for new bookmark
     * @param requestBody
     * @returns SuggestResponse Success
     * @throws ApiError
     */
    public suggestForNewBookmark(
        requestBody?: {
            link?: string;
        },
    ): CancelablePromise<SuggestResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/v1/raindrop/suggest',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Suggest collection and tags for existing bookmark
     * @param id Bookmark id
     * @returns SuggestResponse Success
     * @throws ApiError
     */
    public suggestForExistingBookmark(
        id: number,
    ): CancelablePromise<SuggestResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/v1/raindrop/{id}/suggest',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get raindrops
     * @param collectionId Collection ID
     * @param sort
     * @param perpage
     * @param page
     * @param search
     * @returns any Success
     * @throws ApiError
     */
    public getRaindrops(
        collectionId: number,
        sort?: string,
        perpage?: string,
        page?: string,
        search?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/v1/raindrops/{collectionId}',
            path: {
                'collectionId': collectionId,
            },
            query: {
                'sort': sort,
                'perpage': perpage,
                'page': page,
                'search': search,
            },
        });
    }

    /**
     * Update many raindrops
     * Specify optional search and/or ids parameters to limit raindrops that will be updated.
     * Possible fields that could be updated are described in "Body Parameters"
     * @param collectionId Collection ID
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public updateRaindrops(
        collectionId: number,
        requestBody?: {
            ids?: Array<number>;
            /**
             * TRUE - mark as "favorite"
             *
             * FALSE - unmark as "favorite"
             */
            important?: boolean;
            /**
             * Will append specified tags to raindrops.
             * Or will remove all tags from raindrops if [] (empty array) is specified
             */
            tags?: Array<string>;
            media?: Array<string>;
            /**
             * Set URL for cover.
             * Tip: specify <screenshot> to set screenshots for all raindrops
             */
            cover?: string;
            /**
             * Specify {"$id": collectionId} to move raindrops to other collection
             */
            collection?: {
                $id?: number;
            };
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/v1/raindrops/{collectionId}',
            path: {
                'collectionId': collectionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove many raindrops
     * Specify optional search and/or ids parameters to limit raindrops that will be moved to "Trash"
     * When :collectionId is -99, raindrops will be permanently removed!
     * @param collectionId Collection ID
     * @param search
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public removeRaindrops(
        collectionId: number,
        search?: string,
        requestBody?: {
            ids?: Array<number>;
        },
    ): CancelablePromise<{
        result?: boolean;
        modified?: number;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/v1/raindrops/{collectionId}',
            path: {
                'collectionId': collectionId,
            },
            query: {
                'search': search,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create many raindrops
     * @param requestBody
     * @returns RaindropResponseMany Success
     * @throws ApiError
     */
    public createRaindrops(
        requestBody?: {
            /**
             * Array of objects. Format of single object described in "Create single raindrop".
             * Maximum 100 objects in array!
             */
            items?: Array<CreateRaindrop>;
        },
    ): CancelablePromise<RaindropResponseMany> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/v1/raindrops',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
