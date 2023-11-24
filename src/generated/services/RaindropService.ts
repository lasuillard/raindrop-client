/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRaindrop } from '../models/CreateRaindrop';
import type { EmptyResponse } from '../models/EmptyResponse';
import type { RaindropMultiResponse } from '../models/RaindropMultiResponse';
import type { RaindropSingleResponse } from '../models/RaindropSingleResponse';
import type { SuggestResponse } from '../models/SuggestResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RaindropService {

    /**
     * Create raindrop
     * @param requestBody
     * @returns RaindropSingleResponse Success
     * @throws ApiError
     */
    public static postRestV1Raindrop(
        requestBody?: CreateRaindrop,
    ): CancelablePromise<RaindropSingleResponse> {
        return __request(OpenAPI, {
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
    public static getRestV1Raindrop(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static putRestV1Raindrop(
        id: number,
        requestBody?: CreateRaindrop,
    ): CancelablePromise<RaindropSingleResponse> {
        return __request(OpenAPI, {
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
     * @returns EmptyResponse Success
     * @throws ApiError
     */
    public static deleteRestV1Raindrop(
        id: number,
    ): CancelablePromise<EmptyResponse> {
        return __request(OpenAPI, {
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
     * @returns RaindropSingleResponse Success
     * @throws ApiError
     */
    public static putRestV1RaindropFile(
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
    ): CancelablePromise<RaindropSingleResponse> {
        return __request(OpenAPI, {
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
     * @returns RaindropSingleResponse Success
     * @throws ApiError
     */
    public static putRestV1RaindropCover(
        id: number,
        formData?: {
            /**
             * File
             */
            cover?: Blob;
        },
    ): CancelablePromise<RaindropSingleResponse> {
        return __request(OpenAPI, {
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
    public static getRestV1RaindropCache(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static postRestV1RaindropSuggest(
        requestBody?: {
            link?: string;
        },
    ): CancelablePromise<SuggestResponse> {
        return __request(OpenAPI, {
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
    public static getRestV1RaindropSuggest(
        id: number,
    ): CancelablePromise<SuggestResponse> {
        return __request(OpenAPI, {
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
    public static getRestV1Raindrops(
        collectionId: number,
        sort?: string,
        perpage?: string,
        page?: string,
        search?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static putRestV1Raindrops(
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
        return __request(OpenAPI, {
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
    public static deleteRestV1Raindrops(
        collectionId: number,
        search?: string,
        requestBody?: {
            ids?: Array<number>;
        },
    ): CancelablePromise<{
        result?: boolean;
        modified?: number;
    }> {
        return __request(OpenAPI, {
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
     * @returns RaindropMultiResponse Success
     * @throws ApiError
     */
    public static postRestV1Raindrops(
        requestBody?: {
            /**
             * Array of objects. Format of single object described in "Create single raindrop".
             * Maximum 100 objects in array!
             */
            items?: Array<CreateRaindrop>;
        },
    ): CancelablePromise<RaindropMultiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rest/v1/raindrops',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}