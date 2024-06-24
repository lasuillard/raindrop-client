import { assertType, it } from "vitest";
import type { UpdateCollectionResponse } from "~/generated/api";

it("updateCollection", () => {
	assertType<UpdateCollectionResponse>({
		result: true,
		item: {
			_id: 45403634,
			title: "updatedCollection",
			description: "",
			slug: "updated-collection",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
			public: true,
			view: "list",
			count: 0,
			cover: [],
			sort: 0,
			expanded: true,
			lastAction: "2024-06-24T14:51:08.845Z",
			created: "2024-06-24T14:51:08.845Z",
			lastUpdate: "2024-06-24T14:51:09.378Z",
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
