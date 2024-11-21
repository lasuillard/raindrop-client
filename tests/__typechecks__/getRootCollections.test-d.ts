import { assertType, it } from "vitest";
import type { GetRootCollectionsResponse } from "~/generated/api";

it("getRootCollections", () => {
	assertType<GetRootCollectionsResponse>({
		result: true,
		items: [
			{
				_id: 49868351,
				title: "getRootCollections",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				parent: null,
				public: false,
				view: "list",
				count: 0,
				cover: [],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2024-11-21T12:42:51.398Z",
				created: "2024-11-21T12:42:51.399Z",
				lastUpdate: "2024-11-21T12:42:51.399Z",
				slug: "get-root-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
			{
				_id: 49868352,
				title: "getRootCollections",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				parent: null,
				public: false,
				view: "list",
				count: 0,
				cover: [
					"https://up.raindrop.io/collection/thumbs/498/683/52/e0baf93e1f297abd2c2baabee2ec3cc1.png",
				],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2024-11-21T12:42:51.675Z",
				created: "2024-11-21T12:42:51.675Z",
				lastUpdate: "2024-11-21T12:42:51.675Z",
				slug: "get-root-collections",
				color: "#da1f26",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
		],
	});
});
