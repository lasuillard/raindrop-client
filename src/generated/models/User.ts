/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Group } from './Group';
import type { MD5 } from './MD5';
import type { UserConfig } from './UserConfig';

export type User = {
    _id?: number;
    config?: UserConfig;
    dropbox?: {
        enabled?: boolean;
    };
    email?: string;
    email_MD5?: MD5;
    files?: {
        used?: number;
        size?: number;
        lastCheckPoint?: string;
    };
    fullName?: string;
    gdrive?: {
        enabled?: boolean;
    };
    groups?: Array<Group>;
    password?: boolean;
    pro?: boolean;
    proExpire?: string;
    registered?: string;
};

