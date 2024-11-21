import { assertType, it } from "vitest";
import type { UploadCollectionCoverResponse } from "~/generated/api";

it("uploadCollectionCover", () => {
	assertType<UploadCollectionCoverResponse>({
		result: true,
		item: {
			_id: 49868685,
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
				"https://up.raindrop.io/collection/thumbs/498/686/85/1732193344283.png",
			],
			sort: 0,
			expanded: true,
			lastAction: "2024-11-21T12:49:03.399Z",
			created: "2024-11-21T12:49:03.399Z",
			lastUpdate: "2024-11-21T12:49:04.359Z",
			color: "#cc0404",
			__v: 1,
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
