import { assertType, it } from "vitest";
import type { UploadRaindropCoverResponse } from "~/generated/api";

it("uploadRaindropCover", () => {
	assertType<UploadRaindropCoverResponse>({
		result: true,
		item: {
			_id: 842212841,
			link: "https://raindrop.io",
			domain: "raindrop.io",
			title: "uploadRaindropCover",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://up.raindrop.io/raindrop/thumbs/842/212/841/1724757341956.png",
			media: [
				{
					link: "https://up.raindrop.io/raindrop/thumbs/842/212/841/1724757341956.png",
					type: "image",
				},
			],
			tags: [],
			removed: false,
			sort: 842212841,
			created: "2024-08-27T11:15:41.155Z",
			lastUpdate: "2024-08-27T11:15:42.099Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
