import { assertType, it } from "vitest";
import type { GetFiltersResponse } from "~/generated/api";

it("getFilters", () => {
	assertType<GetFiltersResponse>({
		result: true,
		tags: [
			{ _id: "novel", count: 1 },
			{ _id: "science", count: 1 },
		],
		types: [{ _id: "link", count: 5 }],
		created: [{ _id: "2024-11", count: 5 }],
		total: { count: 5 },
		notag: { count: 4 },
		important: { count: 1 },
		highlights: { count: 1 },
		collectionId: 0,
	});
});
