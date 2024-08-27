import { assertType, it } from "vitest";
import type { GetFiltersResponse } from "~/generated/api";

it("getFilters", () => {
	assertType<GetFiltersResponse>({
		result: true,
		tags: [
			{ _id: "novel", count: 1 },
			{ _id: "science", count: 1 },
		],
		types: [{ _id: "link", count: 6 }],
		created: [{ _id: "2024-08", count: 6 }],
		total: { count: 6 },
		notag: { count: 5 },
		important: { count: 1 },
		collectionId: 0,
	});
});
