import { assertType, it } from "vitest";
import type { UploadFileResponse } from "~/generated/api";

it("uploadFile", () => {
	assertType<UploadFileResponse>({
		result: true,
		item: {
			_id: 1210203847,
			link: "https://api.raindrop.io/v2/raindrop/1210203847/file?type=image/png",
			domain: "up.raindrop.io",
			title: "blob",
			excerpt: "",
			note: "",
			type: "image",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://rdl.ink/render/https%3A%2F%2Fup.raindrop.io%2Fraindrop%2Ffiles%2F121%2F020%2F384%2F7%2Fblob",
			media: [],
			tags: [],
			file: { name: "blob", size: 111258, type: "image/png" },
			removed: false,
			sort: 1210203847,
			created: "2025-07-02T04:51:53.237Z",
			lastUpdate: "2025-07-02T04:51:53.362Z",
			__v: 0,
			collection: { $ref: "collections", $id: -1, oid: -1 },
			collectionId: -1,
		},
	});
});
