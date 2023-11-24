/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StatResponse = {
    items?: Array<{
        _id?: number;
        count?: number;
    }>;
    meta?: {
        pro?: boolean;
        _id?: number;
        changedBookmarksDate?: string;
        duplicates?: {
            count?: number;
        };
        broken?: {
            count?: number;
        };
    };
    result?: boolean;
};

