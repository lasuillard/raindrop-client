import { assertType, it } from "vitest";
import type { GetRaindropResponse } from "~/generated/api";

it("getRaindrop", () => {
	assertType<GetRaindropResponse>({
		result: true,
		item: {
			_id: 905654733,
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
					created: "2024-11-21T12:48:56.118Z",
					lastUpdate: "2024-11-21T12:48:56.119Z",
					creatorRef: {
						_id: 2067190,
						name: "miyil99106",
						avatar: "",
						email: "",
					},
					_id: "673f2c3834bf74da17f800f6",
				},
			],
			created: "2024-11-21T12:48:56.118Z",
			lastUpdate: "2024-11-21T12:48:56.119Z",
			domain: "raindrop.io",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			sort: 905654733,
			collectionId: -1,
		},
		author: true,
	});
});
