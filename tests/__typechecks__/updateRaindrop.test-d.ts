import { assertType, it } from "vitest";
import type { UpdateRaindropResponse } from "~/generated/api";

it("updateRaindrop", () => {
	assertType<UpdateRaindropResponse>({
		result: true,
		item: {
			_id: 809246844,
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
					created: "2024-06-30T05:32:32.890Z",
					lastUpdate: "2024-06-30T05:32:32.890Z",
					creatorRef: 2067190,
					_id: "6680edf0f378b723e3bfccad",
				},
			],
			removed: false,
			sort: 809246844,
			created: "2024-06-30T05:32:32.523Z",
			lastUpdate: "2024-06-30T05:32:32.890Z",
			collection: { $ref: "collections", $id: -1, oid: -1 },
			__v: 1,
			collectionId: -1,
		},
	});
});
