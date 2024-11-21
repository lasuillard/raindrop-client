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
				_id: "673f2c3a4943f7411fc613b6",
				text: "ignore",
				note: "",
				created: "2024-11-21T12:48:58.258Z",
				raindropRef: 905654757,
			},
		],
	});
});
