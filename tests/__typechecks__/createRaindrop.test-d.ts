import { assertType, it } from "vitest";
import type { CreateRaindrop200Response } from "~/generated/api";

it("createRaindrop", () => {
	assertType<CreateRaindrop200Response>({
		result: true,
		item: {
			link: "https://raindrop.io",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			cover: "",
			media: [],
			tags: ["raindrop"],
			removed: false,
			created: "2024-06-25T13:54:37.444Z",
			lastUpdate: "2024-06-25T13:54:37.444Z",
			domain: "raindrop.io",
			title: "https://raindrop.io",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			_id: 806646696,
			creatorRef: 2067190,
			sort: 806646696,
			__v: 0,
			collectionId: -1,
		},
	});
});
