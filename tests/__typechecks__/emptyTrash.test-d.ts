import { assertType, it } from "vitest";
import type { SimpleResponse } from "~/generated/api";

it("emptyTrash", () => {
	assertType<SimpleResponse>({ result: true });
});
