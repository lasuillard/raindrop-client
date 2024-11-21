import { assertType, it } from "vitest";
import type { GetFeaturedCoversResponse } from "~/generated/api";

it("getFeaturedCovers", () => {
	assertType<GetFeaturedCoversResponse>("Unauthorized");
});
