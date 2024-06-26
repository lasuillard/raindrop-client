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
				_id: "667bffbf93ba20be0a4dec3d",
				text: "ignore",
				note: "",
				created: "2024-06-26T11:47:11.835Z",
				raindropRef: 807056016,
			},
		],
	});
});
