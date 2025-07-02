import { assertType, it } from "vitest";
import type { CheckURLsExistResponse } from "~/generated/api";

it("checkURLsExist", () => {
	assertType<CheckURLsExistResponse>({
		result: true,
		ids: [1210213874],
		duplicates: [{ link: "https://raindrop.com", _id: 1210213874 }],
		id: 1210213874,
	});
});
