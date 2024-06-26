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
				_id: "667bfe8cddad52514990e6ba",
				text: "ignore",
				note: "",
				created: "2024-06-26T11:42:04.598Z",
				raindropRef: 807050709,
			},
		],
	});
});
