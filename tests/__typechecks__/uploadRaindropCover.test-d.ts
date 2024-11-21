import { assertType, it } from "vitest";
import type { UploadRaindropCoverResponse } from "~/generated/api";

it("uploadRaindropCover", () => {
	assertType<UploadRaindropCoverResponse>({
		result: true,
		item: {
			_id: 905654775,
			link: "https://raindrop.io",
			domain: "raindrop.io",
			title: "uploadRaindropCover",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://up.raindrop.io/raindrop/thumbs/905/654/775/1732193340019.png",
			media: [
				{
					link: "https://up.raindrop.io/raindrop/thumbs/905/654/775/1732193340019.png",
					type: "image",
				},
			],
			tags: [],
			removed: false,
			sort: 905654775,
			created: "2024-11-21T12:48:59.263Z",
			lastUpdate: "2024-11-21T12:49:00.199Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
