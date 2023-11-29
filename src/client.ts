import axios, { AxiosInstance } from 'axios';
import {
	AuthenticationApi,
	CollectionApi,
	Configuration,
	FilterApi,
	HighlightApi,
	ImportApi,
	RaindropApi,
	TagApi,
	UserApi
} from './generated';

/**
 * Raindrop API set.
 *
 * You can provide auth credentials via `new Configuration({accessToken: ...})` or headers in Axios instances.
 */
export class Raindrop {
	/** Axios client instance. If not set, will use default Axios instance. */
	public readonly client: AxiosInstance;

	/** API global configurations. */
	public readonly configuration: Configuration;

	// API namespaces
	public readonly auth: AuthenticationApi;
	public readonly user: UserApi;
	public readonly collection: CollectionApi;
	public readonly filter: FilterApi;
	public readonly highlight: HighlightApi;
	public readonly import: ImportApi;
	public readonly raindrop: RaindropApi;
	public readonly tag: TagApi;

	constructor(configuration?: Configuration, client?: AxiosInstance) {
		this.client = client ?? axios;
		this.configuration = configuration ?? new Configuration();
		this.auth = new AuthenticationApi(configuration, undefined, this.client);
		this.collection = new CollectionApi(configuration, undefined, this.client);
		this.filter = new FilterApi(configuration, undefined, this.client);
		this.highlight = new HighlightApi(configuration, undefined, this.client);
		this.import = new ImportApi(configuration, undefined, this.client);
		this.raindrop = new RaindropApi(configuration, undefined, this.client);
		this.tag = new TagApi(configuration, undefined, this.client);
		this.user = new UserApi(configuration, undefined, this.client);
	}
}

/* c8 ignore start */
if (import.meta.vitest) {
	const { expect, it } = import.meta.vitest;

	it('should instantiate', () => {
		const rd = new Raindrop();
		expect(rd).toBeTruthy();
	});
}
/* c8 ignore stop */
