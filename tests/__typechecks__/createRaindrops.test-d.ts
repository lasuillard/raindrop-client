import { assertType, it } from "vitest";
import type { CreateRaindropsResponse } from "~/generated/api";

it("createRaindrops", () => {
	assertType<CreateRaindropsResponse>({
		result: true,
		items: [
			{
				link: "https://raindrop.io",
				excerpt: "",
				note: "",
				type: "link",
				user: { $ref: "users", $id: 2067190 },
				cover:
					"https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
				media: [
					{
						link: "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
						type: "image",
					},
				],
				tags: ["raindrop"],
				removed: false,
				collection: { $ref: "collections", $id: -1, oid: -1 },
				highlights: [],
				_id: 1210213908,
				created: "2025-07-02T05:21:19.832Z",
				lastUpdate: "2025-07-02T05:21:19.832Z",
				domain: "raindrop.io",
				title: "https://raindrop.io",
				creatorRef: 2067190,
				sort: 1210213908,
				__v: 0,
				collectionId: -1,
			},
		],
	});
});
