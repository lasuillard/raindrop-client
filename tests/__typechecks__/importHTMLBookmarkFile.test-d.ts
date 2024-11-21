import { assertType, it } from "vitest";
import type { ImportHTMLBookmarkFileResponse } from "~/generated/api";

it("importHTMLBookmarkFile", () => {
	assertType<ImportHTMLBookmarkFileResponse>("Unauthorized");
});
