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

		expect(visits).toMatchInlineSnapshot(`
			[
			  "null: root",
			  "49868651: A",
			  "49868653: A1",
			  "49868651: A",
			  "49868653: A1",
			  "49868658: B",
			  "49868660: B1",
			  "49868666: B2",
			  "49868658: B",
			  "49868660: B1",
			  "49868666: B2",
			  "49868671: C",
			  "49868671: C",
			  "49868665: getChildCollections",
			  "49868668: getChildCollections",
			  "49868665: getChildCollections",
			  "49868668: getChildCollections",
			  "49868673: getCollection",
			  "49868673: getCollection",
			  "49868663: getHighlightsInCollection",
			  "49868663: getHighlightsInCollection",
			  "49868672: getRaindrops",
			  "49868672: getRaindrops",
			  "49868647: getRootCollections",
			  "49868647: getRootCollections",
			  "49868649: removeTagsFromCollection",
			  "49868649: removeTagsFromCollection",
			]
		`);
	});
});
