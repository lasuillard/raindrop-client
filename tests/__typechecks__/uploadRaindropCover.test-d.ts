import { assertType, it } from "vitest";
import type { UploadRaindropCoverResponse } from "~/generated/api";

it("uploadRaindropCover", () => {
	assertType<UploadRaindropCoverResponse>({
		result: true,
		item: {
			_id: 905641112,
			link: "https://raindrop.io",
			domain: "raindrop.io",
			title: "uploadRaindropCover",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://up.raindrop.io/raindrop/thumbs/905/641/112/1732191634487.png",
			media: [
				{
					link: "https://up.raindrop.io/raindrop/thumbs/905/641/112/1732191634487.png",
					type: "image",
				},
			],
			tags: [],
			removed: false,
			sort: 905641112,
			created: "2024-11-21T12:20:33.724Z",
			lastUpdate: "2024-11-21T12:20:34.561Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
