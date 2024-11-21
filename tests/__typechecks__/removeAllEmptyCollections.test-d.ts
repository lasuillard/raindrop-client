import { assertType, it } from "vitest";
import type { RemoveAllEmptyCollectionsResponse } from "~/generated/api";

it("removeAllEmptyCollections", () => {
	assertType<RemoveAllEmptyCollectionsResponse>("Unauthorized");
});
