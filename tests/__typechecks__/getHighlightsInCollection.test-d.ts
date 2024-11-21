import { assertType, it } from "vitest";
import type { GetHighlightsInCollectionResponse } from "~/generated/api";

it("getHighlightsInCollection", () => {
	assertType<GetHighlightsInCollectionResponse>({
		result: true,
		items: [
			{
				link: "https://raindrop.io",
				title: "getHighlightsInCollection",
				tags: [],
				_id: "673f2591a4d8c1f56caf6258",
				text: "ignore",
				note: "",
				created: "2024-11-21T12:20:33.198Z",
				raindropRef: 905641110,
			},
		],
	});
});
