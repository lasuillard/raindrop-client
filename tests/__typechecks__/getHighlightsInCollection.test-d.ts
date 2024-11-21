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
				_id: "673f2df31ca8f97c20824b83",
				text: "ignore",
				note: "",
				created: "2024-11-21T12:56:19.886Z",
				raindropRef: 905659920,
			},
		],
	});
});
