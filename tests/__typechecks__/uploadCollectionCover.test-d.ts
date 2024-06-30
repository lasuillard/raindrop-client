import { assertType, it } from "vitest";
import type { UploadCollectionCoverResponse } from "~/generated/api";

it("uploadCollectionCover", () => {
	assertType<UploadCollectionCoverResponse>({
		result: true,
		item: {
			_id: 45565506,
			title: "uploadCollectionCover",
			description: "",
			slug: "upload-collection-cover",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", email: "" },
			public: false,
			view: "list",
			count: 0,
			cover: [
				"https://up.raindrop.io/collection/thumbs/455/655/06/1719754884288.png",
			],
			sort: 0,
			expanded: true,
			lastAction: "2024-06-30T13:41:23.272Z",
			created: "2024-06-30T13:41:23.272Z",
			lastUpdate: "2024-06-30T13:41:24.396Z",
			color: "#cc0404",
			__v: 1,
			access: { for: 2067190, level: 4, root: false, draggable: true },
			author: true,
		},
	});
});
