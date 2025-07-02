import { assertType, it } from "vitest";
import type { UploadRaindropCoverResponse } from "~/generated/api";

it("uploadRaindropCover", () => {
	assertType<UploadRaindropCoverResponse>({
		result: true,
		item: {
			_id: 1210274251,
			link: "https://raindrop.io",
			domain: "raindrop.io",
			title: "uploadRaindropCover",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://up.raindrop.io/raindrop/thumbs/121/027/425/1/1751439489560.png",
			media: [
				{
					link: "https://up.raindrop.io/raindrop/thumbs/121/027/425/1/1751439489560.png",
					type: "image",
				},
			],
			tags: [],
			removed: false,
			sort: 1210274251,
			created: "2025-07-02T06:58:08.612Z",
			lastUpdate: "2025-07-02T06:58:09.632Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
