import { assertType, it } from "vitest";
import type { GetTagsInCollectionResponse } from "~/generated/api";

it("getTagsInCollection", () => {
	assertType<GetTagsInCollectionResponse>({
		result: true,
		items: [
			{ _id: "bread", count: 1 },
			{ _id: "salad", count: 1 },
			{ _id: "soup", count: 1 },
		],
	});
});
