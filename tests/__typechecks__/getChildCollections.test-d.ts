import { assertType, it } from "vitest";
import type { GetChildCollectionsResponse } from "~/generated/api";

it("getChildCollections", () => {
	assertType<GetChildCollectionsResponse>({
		result: true,
		items: [
			{
				_id: 45429367,
				title: "getChildCollections",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				parent: { $ref: "collections", $id: 45429366 },
				public: false,
				view: "list",
				count: 0,
				cover: [],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2024-06-25T12:01:53.037Z",
				created: "2024-06-25T12:01:53.038Z",
				lastUpdate: "2024-06-25T12:01:53.038Z",
				slug: "get-child-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
		],
	});
});
