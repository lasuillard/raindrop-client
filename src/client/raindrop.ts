import type { AxiosRequestConfig } from "axios";
import {
	RaindropApi as _RaindropApi,
	type GetRaindropsResponse,
} from "~/generated";

type RaindropItem = GetRaindropsResponse["items"][0];

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
		// biome-ignore lint/suspicious/noExplicitAny: Autogenerated code
		options?: AxiosRequestConfig<any>,
	): Promise<RaindropItem[]> {
		const collection = collectionId ?? 0; // System collection for ALL
		const sort = params?.sort ?? "";
		const pageSize = params?.pageSize ?? 50;
		const search = params?.search ?? "";
		const { data: head } = await this.getRaindrops(
			collection,
			sort,
			pageSize,
			0,
			search,
			options,
		);

		// Calculate how many should iterate over from first head response, using `$.count` value
		const count = head.count;
		const maxPage = Math.ceil(count / pageSize);

		// Range of pages
		const pageNums = Array.from(Array(maxPage).keys());
		pageNums.shift(); // But without head already fetched

		const results = await Promise.all(
			pageNums.map((page) =>
				this.getRaindrops(
					collection,
					sort,
					pageSize,
					page,
					search,
					options,
				).then(({ data }) => data),
			),
		);

		// Concatenate all items
		const items = [...head.items];
		for (const data of results) {
			items.push(...data.items);
		}

		return items;
	}
}
