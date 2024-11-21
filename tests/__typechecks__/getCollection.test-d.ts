import { assertType, it } from "vitest";
import type { GetCollectionResponse } from "~/generated/api";

it("getCollection", () => {
	assertType<GetCollectionResponse>({
		result: true,
		item: {
			_id: 49867729,
			title: "getCollection",
			description: "",
			user: { $ref: "users", $id: 2067190 },
			parent: null,
			public: false,
			view: "list",
			count: 0,
			cover: [],
			sort: 0,
			expanded: true,
			creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
			lastAction: "2024-11-21T12:20:36.231Z",
			created: "2024-11-21T12:20:36.231Z",
			lastUpdate: "2024-11-21T12:20:36.231Z",
			slug: "get-collection",
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
