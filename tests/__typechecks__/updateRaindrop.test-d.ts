import { assertType, it } from "vitest";
import type { UpdateRaindropResponse } from "~/generated/api";

it("updateRaindrop", () => {
	assertType<UpdateRaindropResponse>({
		result: true,
		item: {
			_id: 905651292,
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
					created: "2024-11-21T12:42:51.956Z",
					lastUpdate: "2024-11-21T12:42:51.958Z",
					creatorRef: 2067190,
					_id: "673f2acb6f9ab341f89daaed",
				},
			],
			removed: false,
			sort: 905651292,
			created: "2024-11-21T12:42:51.710Z",
			lastUpdate: "2024-11-21T12:42:51.957Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
