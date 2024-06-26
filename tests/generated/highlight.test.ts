import { it } from "^/tests/_helpers/vitest";
import { createCollection, createRaindrop } from "./_helpers";

it("getAllHighlights", async ({
	task,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	await createRaindrop(task, client, {
		highlights: [
			{
				text: "ignore",
				note: "",
			},
		],
	});
	const response = await client.highlight.getAllHighlights();

	generateTypeTest({ type: "GetAllHighlightsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": "667bfe8cddad52514990e6ba",
		      "created": "2024-06-26T11:42:04.598Z",
		      "link": "https://raindrop.io",
		      "note": "",
		      "raindropRef": 807050709,
		      "tags": [],
		      "text": "ignore",
		      "title": "getAllHighlights",
		    },
		  ],
		  "result": true,
		}
	`);
});

it("getHighlightsInCollection", async ({
	task,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await createCollection(task, client);
	await createRaindrop(task, client, {
		collection: { $id: collection.item._id },
		highlights: [
			{
				text: "ignore",
				note: "",
			},
		],
	});

	const response = await client.highlight.getHighlightsInCollection(
		collection.item._id,
	);

	generateTypeTest({ type: "GetHighlightsInCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": "667bffbf93ba20be0a4dec3d",
		      "created": "2024-06-26T11:47:11.835Z",
		      "link": "https://raindrop.io",
		      "note": "",
		      "raindropRef": 807056016,
		      "tags": [],
		      "text": "ignore",
		      "title": "getHighlightsInCollection",
		    },
		  ],
		  "result": true,
		}
	`);
});
