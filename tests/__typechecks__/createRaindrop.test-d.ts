import { assertType, it } from "vitest";
import type { CreateRaindropResponse } from "~/generated/api";

it("createRaindrop", () => {
	assertType<CreateRaindropResponse>({
		result: true,
		item: {
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
			created: "2024-08-27T11:15:37.601Z",
			lastUpdate: "2024-08-27T11:15:37.601Z",
			domain: "raindrop.io",
			title: "https://raindrop.io",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			_id: 842212819,
			creatorRef: 2067190,
			sort: 842212819,
			__v: 0,
			collectionId: -1,
		},
	});
});
