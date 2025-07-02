import { assertType, it } from "vitest";
import type { GetCollectionResponse } from "~/generated/api";

it("getCollection", () => {
	assertType<GetCollectionResponse>({
		result: true,
		item: {
			_id: 57170532,
			title: "getCollection",
			description: "",
			user: { $ref: "users", $id: 2067190 },
			public: false,
			view: "list",
			count: 0,
			cover: [],
			sort: 0,
			expanded: true,
			creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
			lastAction: "2025-07-02T05:21:20.062Z",
			created: "2025-07-02T05:21:20.063Z",
			lastUpdate: "2025-07-02T05:21:20.063Z",
			parent: null,
			slug: "get-collection",
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
