import { assertType, it } from "vitest";
import type { UpdateCollectionResponse } from "~/generated/api";

it("updateCollection", () => {
	assertType<UpdateCollectionResponse>({
		result: true,
		item: {
			_id: 49869420,
			title: "updatedCollection",
			description: "",
			slug: "updated-collection",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
			parent: null,
			public: true,
			view: "list",
			count: 0,
			cover: [],
			sort: 0,
			expanded: true,
			lastAction: "2024-11-21T12:56:19.857Z",
			created: "2024-11-21T12:56:19.857Z",
			lastUpdate: "2024-11-21T12:56:20.316Z",
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
