import { assertType, it } from "vitest";
import type { CheckURLsExistResponse } from "~/generated/api";

it("checkURLsExist", () => {
	assertType<CheckURLsExistResponse>({
		result: false,
		ids: [842212832],
		duplicates: [{ link: "https://raindrop.com", _id: 842212832 }],
		id: 842212832,
	});
});
