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
				_id: "66cdb55bcb6eb38786256474",
				text: "ignore",
				note: "",
				created: "2024-08-27T11:15:39.744Z",
				raindropRef: 842212836,
			},
		],
	});
});
