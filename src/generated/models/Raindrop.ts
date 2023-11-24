/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RaindropBase } from './RaindropBase';
import type { UserRef } from './UserRef';

export type Raindrop = (RaindropBase & {
    /**
     * Unique identifier
     */
    _id?: number;
    /**
     * Hostname of a link.
     * Files always have `raindrop.io` hostname
     */
    domain?: string;
    user?: UserRef;
    /**
     * Marked as broken (original link is not reachable anymore)
     */
    broken?: boolean;
    /**
     * Permanent copy (cached version) details
     */
    cache?: {
        /**
         * ready retry failed invalid-origin invalid-timeout or invalid-size
         */
        status?: Raindrop.status;
        /**
         * Full size in bytes
         */
        size?: number;
        /**
         * Date when copy is successfully made
         */
        created?: string;
    };
    /**
     * Sometime raindrop may belong to other user, not to the one who created it.
     * For example when this raindrop is created in shared collection by other user.
     * This object contains info about original author.
     */
    creatorRef?: {
        /**
         * Original author (user ID) of raindrop
         */
        _id?: number;
        /**
         * Original author name of a raindrop
         */
        fullName?: string;
    };
    /**
     * This raindrop uploaded from desktop
     * [Supported file formats](https://help.raindrop.io/article/48-uploading-files)
     */
    file?: {
        /**
         * File name
         */
        name?: string;
        /**
         * File size in bytes
         */
        size?: number;
        /**
         * Mime type
         */
        type?: string;
    };
});

export namespace Raindrop {

    /**
     * ready retry failed invalid-origin invalid-timeout or invalid-size
     */
    export enum status {
        READY = 'ready',
        RETRY = 'retry',
        FAILED = 'failed',
        INVALID_ORIGIN = 'invalid-origin',
        INVALID_TIMEOUT = 'invalid-timeout',
        INVALID_SIZE = 'invalid-size',
    }


}

