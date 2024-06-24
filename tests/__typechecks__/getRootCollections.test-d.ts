import { assertType, it } from "vitest";
import type { GetRootCollectionsResponse } from "~/generated/api";

it("getRootCollections", () => {
	assertType<GetRootCollectionsResponse>({
		result: true,
		items: [
			{
				_id: 45403665,
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
				lastAction: "2024-06-24T14:53:06.493Z",
				created: "2024-06-24T14:53:06.493Z",
				lastUpdate: "2024-06-24T14:53:06.493Z",
				slug: "get-root-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
			{
				_id: 45403666,
				title: "getRootCollections",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				public: false,
				view: "list",
				count: 0,
				cover: [
					"https://up.raindrop.io/collection/thumbs/454/036/66/e0baf93e1f297abd2c2baabee2ec3cc1.png",
				],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2024-06-24T14:53:06.952Z",
				created: "2024-06-24T14:53:06.952Z",
				lastUpdate: "2024-06-24T14:53:06.952Z",
				slug: "get-root-collections",
				color: "#da1f26",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
		],
	});
});
