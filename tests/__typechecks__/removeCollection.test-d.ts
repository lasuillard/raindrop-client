import { assertType, it } from "vitest";
import type { SimpleResponse } from "~/generated/api";

it("removeCollection", () => {
	assertType<SimpleResponse>({ result: true });
});
