/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionID } from '../models/CollectionID';
import type { CollectionMultiResponse } from '../models/CollectionMultiResponse';
import type { CollectionSingleResponse } from '../models/CollectionSingleResponse';
import type { CoverResponse } from '../models/CoverResponse';
import type { CreateCollection } from '../models/CreateCollection';
import type { EmptyResponse } from '../models/EmptyResponse';
import type { Role } from '../models/Role';
import type { SortBy } from '../models/SortBy';
import type { StatResponse } from '../models/StatResponse';
import type { UpdateCollection } from '../models/UpdateCollection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CollectionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get root collections
     * Returns JSON-encoded array containing all root collections.
     * @returns CollectionMultiResponse Success
     * @throws ApiError
     */
    public getRootCollections(): CancelablePromise<CollectionMultiResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/v1/collections',
        });
    }

    /**
     * Reorder all collections
     * Updates order of all collections
     * @param requestBody
     * @returns EmptyResponse Success
     * @throws ApiError
     */
    public reorderAllCollections(
        requestBody?: ({
            sort?: SortBy;
        } | {
            /**
             * TRUE = expand all
             *
             * FALSE = collapse all
             */
            expanded?: boolean;
        }),
    ): CancelablePromise<EmptyResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/v1/collections',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove multiple collections
     * Remove multiple collections at once.
     *
     * Nested collections are ignored (include ID's in ids array to remove them)
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public removeCollections(
        requestBody?: {
            ids?: Array<CollectionID>;
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/v1/collections',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get child collections
     * Returns JSON-encoded array containing all nested collections (that have positive `parent.$id`)
     * @returns CollectionMultiResponse Success
     * @throws ApiError
     */
    public getChildCollections(): CancelablePromise<CollectionMultiResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/v1/collections/childrens',
        });
    }

    /**
     * Get collection
     * @param id Collection ID
     * @returns CollectionSingleResponse Success
     * @throws ApiError
     */
    public getCollection(
        id: CollectionID,
    ): CancelablePromise<CollectionSingleResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/v1/collection/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update collection
     * Update an existing collection
     * @param id Collection ID
     * @param requestBody
     * @returns CollectionSingleResponse Success
     * @throws ApiError
     */
    public updateCollection(
        id: CollectionID,
        requestBody?: UpdateCollection,
    ): CancelablePromise<CollectionSingleResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/v1/collection/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove collection
     * Remove an existing collection and all its descendants.
     *
     * Raindrops will be moved to "Trash" collection
     * @param id Collection ID
     * @returns EmptyResponse Success
     * @throws ApiError
     */
    public removeCollection(
        id: CollectionID,
    ): CancelablePromise<EmptyResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/v1/collection/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create collection
     * Create a new collection
     * @param requestBody
     * @returns CollectionSingleResponse Success
     * @throws ApiError
     */
    public createCollection(
        requestBody?: CreateCollection,
    ): CancelablePromise<CollectionSingleResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/v1/collection',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Incorrect 'view' field value`,
            },
        });
    }

    /**
     * Upload cover
     * It's possible to upload cover from desktop. PNG, GIF and JPEG supported
     * @param id Existing collection ID
     * @param formData
     * @returns CollectionSingleResponse Success
     * @throws ApiError
     */
    public uploadCollectionCover(
        id: CollectionID,
        formData?: {
            cover?: Blob;
        },
    ): CancelablePromise<CollectionSingleResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/v1/collections/{id}/cover',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Merge collections
     * Merge multiple collections
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public mergeCollections(
        requestBody?: {
            to?: CollectionID;
            ids?: Array<CollectionID>;
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/v1/collections/merge',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove all empty collections
     * @returns any Success
     * @throws ApiError
     */
    public removeAllEmptyCollections(): CancelablePromise<{
        result?: boolean;
        count?: number;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/v1/collections/clean',
        });
    }

    /**
     * Empty Trash
     * @returns EmptyResponse Success
     * @throws ApiError
     */
    public emptyTrash(): CancelablePromise<EmptyResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/v1/collection/-99',
        });
    }

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
     * Get collaborators list of collection
     * @param id Existing collection ID
     * @returns any Success
     * @throws ApiError
     */
    public getCollaborators(
        id: CollectionID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/v1/collections/{id}/sharing',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Share collection
     * Share collection with another user(s). As result invitation(s) will be send to specified email(s) with link to join collection.
     * @param id Existing collection ID
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public shareCollection(
        id: CollectionID,
        requestBody?: {
            role?: Role;
            /**
             * The user email(s) with whom to share the project.
             *
             * Maximum 10
             */
            emails?: Array<string>;
        },
    ): CancelablePromise<{
        result?: boolean;
        emails?: Array<string>;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/v1/collections/{id}/sharing',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                403: `Unauthorized`,
            },
        });
    }

    /**
     * Unshare or leave collection
     * There two possible results of calling this method, depends on who authenticated user is:
     * - Owner: collection will be unshared and all collaborators will be removed
     * - Member or viewer: authenticated user will be removed from collaborators list
     * @param id Existing collection ID
     * @returns EmptyResponse Success
     * @throws ApiError
     */
    public unshareOrLeaveCollection(
        id: CollectionID,
    ): CancelablePromise<EmptyResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/v1/collections/{id}/sharing',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Change access level of collaborator
     * @param userId User ID of collaborator
     * @param id Existing collection ID
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public changeCollaboratorAccessLevel(
        userId: number,
        id: CollectionID,
        requestBody?: {
            role?: Role;
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/v1/collections/{id}/sharing/{userId}',
            path: {
                'userId': userId,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a collaborator
     * Remove an user from shared collection
     * @param userId User ID of collaborator
     * @param id Existing collection ID
     * @returns EmptyResponse Success
     * @throws ApiError
     */
    public deleteCollaborator(
        userId: number,
        id: CollectionID,
    ): CancelablePromise<EmptyResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/v1/collections/{id}/sharing/{userId}',
            path: {
                'userId': userId,
                'id': id,
            },
        });
    }

    /**
     * Accept an invitation
     * Accept an invitation to join a shared collection
     * @param id Existing collection
     * @returns any Success
     * @throws ApiError
     */
    public acceptInvitation(
        id: CollectionID,
    ): CancelablePromise<{
        result?: boolean;
        role?: Role;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/v1/collections/{id}/join',
            path: {
                'id': id,
            },
            errors: {
                403: `Unauthorized`,
            },
        });
    }

    /**
     * Search for cover
     * Search for specific cover (icon)
     * @param text For example "pokemon"
     * @returns CoverResponse Success
     * @throws ApiError
     */
    public searchCovers(
        text: string,
    ): CancelablePromise<CoverResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/v1/collections/covers/{text}',
            path: {
                'text': text,
            },
        });
    }

    /**
     * Featured covers
     * @returns CoverResponse Success
     * @throws ApiError
     */
    public getFeaturedCovers(): CancelablePromise<CoverResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/v1/collections/covers',
        });
    }

}
