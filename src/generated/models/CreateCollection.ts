/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Parent } from './Parent';
import type { Sort } from './Sort';
import type { View } from './View';

export type CreateCollection = {
    view?: View;
    /**
     * Name of the collection
     */
    title?: string;
    sort?: Sort;
    /**
     * Collection and raindrops that it contains will be accessible without authentication?
     */
    public?: boolean;
    parent?: Parent;
    cover?: Array<string>;
};

