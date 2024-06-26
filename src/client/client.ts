import axios, { type AxiosInstance } from "axios";
import {
	Configuration,
	FilterApi,
	HighlightApi,
	ImportApi,
	TagApi,
	UserApi,
} from "~/generated";
import { AuthenticationApi } from "./auth";
import { CollectionApi } from "./collection";
import { RaindropApi } from "./raindrop";

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
