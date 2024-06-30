import { assertType, it } from "vitest";
import type { SimpleResponse } from "~/generated/api";

it("renameOrMergeTags", () => {
	assertType<SimpleResponse>({ result: true });
});
