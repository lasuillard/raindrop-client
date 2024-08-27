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
		      "_id": "66cdb55bcb6eb38786256474",
		      "created": "2024-08-27T11:15:39.744Z",
		      "link": "https://raindrop.io",
		      "note": "",
		      "raindropRef": 842212836,
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
		      "_id": "66cdb55c745d10c2e0842711",
		      "created": "2024-08-27T11:15:40.851Z",
		      "link": "https://raindrop.io",
		      "note": "",
		      "raindropRef": 842212840,
		      "tags": [],
		      "text": "ignore",
		      "title": "getHighlightsInCollection",
		    },
		  ],
		  "result": true,
		}
	`);
});
