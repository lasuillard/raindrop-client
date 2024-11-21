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
				_id: "673f2ada34bf74da17f7cfa0",
				text: "ignore",
				note: "",
				created: "2024-11-21T12:43:06.482Z",
				raindropRef: 905651347,
			},
		],
	});
});
