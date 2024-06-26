import { it } from "^/tests/_helpers/vitest";
import { createRaindrop } from "./_helpers";

it("getFilters", async ({
	task,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	await createRaindrop(task, client);
	await createRaindrop(task, client, { important: true });
	await createRaindrop(task, client, { tags: ["science", "novel"] });

	const response = await client.filter.getFilters(0);

	generateTypeTest({ type: "GetFiltersResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "collectionId": 0,
		  "created": [
		    {
		      "_id": "2024-06",
		      "count": 3,
		    },
		  ],
		  "important": {
		    "count": 1,
		  },
		  "notag": {
		    "count": 2,
		  },
		  "result": true,
		  "tags": [
		    {
		      "_id": "novel",
		      "count": 1,
		    },
		    {
		      "_id": "science",
		      "count": 1,
		    },
		  ],
		  "total": {
		    "count": 3,
		  },
		  "types": [
		    {
		      "_id": "link",
		      "count": 3,
		    },
		  ],
		}
	`);
});
