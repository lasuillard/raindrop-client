import raindropResponse from '^/tests/fixtures/raindrops.json';
import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Configuration, Raindrop, RaindropApi as _RaindropApi } from '~/generated';

export interface GetAllRaindropsParams {
	/** Sort option. See https://developer.raindrop.io/v1/raindrops/multiple#common-parameters */
	sort?: string;

	/** Size of per page to fetch. Maximum 50 limited by Raindrop.io */
	pageSize?: number;

	/** Search query. See details at https://help.raindrop.io/using-search/ */
	search?: string;
}

export class RaindropApi extends _RaindropApi {
	/**
	 * Fetch all raindrops of a collection.
	 * @param collectionId ID of collection.
	 * @param params Request parameters.
	 * @param options Axios request config.
	 * @returns Array of raindrops.
	 */
	async getAllRaindrops(
		collectionId?: number,
		params?: GetAllRaindropsParams,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		options?: AxiosRequestConfig<any>
	): Promise<Raindrop[]> {
		const collection = collectionId ?? 0; // System collection for ALL
		const sort = params?.sort ?? '';
		const pageSize = params?.pageSize ?? 50;
		const search = params?.search ?? '';
		const { data: head } = await this.getRaindrops(collection, sort, pageSize, 0, search, options);

		// Calculate how many should iterate over from first head response, using `$.count` value
		const count = head.count;
		const maxPage = Math.ceil(count / pageSize);

		// Range of pages
		const pageNums = Array.from(Array(maxPage).keys());
		pageNums.shift(); // But without head already fetched

		const results = await Promise.all(
			pageNums.map((page) =>
				this.getRaindrops(collection, sort, pageSize, page, search, options).then(
					({ data }) => data
				)
			)
		);

		// Concatenate all items
		const items = [...head.items];
		for (const data of results) {
			items.push(...data.items);
		}

		return items;
	}
}

/* c8 ignore start */
if (import.meta.vitest) {
	const { describe, expect, it, afterEach } = import.meta.vitest;

	// Mocks
	const mockAxios = new MockAdapter(axios, { onNoMatch: 'throwException' });
	const mockPaginatedResponse = (page: number, pageSize: number) => {
		return {
			...raindropResponse,
			items: raindropResponse.items.slice(page * pageSize, (page + 1) * pageSize)
		};
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const getParams = (url: string) => Object.fromEntries(new URL(url).searchParams.entries());

	const raindropApi = new RaindropApi(new Configuration(), undefined, axios);

	afterEach(() => {
		mockAxios.resetHandlers();
		mockAxios.resetHistory();
	});

	describe(raindropApi.getAllRaindrops, () => {
		it('fetch full pagination results', async () => {
			mockAxios.onGet(/https:\/\/api\.raindrop\.io\/rest\/v1\/raindrops\/0/).reply((config) => {
				const params = getParams(config.url ?? '');
				expect(params).toEqual({
					sort: '',
					perpage: '1',
					page: expect.any(String),
					search: ''
				});
				const response = mockPaginatedResponse(parseInt(params.page), 1);
				return [200, response];
			});
			const result = await raindropApi.getAllRaindrops(0, { pageSize: 1 });
			expect(mockAxios.history.get.length).toBe(5);
			expect(result).toHaveLength(5);
			expect(result).toEqual(raindropResponse.items);
		});

		it('single page size', async () => {
			mockAxios.onGet(/https:\/\/api\.raindrop\.io\/rest\/v1\/raindrops\/0/).reply((config) => {
				const params = getParams(config.url ?? '');
				expect(params).toEqual({
					sort: '',
					perpage: '5',
					page: '0',
					search: ''
				});
				return [200, mockPaginatedResponse(0, 5)];
			});
			const result = await raindropApi.getAllRaindrops(0, { pageSize: 5 });
			expect(mockAxios.history.get.length).toBe(1);
			expect(result).toEqual(raindropResponse.items);
		});

		it('collection not found', () => {
			mockAxios
				.onGet(/https:\/\/api\.raindrop\.io\/rest\/v1\/raindrops\/35947374/)
				.reply((config) => {
					const params = getParams(config.url ?? '');
					expect(params).toEqual({
						sort: '',
						perpage: '50',
						page: '0',
						search: ''
					});
					return [
						403,
						{
							result: false,
							status: 403,
							errorMessage: 'collection 35947374 not found',
							access: false
						}
					];
				});
			expect(raindropApi.getAllRaindrops(35947374)).rejects.toThrowError(
				'Request failed with status code 403'
			);
		});
	});
}
/* c8 ignore stop */
