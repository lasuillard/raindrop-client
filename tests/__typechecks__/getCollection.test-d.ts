import { assertType, it } from "vitest";
import type { GetCollectionResponse } from "~/generated/api";

it("getCollection", () => {
	assertType<GetCollectionResponse>({
		result: true,
		item: {
			_id: 47216393,
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
			lastAction: "2024-08-27T11:15:43.274Z",
			created: "2024-08-27T11:15:43.275Z",
			lastUpdate: "2024-08-27T11:15:43.275Z",
			slug: "get-collection",
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
