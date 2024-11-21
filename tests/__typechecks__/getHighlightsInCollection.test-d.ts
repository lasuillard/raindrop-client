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
				_id: "673f2c3b6f9ab341f89ddf8d",
				text: "ignore",
				note: "",
				created: "2024-11-21T12:48:59.344Z",
				raindropRef: 905654778,
			},
		],
	});
});
