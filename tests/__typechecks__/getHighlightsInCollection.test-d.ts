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
				_id: "66cdb55c745d10c2e0842711",
				text: "ignore",
				note: "",
				created: "2024-08-27T11:15:40.851Z",
				raindropRef: 842212840,
			},
		],
	});
});
