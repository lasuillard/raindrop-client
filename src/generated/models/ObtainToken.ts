/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ObtainToken = {
    /**
     * Grant type
     */
    grant_type?: ObtainToken.grant_type;
    /**
     * Received authorization code
     */
    code?: string;
    /**
     * Unique client ID of your Raindrop.io app
     */
    client_id?: string;
    /**
     * Client secret of your Raindrop.io app
     */
    client_secret?: string;
    /**
     * Redirect URI registered at your Raindrop.io app
     */
    redirect_uri?: string;
};

export namespace ObtainToken {

    /**
     * Grant type
     */
    export enum grant_type {
        AUTHORIZATION_CODE = 'authorization_code',
    }


}

