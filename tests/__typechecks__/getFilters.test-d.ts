import { assertType, it } from "vitest";
import type { GetFiltersResponse } from "~/generated/api";

it("getFilters", () => {
	assertType<GetFiltersResponse>({
		result: true,
		tags: [
			{ _id: "novel", count: 1 },
			{ _id: "science", count: 1 },
		],
		types: [{ _id: "link", count: 4 }],
		created: [{ _id: "2024-11", count: 4 }],
		total: { count: 4 },
		notag: { count: 3 },
		important: { count: 1 },
		highlights: { count: 1 },
		collectionId: 0,
	});
});
