import { assertType, it } from "vitest";
import type { UpdateCollectionResponse } from "~/generated/api";

it("updateCollection", () => {
	assertType<UpdateCollectionResponse>({
		result: true,
		item: {
			_id: 57170533,
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
			lastAction: "2025-07-02T05:21:21.635Z",
			created: "2025-07-02T05:21:21.636Z",
			lastUpdate: "2025-07-02T05:21:22.007Z",
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
