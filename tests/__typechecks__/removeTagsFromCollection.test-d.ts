import { assertType, it } from "vitest";
import type { SimpleResponse } from "~/generated/api";

it("removeTagsFromCollection", () => {
	assertType<SimpleResponse>({ result: true });
});
