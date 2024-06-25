import { assertType, it } from "vitest";
import type { SearchCoversResponse } from "~/generated/api";

it("searchCovers", () => {
	assertType<SearchCoversResponse>({
		result: true,
		items: [
			{
				title: "Icons",
				icons: [
					{
						png: "https://icon-finder.fly.dev/pack/fxemoji-emojis/400795-256.png",
					},
					{
						png: "https://icon-finder.fly.dev/pack/twemoji-emojis/407533-256.png",
					},
					{
						png: "https://icon-finder.fly.dev/pack/fruits-and-vegetables-tiny/474529-256.png",
					},
					{
						png: "https://icon-finder.fly.dev/pack/icons8-color/18041-256.png",
					},
				],
			},
		],
	});
});
