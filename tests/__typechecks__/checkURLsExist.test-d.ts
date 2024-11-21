import { assertType, it } from "vitest";
import type { CheckURLsExistResponse } from "~/generated/api";

it("checkURLsExist", () => {
	assertType<CheckURLsExistResponse>({
		result: false,
		ids: [905654732],
		duplicates: [{ link: "https://raindrop.com", _id: 905654732 }],
		id: 905654732,
	});
});
