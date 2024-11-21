import { assertType, it } from "vitest";
import type { ParseURLResponse } from "~/generated/api";

it("parseURL", () => {
	assertType<ParseURLResponse>({
		result: true,
		item: {
			title: "Example Domain",
			excerpt: "",
			cover: "<screenshot>",
			media: [],
			type: "link",
			meta: { tags: [] },
		},
	});
});
