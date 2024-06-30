import { assertType, it } from "vitest";
import type { UploadRaindropCoverResponse } from "~/generated/api";

it("uploadRaindropCover", () => {
	assertType<UploadRaindropCoverResponse>({
		result: true,
		item: {
			_id: 809580615,
			link: "https://raindrop.io",
			domain: "raindrop.io",
			title: "uploadRaindropCover",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://up.raindrop.io/raindrop/thumbs/809/580/615/1719754936977.png",
			media: [
				{
					link: "https://up.raindrop.io/raindrop/thumbs/809/580/615/1719754936977.png",
					type: "image",
				},
			],
			tags: [],
			removed: false,
			sort: 809580615,
			created: "2024-06-30T13:42:16.020Z",
			lastUpdate: "2024-06-30T13:42:17.066Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
