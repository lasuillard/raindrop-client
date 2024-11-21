import { assertType, it } from "vitest";
import type { UploadCollectionCoverResponse } from "~/generated/api";

it("uploadCollectionCover", () => {
	assertType<UploadCollectionCoverResponse>({
		result: true,
		item: {
			_id: 49869429,
			title: "uploadCollectionCover",
			description: "",
			slug: "upload-collection-cover",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
			parent: null,
			public: false,
			view: "list",
			count: 0,
			cover: [
				"https://up.raindrop.io/collection/thumbs/498/694/29/1732193783042.png",
			],
			sort: 0,
			expanded: true,
			lastAction: "2024-11-21T12:56:21.964Z",
			created: "2024-11-21T12:56:21.965Z",
			lastUpdate: "2024-11-21T12:56:23.112Z",
			color: "#cc0404",
			__v: 1,
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
