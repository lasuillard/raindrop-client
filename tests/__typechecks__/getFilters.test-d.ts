import { assertType, it } from "vitest";
import type { GetFiltersResponse } from "~/generated/api";

it("getFilters", () => {
	assertType<GetFiltersResponse>({
		result: true,
		tags: [
			{ _id: "novel", count: 1 },
			{ _id: "science", count: 1 },
		],
		types: [
			{ _id: "link", count: 6 },
			{ _id: "image", count: 1 },
		],
		created: [{ _id: "2024-11", count: 7 }],
		total: { count: 7 },
		notag: { count: 6 },
		important: { count: 1 },
		file: { count: 1 },
		highlights: { count: 2 },
		collectionId: 0,
	});
});
