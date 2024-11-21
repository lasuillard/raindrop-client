import { assertType, it } from "vitest";
import type { UpdateRaindropResponse } from "~/generated/api";

it("updateRaindrop", () => {
	assertType<UpdateRaindropResponse>({
		result: true,
		item: {
			_id: 905640723,
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
					created: "2024-11-21T12:20:31.682Z",
					lastUpdate: "2024-11-21T12:20:31.683Z",
					creatorRef: 2067190,
					_id: "673f258fa1d8200efe798413",
				},
			],
			removed: true,
			sort: 905640723,
			created: "2024-11-21T12:20:30.457Z",
			lastUpdate: "2024-11-21T12:20:31.683Z",
			collection: { $ref: "collections", $id: -99, oid: -99 },
			__v: 1,
			collectionId: -99,
		},
	});
});
