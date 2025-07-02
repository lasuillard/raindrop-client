import { assertType, it } from "vitest";
import type { SearchCoversResponse } from "~/generated/api";

it("searchCovers", () => {
	assertType<SearchCoversResponse>({
		result: true,
		items: [
			{
				title: "Icons",
				icons: [
					{ png: "https://icons.rdl.ink/pack/fxemoji-emojis/400795-256.png" },
					{ png: "https://icons.rdl.ink/pack/twemoji-emojis/407533-256.png" },
					{ png: "https://icons.rdl.ink/pack/things/strawberry-256.png" },
					{
						png: "https://icons.rdl.ink/pack/fruits-and-vegetables-tiny/474529-256.png",
					},
					{ png: "https://icons.rdl.ink/pack/icons8-color/18041-256.png" },
				],
			},
		],
	});
});
