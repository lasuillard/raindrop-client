/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImportFileResponse } from '../models/ImportFileResponse';
import type { Response } from '../models/Response';
import type { UrlParseErrorResponse } from '../models/UrlParseErrorResponse';
import type { UrlParseResponse } from '../models/UrlParseResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ImportService {

    /**
     * Parse URL
     * Parse and extract useful info from any URL
     * @param url URL
     * @returns any Success
     * @throws ApiError
     */
    public static getRestV1ImportUrlParse(
        url?: string,
    ): CancelablePromise<(UrlParseResponse | UrlParseErrorResponse)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rest/v1/import/url/parse',
            query: {
                'url': url,
            },
        });
    }

    /**
     * Check URL(s) existence
     * Does specified URL's are already saved?
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postRestV1ImportUrlExists(
        requestBody?: {
            urls?: Array<string>;
        },
    ): CancelablePromise<Response> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rest/v1/import/url/exists',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Parse HTML import file
     * Convert HTML bookmark file to JSON.
     *
     * Support Nestcape, Pocket and Instapaper file formats
     * @param formData
     * @returns ImportFileResponse Success
     * @throws ApiError
     */
    public static postRestV1ImportFile(
        formData?: {
            /**
             * File
             */
            import?: Blob;
        },
    ): CancelablePromise<ImportFileResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rest/v1/import/file',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
