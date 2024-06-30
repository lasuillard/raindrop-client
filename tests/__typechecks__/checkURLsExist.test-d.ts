import { assertType, it } from "vitest";
import type { CheckURLsExistResponse } from "~/generated/api";

it("checkURLsExist", () => {
	assertType<CheckURLsExistResponse>({
		result: true,
		ids: [807603868],
		duplicates: [{ _id: 807603868, link: "https://raindrop.com" }],
		id: 807603868,
	});
});
