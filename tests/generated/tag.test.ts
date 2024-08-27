import { it } from "^/tests/_helpers/vitest";

it("getTagsInCollection", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
		tags: ["soup", "salad", "bread"],
	});

	const response = await client.tag.getTagsInCollection(collection.item._id);

	generateTypeTest({ type: "GetTagsInCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [],
		  "result": true,
		}
	`);
});

it("renameOrMergeTags", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
		tags: ["soup", "salad", "bread"],
	});

	const response = await client.tag.renameOrMergeTags(collection.item._id, {
		tags: ["soup", "salad"],
		replace: "bread",
	});

	generateTypeTest({ type: "SimpleResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});

it("removeTagsFromCollection", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
		tags: ["soup", "salad", "bread"],
	});

	const response = await client.tag.removeTagsFromCollection(
		collection.item._id,
		{ tags: ["soup", "salad"] },
	);
	generateTypeTest({ type: "SimpleResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});
