import { it } from "^/tests/_helpers/vitest";

it("getFilters", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	await setupTools.createRaindrop();
	await setupTools.createRaindrop({ important: true });
	await setupTools.createRaindrop({ tags: ["science", "novel"] });

	const response = await client.filter.getFilters(0);

	generateTypeTest({ type: "GetFiltersResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "collectionId": 0,
		  "created": [
		    {
		      "_id": "2024-11",
		      "count": 6,
		    },
		  ],
		  "important": {
		    "count": 1,
		  },
		  "notag": {
		    "count": 4,
		  },
		  "result": true,
		  "tags": [
		    {
		      "_id": "bread",
		      "count": 1,
		    },
		    {
		      "_id": "novel",
		      "count": 1,
		    },
		    {
		      "_id": "salad",
		      "count": 1,
		    },
		    {
		      "_id": "science",
		      "count": 1,
		    },
		    {
		      "_id": "soup",
		      "count": 1,
		    },
		  ],
		  "total": {
		    "count": 6,
		  },
		  "types": [
		    {
		      "_id": "link",
		      "count": 6,
		    },
		  ],
		}
	`);
});
