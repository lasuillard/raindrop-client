import { assertType, it } from "vitest";
import type { GetFiltersResponse } from "~/generated/api";

it("getFilters", () => {
	assertType<GetFiltersResponse>({
		result: true,
		tags: [
			{ _id: "novel", count: 1 },
			{ _id: "science", count: 1 },
		],
		types: [{ _id: "link", count: 3 }],
		created: [{ _id: "2024-06", count: 3 }],
		total: { count: 3 },
		notag: { count: 2 },
		important: { count: 1 },
		collectionId: 0,
	});
});
