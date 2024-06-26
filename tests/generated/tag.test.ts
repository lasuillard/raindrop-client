import { it } from "^/tests/_helpers/vitest";
import { createCollection, createRaindrop } from "./_helpers";

it("getTagsInCollection", async ({
	task,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await createCollection(task, client);
	await createRaindrop(task, client, {
		collection: { $id: collection.item._id },
		tags: ["soup", "salad", "bread"],
	});

	const response = await client.tag.getTagsInCollection(collection.item._id);

	generateTypeTest({ type: "GetTagsInCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": "bread",
		      "count": 1,
		    },
		    {
		      "_id": "salad",
		      "count": 1,
		    },
		    {
		      "_id": "soup",
		      "count": 1,
		    },
		  ],
		  "result": true,
		}
	`);
});

it("renameOrMergeTags", async ({ task, client, expect, generateTypeTest }) => {
	const collection = await createCollection(task, client);
	await createRaindrop(task, client, {
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
	task,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await createCollection(task, client);
	await createRaindrop(task, client, {
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
