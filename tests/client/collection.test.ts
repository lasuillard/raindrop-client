import { it } from "^/tests/_helpers/vitest";
import { describe, expect } from "vitest";

describe("collection.getCollectionTree", () => {
	it("build tree from groups and collections", async ({
		setupTools,
		client,
		resetData: _,
	}) => {
		/*
    Set up following initial collections:

      My Collections (default root)
        A
          A1
        B
          B1
          B2
        C

    Other root groups can be created by using user API (`updateCurrentUser`),
    but omitting that for simplicity.
    */
		const A = await setupTools.createCollection({ title: "A" });
		await setupTools.createCollection({
			title: "A1",
			parent: { $ref: "collections", $id: A.item._id },
		});
		const B = await setupTools.createCollection({ title: "B" });
		await setupTools.createCollection({
			title: "B1",
			parent: { $ref: "collections", $id: B.item._id },
		});
		await setupTools.createCollection({
			title: "B2",
			parent: { $ref: "collections", $id: B.item._id },
		});
		await setupTools.createCollection({ title: "C" });

		const tree = await client.collection.getCollectionTree();
		const visits: string[] = [];
		tree.traverse((node) => {
			visits.push(`${node.data?._id || null}: ${node.data?.title || "root"}`);
		});

		expect(visits).toHaveLength(7);
		expect(visits).toMatchInlineSnapshot(`
			[
			  "null: root",
			  "57170825: A",
			  "57170826: A1",
			  "57170828: B",
			  "57170830: B1",
			  "57170832: B2",
			  "57170833: C",
			]
		`);
	});
});
