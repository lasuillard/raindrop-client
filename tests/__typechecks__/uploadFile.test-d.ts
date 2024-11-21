import { assertType, it } from "vitest";
import type { UploadFileResponse } from "~/generated/api";

it("uploadFile", () => {
	assertType<UploadFileResponse>({
		result: true,
		item: {
			_id: 905651296,
			link: "https://api.raindrop.io/v2/raindrop/905651296/file?type=image/png",
			domain: "up.raindrop.io",
			title: "blob",
			excerpt: "",
			note: "",
			type: "image",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: 2067190,
			cover:
				"https://rdl.ink/render/https%3A%2F%2Fup.raindrop.io%2Fraindrop%2Ffiles%2F905%2F651%2F296%2Fblob",
			media: [],
			tags: [],
			file: { name: "blob", size: 111258, type: "image/png" },
			removed: false,
			sort: 905651296,
			created: "2024-11-21T12:42:53.072Z",
			lastUpdate: "2024-11-21T12:42:53.243Z",
			__v: 0,
			collection: { $ref: "collections", $id: -1, oid: -1 },
			collectionId: -1,
		},
	});
});
