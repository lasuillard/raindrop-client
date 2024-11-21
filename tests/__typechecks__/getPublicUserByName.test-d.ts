import { assertType, it } from "vitest";
import type { GetPublicUserByNameResponse } from "~/generated/api";

it("getPublicUserByName", () => {
	assertType<GetPublicUserByNameResponse>("Unauthorized");
});
