import { assertType, it } from "vitest";
import type { CheckURLsExistResponse } from "~/generated/api";

it("checkURLsExist", () => {
	assertType<CheckURLsExistResponse>({
		result: false,
		ids: [905651300],
		duplicates: [{ link: "https://raindrop.com", _id: 905651300 }],
		id: 905651300,
	});
});
