import { assertType, it } from "vitest";
import type { GetRootCollectionsResponse } from "~/generated/api";

it("getRootCollections", () => {
	assertType<GetRootCollectionsResponse>({
		result: true,
		items: [
			{
				_id: 45402789,
				title: "getRootCollections_0",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				public: false,
				view: "list",
				count: 0,
				cover: [],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2024-06-24T13:47:14.393Z",
				created: "2024-06-24T13:47:14.393Z",
				lastUpdate: "2024-06-24T13:47:14.393Z",
				slug: "get-root-collections-0",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
			{
				_id: 45402790,
				title: "getRootCollections_1",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				public: false,
				view: "list",
				count: 0,
				cover: [
					"https://up.raindrop.io/collection/thumbs/454/027/90/e0baf93e1f297abd2c2baabee2ec3cc1.png",
				],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2024-06-24T13:47:14.443Z",
				created: "2024-06-24T13:47:14.443Z",
				lastUpdate: "2024-06-24T13:47:14.443Z",
				slug: "get-root-collections-1",
				color: "#da1f26",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
		],
	});
});
