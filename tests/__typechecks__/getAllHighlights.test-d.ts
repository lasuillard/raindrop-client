import { assertType, it } from "vitest";
import type { GetAllHighlightsResponse } from "~/generated/api";

it("getAllHighlights", () => {
	assertType<GetAllHighlightsResponse>({
		result: true,
		items: [
			{
				link: "https://raindrop.io",
				title: "getAllHighlights",
				tags: [],
				_id: "6864c37275bcdcd7ff5d2356",
				text: "ignore",
				note: "",
				created: "2025-07-02T05:28:18.391Z",
				raindropRef: 1210217494,
			},
		],
	});
});
