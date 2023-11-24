/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RefreshToken = {
    /**
     * Unique client ID of your Raindrop.io app
     */
    client_id?: string;
    /**
     * Client secret of your Raindrop.io app
     */
    client_secret?: string;
    /**
     * Grant type
     */
    grant_type?: RefreshToken.grant_type;
    /**
     * Refresh token received when obtain access token
     */
    refresh_token?: string;
};

export namespace RefreshToken {

    /**
     * Grant type
     */
    export enum grant_type {
        REFRESH_TOKEN = 'refresh_token',
    }


}

