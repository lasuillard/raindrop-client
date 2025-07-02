import { assertType, it } from "vitest";
import type { UpdateRaindropResponse } from "~/generated/api";

it("updateRaindrop", () => {
	assertType<UpdateRaindropResponse>({
		result: true,
		item: {
			_id: 1210213876,
			link: "https://raindrop.io",
			domain: "raindrop.io",
			title: "updateRaindrop",
			excerpt: "updateRaindrop",
			note: "",
			type: "link",
			user: { $ref: "users", $id: 2067190 },
			creatorRef: { _id: 2067190, name: "miyil99106", avatar: "", email: "" },
			cover: "",
			media: [],
			tags: ["raindrop"],
			highlights: [
				{
					text: "ignore",
					note: "",
					created: "2025-07-02T05:21:13.399Z",
					lastUpdate: "2025-07-02T05:21:13.400Z",
					creatorRef: 2067190,
					_id: "6864c1c905dc572a56914adf",
				},
			],
			removed: false,
			sort: 1210213876,
			created: "2025-07-02T05:21:13.087Z",
			lastUpdate: "2025-07-02T05:21:13.399Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
