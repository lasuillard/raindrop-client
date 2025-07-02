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
				_id: "6864c1ced3dc6ebeda262507",
				text: "ignore",
				note: "",
				created: "2025-07-02T05:21:18.759Z",
				raindropRef: 1210213904,
			},
		],
	});
});
