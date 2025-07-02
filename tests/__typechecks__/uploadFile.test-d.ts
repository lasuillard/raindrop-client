import { assertType, it } from "vitest";
import type { UploadFileResponse } from "~/generated/api";

it("uploadFile", () => {
	assertType<UploadFileResponse>({
		result: true,
		item: {
			_id: 1210213886,
			link: "https://api.raindrop.io/v2/raindrop/1210213886/file?type=image/png",
			domain: "up.raindrop.io",
			title: "blob",
			excerpt: "",
			note: "",
			type: "image",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover:
				"https://rdl.ink/render/https%3A%2F%2Fup.raindrop.io%2Fraindrop%2Ffiles%2F121%2F021%2F388%2F6%2Fblob",
			media: [],
			tags: [],
			file: { name: "blob", size: 111258, type: "image/png" },
			removed: false,
			sort: 1210213886,
			created: "2025-07-02T05:21:14.795Z",
			lastUpdate: "2025-07-02T05:21:14.904Z",
			__v: 0,
			collection: { $ref: "collections", $id: -1, oid: -1 },
			collectionId: -1,
		},
	});
});
