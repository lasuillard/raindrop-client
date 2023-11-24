/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionRef } from './CollectionRef';
import type { Highlight } from './Highlight';

export type RaindropBase = {
    created?: string;
    lastUpdate?: string;
    /**
     * Specify sort order (ascending).
     *
     * For example if you want to move raindrop to the first place set this field to 0
     */
    order?: number;
    /**
     * Marked as "favorite"
     */
    important?: boolean;
    /**
     * Tags list
     */
    tags?: Array<string>;
    media?: Array<{
        link?: string;
    }>;
    cover?: string;
    collection?: CollectionRef;
    type?: string;
    excerpt?: string;
    title?: string;
    link?: string;
    highlights?: Array<Highlight>;
};

