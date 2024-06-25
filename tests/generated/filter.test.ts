import { it } from "^/tests/_helpers/vitest";
import { createCollection } from "./_helpers";

// TODO: Need more data
it("getFilters", async ({ task, client, expect, generateTypeTest }) => {
	const collection = await createCollection(task, client);

	const response = await client.filter.getFilters(collection.item._id);

	generateTypeTest({ type: "GetFiltersResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "collectionId": 45430305,
		  "created": [],
		  "result": true,
		  "tags": [],
		  "types": [],
		}
	`);
});
