import { assertType, it } from "vitest";
import type { GetSystemCollectionStatsResponse } from "~/generated/api";

it("getSystemCollectionStats", () => {
	assertType<GetSystemCollectionStatsResponse>({
		result: true,
		items: [
			{ _id: 0, count: 12 },
			{ _id: -1, count: 7 },
			{ _id: -99, count: 0 },
		],
		meta: {
			_id: 2067190,
			changedBookmarksDate: "2024-11-21T12:49:07.227Z",
			pro: false,
		},
	});
});
