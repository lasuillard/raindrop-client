import { assertType, it } from "vitest";
import type { GetSystemCollectionStatsResponse } from "~/generated/api";

it("getSystemCollectionStats", () => {
	assertType<GetSystemCollectionStatsResponse>({
		result: true,
		items: [
			{ _id: 0, count: 9 },
			{ _id: -1, count: 4 },
			{ _id: -99, count: 0 },
		],
		meta: {
			_id: 2067190,
			changedBookmarksDate: "2024-11-21T12:20:42.881Z",
			pro: false,
		},
	});
});
