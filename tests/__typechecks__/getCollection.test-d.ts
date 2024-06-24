import { assertType, it } from "vitest";
import type { GetCollectionResponse } from "~/generated/api";

it("getCollection", () => {
	assertType<GetCollectionResponse>({
		result: true,
		item: {
			_id: 45403632,
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
			lastAction: "2024-06-24T14:51:07.075Z",
			created: "2024-06-24T14:51:07.076Z",
			lastUpdate: "2024-06-24T14:51:07.076Z",
			slug: "get-collection",
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
