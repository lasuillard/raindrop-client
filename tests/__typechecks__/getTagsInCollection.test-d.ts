import { assertType, it } from "vitest";
import type { GetTagsInCollectionResponse } from "~/generated/api";

it("getTagsInCollection", () => {
	assertType<GetTagsInCollectionResponse>({ result: true, items: [] });
});
