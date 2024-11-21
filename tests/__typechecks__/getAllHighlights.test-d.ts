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
				_id: "673f2df2a4d8c1f56cb08df2",
				text: "ignore",
				note: "",
				created: "2024-11-21T12:56:18.517Z",
				raindropRef: 905659899,
			},
		],
	});
});
