import { assertType, it } from "vitest";
import type { UploadRaindropCoverResponse } from "~/generated/api";

it("uploadRaindropCover", () => {
	assertType<UploadRaindropCoverResponse>({
		result: true,
		item: {
			_id: 1210213888,
			link: "https://raindrop.io",
			domain: "raindrop.io",
			title: "uploadRaindropCover",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://up.raindrop.io/raindrop/thumbs/121/021/388/8/1751433675844.png",
			media: [
				{
					link: "https://up.raindrop.io/raindrop/thumbs/121/021/388/8/1751433675844.png",
					type: "image",
				},
			],
			tags: [],
			removed: false,
			sort: 1210213888,
			created: "2025-07-02T05:21:15.198Z",
			lastUpdate: "2025-07-02T05:21:15.919Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
