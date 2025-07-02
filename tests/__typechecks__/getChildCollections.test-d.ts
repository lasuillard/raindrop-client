import { assertType, it } from "vitest";
import type { GetChildCollectionsResponse } from "~/generated/api";

it("getChildCollections", () => {
	assertType<GetChildCollectionsResponse>({
		result: true,
		items: [
			{
				_id: 57170609,
				title: "getChildCollections",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				public: false,
				view: "list",
				count: 0,
				cover: [],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2025-07-02T05:27:19.282Z",
				created: "2025-07-02T05:27:19.282Z",
				lastUpdate: "2025-07-02T05:27:19.282Z",
				parent: null,
				slug: "get-child-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
			{
				_id: 57170610,
				title: "getChildCollections",
				description: "",
				user: { $ref: "users", $id: 2067190 },
				parent: { $ref: "collections", $id: 57170609 },
				public: false,
				view: "list",
				count: 0,
				cover: [],
				sort: 0,
				expanded: true,
				creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
				lastAction: "2025-07-02T05:27:19.711Z",
				created: "2025-07-02T05:27:19.711Z",
				lastUpdate: "2025-07-02T05:27:19.711Z",
				slug: "get-child-collections",
				access: { for: 2067190, level: 4, root: false, draggable: true },
				author: true,
			},
		],
	});
});
