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
				_id: "673f2adbb940b43ca82a1f4f",
				text: "ignore",
				note: "",
				created: "2024-11-21T12:43:07.216Z",
				raindropRef: 905651352,
			},
		],
	});
});
