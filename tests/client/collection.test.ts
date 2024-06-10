import { it } from "^/tests/_helpers/vitest";
import collections from "^/tests/fixtures/collections-childrens.json";
import groups from "^/tests/fixtures/collections.json";
import { describe, expect } from "vitest";

describe("collection.getCollectionTree", () => {
	it("build tree from groups and collections", async ({
		mockAxios,
		client,
	}) => {
		mockAxios
			.onGet("https://api.raindrop.io/rest/v1/collections")
			.reply(() => {
				return [200, groups];
			})
			.onGet("https://api.raindrop.io/rest/v1/collections/childrens")
			.reply(() => {
				return [200, collections];
			});

		const tree = await client.collection.getCollectionTree();
		const visits: string[] = [];
		tree.traverse((node) => {
			visits.push(`${node.data?._id || null}: ${node.data?.title || "root"}`);
		});

		expect(visits).toEqual([
			"null: root",
			"35947369: Bookmarks bar",
			"35947370: D1",
			"35947372: D2",
			"35947373: D3",
			"35947374: D2-2",
			"32203872: Default",
			"33302214: Default",
		]);
	});
});
