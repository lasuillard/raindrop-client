import { assertType, it } from "vitest";
import type { UploadRaindropCoverResponse } from "~/generated/api";

it("uploadRaindropCover", () => {
	assertType<UploadRaindropCoverResponse>({
		result: true,
		item: {
			_id: 905659892,
			link: "https://raindrop.io",
			domain: "raindrop.io",
			title: "uploadRaindropCover",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://up.raindrop.io/raindrop/thumbs/905/659/892/1732193778642.png",
			media: [
				{
					link: "https://up.raindrop.io/raindrop/thumbs/905/659/892/1732193778642.png",
					type: "image",
				},
			],
			tags: [],
			removed: true,
			sort: 905659892,
			created: "2024-11-21T12:56:17.875Z",
			lastUpdate: "2024-11-21T12:56:18.748Z",
			collection: { $ref: "collections", $id: -99, oid: -99 },
			__v: 1,
			collectionId: -99,
		},
	});
});
