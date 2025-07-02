import { assertType, it } from "vitest";
import type { RemoveCollectionsResponse } from "~/generated/api";

it("removeCollections", () => {
	assertType<RemoveCollectionsResponse>({
		result: true,
		modified: 1,
		ids: [57170528],
	});
});
