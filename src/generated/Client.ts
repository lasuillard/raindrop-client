/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AuthenticationService } from './services/AuthenticationService';
import { CollectionService } from './services/CollectionService';
import { FilterService } from './services/FilterService';
import { HighlightService } from './services/HighlightService';
import { ImportService } from './services/ImportService';
import { RaindropService } from './services/RaindropService';
import { TagService } from './services/TagService';
import { UserService } from './services/UserService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class Client {

    public readonly authentication: AuthenticationService;
    public readonly collection: CollectionService;
    public readonly filter: FilterService;
    public readonly highlight: HighlightService;
    public readonly import: ImportService;
    public readonly raindrop: RaindropService;
    public readonly tag: TagService;
    public readonly user: UserService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.raindrop.io',
            VERSION: config?.VERSION ?? '0.1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.authentication = new AuthenticationService(this.request);
        this.collection = new CollectionService(this.request);
        this.filter = new FilterService(this.request);
        this.highlight = new HighlightService(this.request);
        this.import = new ImportService(this.request);
        this.raindrop = new RaindropService(this.request);
        this.tag = new TagService(this.request);
        this.user = new UserService(this.request);
    }
}

