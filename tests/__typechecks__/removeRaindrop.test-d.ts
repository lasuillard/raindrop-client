import { assertType, it } from "vitest";
import type { RemoveRaindropResponse } from "~/generated/api";

it("removeRaindrop", () => {
	assertType<RemoveRaindropResponse>({
		result: true,
		item: {
			_id: 842212833,
			link: "https://raindrop.io",
			title: "removeRaindrop",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			cover: "",
			tags: [],
			removed: true,
			media: [],
			created: "2024-08-27T11:15:39.454Z",
			lastUpdate: "2024-08-27T11:15:39.831Z",
			domain: "raindrop.io",
			collection: { $ref: "collections", $id: -99, oid: -99 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			sort: 842212833,
			collectionId: -99,
			order: 0,
		},
	});
});
