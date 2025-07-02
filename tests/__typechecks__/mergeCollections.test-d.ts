import { assertType, it } from "vitest";
import type { MergeCollectionsResponse } from "~/generated/api";

it("mergeCollections", () => {
	assertType<MergeCollectionsResponse>({
		result: true,
		modified: 2,
		ids: [57170537, 57170538],
	});
});
