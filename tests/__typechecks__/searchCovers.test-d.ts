import { assertType, it } from "vitest";
import type { SearchCoversResponse } from "~/generated/api";

it("searchCovers", () => {
	assertType<SearchCoversResponse>("Unauthorized");
});
