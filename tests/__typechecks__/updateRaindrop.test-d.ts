import { assertType, it } from "vitest";
import type { UpdateRaindropResponse } from "~/generated/api";

it("updateRaindrop", () => {
	assertType<UpdateRaindropResponse>({
		result: true,
		item: {
			_id: 842212828,
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
					created: "2024-08-27T11:15:39.096Z",
					lastUpdate: "2024-08-27T11:15:39.096Z",
					creatorRef: 2067190,
					_id: "66cdb55b0e9282cf678b5912",
				},
			],
			removed: false,
			sort: 842212828,
			created: "2024-08-27T11:15:38.725Z",
			lastUpdate: "2024-08-27T11:15:39.096Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
