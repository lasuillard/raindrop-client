import { assertType, it } from "vitest";
import type { GetCurrentUserResponse } from "~/generated/api";

it("getCurrentUser", () => {
	assertType<GetCurrentUserResponse>("Unauthorized");
});
