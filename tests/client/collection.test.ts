import { it } from "^/tests/_helpers/vitest";
import { describe, expect } from "vitest";
import { createCollection } from "../generated/_helpers";

describe("collection.getCollectionTree", () => {
	it("build tree from groups and collections", async ({
		task,
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
		const A = await createCollection(task, client, { title: "A" });
		await createCollection(task, client, {
			title: "A1",
			parent: { $ref: "collections", $id: A.item._id },
		});
		const B = await createCollection(task, client, { title: "B" });
		await createCollection(task, client, {
			title: "B1",
			parent: { $ref: "collections", $id: B.item._id },
		});
		await createCollection(task, client, {
			title: "B2",
			parent: { $ref: "collections", $id: B.item._id },
		});
		await createCollection(task, client, { title: "C" });

		const tree = await client.collection.getCollectionTree();
		const visits: string[] = [];
		tree.traverse((node) => {
			visits.push(`${node.data?._id || null}: ${node.data?.title || "root"}`);
		});

		expect(visits).toMatchInlineSnapshot(`
			[
			  "null: root",
			  "45559611: A",
			  "45559612: A1",
			  "45559613: B",
			  "45559614: B1",
			  "45559615: B2",
			  "45559616: C",
			]
		`);
	});
});
