import { assertType, it } from "vitest";
import type { GetSystemCollectionStatsResponse } from "~/generated/api";

it("getSystemCollectionStats", () => {
	assertType<GetSystemCollectionStatsResponse>({
		result: true,
		items: [
			{ _id: 0, count: 0 },
			{ _id: -1, count: 0 },
			{ _id: -99, count: 0 },
		],
		meta: {
			_id: 2067190,
			changedBookmarksDate: "2024-06-25T12:10:22.598Z",
			pro: false,
		},
	});
});
