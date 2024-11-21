import { assertType, it } from "vitest";
import type { MergeCollectionsResponse } from "~/generated/api";

it("mergeCollections", () => {
	assertType<MergeCollectionsResponse>({
		result: true,
		modified: 2,
		ids: [49869434, 49869435],
	});
});
