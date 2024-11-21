import { assertType, it } from "vitest";
import type { UpdateCurrentUserResponse } from "~/generated/api";

it("updateCurrentUser", () => {
	assertType<UpdateCurrentUserResponse>("Unauthorized");
});
