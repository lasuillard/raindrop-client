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
				_id: "673f259036e99724da569c4e",
				text: "ignore",
				note: "",
				created: "2024-11-21T12:20:32.072Z",
				raindropRef: 905641076,
			},
		],
	});
});
