import { assertType, it } from "vitest";
import type { UploadRaindropCoverResponse } from "~/generated/api";

it("uploadRaindropCover", () => {
	assertType<UploadRaindropCoverResponse>({
		result: true,
		item: {
			_id: 905651298,
			link: "https://raindrop.io",
			domain: "raindrop.io",
			title: "uploadRaindropCover",
			excerpt: "",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://up.raindrop.io/raindrop/thumbs/905/651/298/1732192973940.png",
			media: [
				{
					link: "https://up.raindrop.io/raindrop/thumbs/905/651/298/1732192973940.png",
					type: "image",
				},
			],
			tags: [],
			removed: false,
			sort: 905651298,
			created: "2024-11-21T12:42:53.476Z",
			lastUpdate: "2024-11-21T12:42:54.048Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
