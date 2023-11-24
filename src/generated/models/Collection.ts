/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Parent } from './Parent';
import type { Sort } from './Sort';
import type { View } from './View';

export type Collection = {
    /**
     * The id of the collection.
     */
    _id?: number;
    access?: {
        /**
         * 1. read only access (equal to public=true)
         * 2. collaborator with read only access
         * 3. collaborator with write only access
         * 4. owner
         */
        level?: Collection.level;
        /**
         * Does it possible to change parent of this collection?
         */
        draggable?: boolean;
    };
    /**
     * When this object is present, means that collections is shared. Content of this object is private and not very useful.
     */
    collaborators?: {
        $id?: string;
    };
    /**
     * Primary color of collection cover as HEX
     */
    color?: string;
    /**
     * Count of raindrops in collection
     */
    count?: number;
    /**
     * Collection cover URL. This array always have one item due to legacy reasons
     */
    cover?: Array<string>;
    /**
     * When collection is created
     */
    created?: string;
    /**
     * Whether the collection’s sub-collections are expanded
     */
    expanded?: boolean;
    /**
     * When collection is updated
     */
    lastUpdate?: string;
    parent?: Parent;
    /**
     * Collection and raindrops that it contains will be accessible without authentication by public link
     */
    public?: boolean;
    sort?: Sort;
    /**
     * Name of the collection
     */
    title?: string;
    user?: {
        /**
         * Owner ID
         */
        $id?: number;
    };
    view?: View;
};

export namespace Collection {

    /**
     * 1. read only access (equal to public=true)
     * 2. collaborator with read only access
     * 3. collaborator with write only access
     * 4. owner
     */
    export enum level {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }


}

