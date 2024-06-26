import { assertType, it } from "vitest";
import type { CreateCollectionResponse } from "~/generated/api";

it("createCollection", () => {
	assertType<CreateCollectionResponse>({
		result: true,
		item: {
			title: "createCollectionTest",
			description: "",
			user: { $ref: "users", $id: 2067190 },
			public: true,
			view: "list",
			count: 0,
			cover: [],
			sort: 0,
			expanded: true,
			creatorRef: 2067190,
			lastAction: "2024-06-25T12:01:56.802Z",
			created: "2024-06-25T12:01:56.802Z",
			lastUpdate: "2024-06-25T12:01:56.802Z",
			_id: 45429375,
			slug: "create-collection-test",
			__v: 0,
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
