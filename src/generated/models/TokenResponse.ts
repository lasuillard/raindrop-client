/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TokenResponse = {
    /**
     * API access token
     */
    access_token?: string;
    /**
     * Token used to refresh access token
     */
    refresh_token?: string;
    /**
     * Remaining time until access token expires, in miliseconds
     * @deprecated
     */
    expires?: number;
    /**
     * Reamining time until access token expires, in seconds
     */
    expires_in?: number;
    /**
     * Type of token
     */
    token_type?: TokenResponse.token_type;
};

export namespace TokenResponse {

    /**
     * Type of token
     */
    export enum token_type {
        BEARER = 'Bearer',
    }


}

