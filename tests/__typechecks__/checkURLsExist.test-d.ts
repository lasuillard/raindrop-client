import { assertType, it } from "vitest";
import type { CheckURLsExistResponse } from "~/generated/api";

it("checkURLsExist", () => {
	assertType<CheckURLsExistResponse>({
		result: false,
		ids: [905640659],
		duplicates: [{ link: "https://raindrop.com", _id: 905640659 }],
		id: 905640659,
	});
});
