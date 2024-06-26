import { assertType, it } from "vitest";
import type { GetRaindropResponse } from "~/generated/api";

it("getRaindrop", () => {
	assertType<GetRaindropResponse>({
		result: true,
		item: {
			_id: 807122283,
			link: "https://raindrop.io",
			title: "getRaindrop",
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
			highlights: [
				{
					text: "ignore",
					note: "",
					created: "2024-06-26T14:24:43.448Z",
					lastUpdate: "2024-06-26T14:24:43.451Z",
					creatorRef: {
						_id: 2067190,
						name: "miyil99106",
						avatar: "",
						email: "",
					},
					_id: "667c24abddad5251499582db",
				},
			],
			created: "2024-06-26T14:24:43.449Z",
			lastUpdate: "2024-06-26T14:24:43.449Z",
			domain: "raindrop.io",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			sort: 807122283,
			collectionId: -1,
		},
		author: true,
	});
});
