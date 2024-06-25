import { assertType, it } from "vitest";
import type { GetRootCollectionsResponse } from "~/generated/api";

it("getRootCollections", () => {
	assertType<GetRootCollectionsResponse>({
		result: true,
		items: [
			{
				_id: 45429359,
				title: "getRootCollections",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				public: false,
				view: "list",
				count: 0,
				cover: [],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2024-06-25T12:01:49.349Z",
				created: "2024-06-25T12:01:49.350Z",
				lastUpdate: "2024-06-25T12:01:49.350Z",
				slug: "get-root-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
			{
				_id: 45429361,
				title: "getRootCollections",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				public: false,
				view: "list",
				count: 0,
				cover: [
					"https://up.raindrop.io/collection/thumbs/454/293/61/e0baf93e1f297abd2c2baabee2ec3cc1.png",
				],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2024-06-25T12:01:49.798Z",
				created: "2024-06-25T12:01:49.799Z",
				lastUpdate: "2024-06-25T12:01:49.799Z",
				slug: "get-root-collections",
				color: "#da1f26",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
		],
	});
});
