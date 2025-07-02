import { assertType, it } from "vitest";
import type { GetSystemCollectionStatsResponse } from "~/generated/api";

it("getSystemCollectionStats", () => {
	assertType<GetSystemCollectionStatsResponse>({
		result: true,
		items: [
			{ _id: 0, count: 3 },
			{ _id: -1, count: 3 },
			{ _id: -99, count: 0 },
		],
		meta: {
			_id: 2067190,
			changedBookmarksDate: "2025-07-02T05:21:27.325Z",
			pro: false,
		},
	});
});
