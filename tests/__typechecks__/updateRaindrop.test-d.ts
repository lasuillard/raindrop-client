import { assertType, it } from "vitest";
import type { UpdateRaindropResponse } from "~/generated/api";

it("updateRaindrop", () => {
	assertType<UpdateRaindropResponse>({
		result: true,
		item: {
			_id: 905659835,
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
					created: "2024-11-21T12:56:15.310Z",
					lastUpdate: "2024-11-21T12:56:15.311Z",
					creatorRef: 2067190,
					_id: "673f2defa4d8c1f56cb08d5e",
				},
			],
			removed: false,
			sort: 905659835,
			created: "2024-11-21T12:56:14.890Z",
			lastUpdate: "2024-11-21T12:56:15.310Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
