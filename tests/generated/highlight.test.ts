import { it } from "^/tests/_helpers/vitest";

it("getAllHighlights", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	await setupTools.createRaindrop({
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
		      "_id": "673f2df2a4d8c1f56cb08df2",
		      "created": "2024-11-21T12:56:18.517Z",
		      "link": "https://raindrop.io",
		      "note": "",
		      "raindropRef": 905659899,
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
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	await setupTools.createRaindrop({
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
		      "_id": "673f2df31ca8f97c20824b83",
		      "created": "2024-11-21T12:56:19.886Z",
		      "link": "https://raindrop.io",
		      "note": "",
		      "raindropRef": 905659920,
		      "tags": [],
		      "text": "ignore",
		      "title": "getHighlightsInCollection",
		    },
		  ],
		  "result": true,
		}
	`);
});
