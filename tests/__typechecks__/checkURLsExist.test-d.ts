import { assertType, it } from "vitest";
import type { CheckURLsExistResponse } from "~/generated/api";

it("checkURLsExist", () => {
	assertType<CheckURLsExistResponse>({
		result: false,
		ids: [905659792],
		duplicates: [{ link: "https://raindrop.com", _id: 905659792 }],
		id: 905659792,
	});
});
