import { assertType, it } from "vitest";
import type { UpdateRaindropResponse } from "~/generated/api";

it("updateRaindrop", () => {
	assertType<UpdateRaindropResponse>({
		result: true,
		item: {
			_id: 905654738,
			link: "https://raindrop.io",
			domain: "raindrop.io",
			title: "updateRaindrop",
			excerpt: "updateRaindrop",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover: "",
			media: [],
			tags: ["raindrop"],
			highlights: [
				{
					text: "ignore",
					note: "",
					created: "2024-11-21T12:48:57.165Z",
					lastUpdate: "2024-11-21T12:48:57.166Z",
					creatorRef: 2067190,
					_id: "673f2c39b940b43ca82a51db",
				},
			],
			removed: false,
			sort: 905654738,
			created: "2024-11-21T12:48:56.794Z",
			lastUpdate: "2024-11-21T12:48:57.165Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
