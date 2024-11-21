import { assertType, it } from "vitest";
import type { ParseURLResponse } from "~/generated/api";

it("parseURL", () => {
	assertType<ParseURLResponse>("Unauthorized");
});
