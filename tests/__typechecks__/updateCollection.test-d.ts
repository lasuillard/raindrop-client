import { assertType, it } from "vitest";
import type { UpdateCollectionResponse } from "~/generated/api";

it("updateCollection", () => {
	assertType<UpdateCollectionResponse>({
		result: true,
		item: {
			_id: 49867731,
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
			lastAction: "2024-11-21T12:20:37.006Z",
			created: "2024-11-21T12:20:37.006Z",
			lastUpdate: "2024-11-21T12:20:37.435Z",
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
