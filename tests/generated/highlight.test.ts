import { it } from "^/tests/_helpers/vitest";
import { createCollection } from "./_helpers";

// TODO: Need more data with highlights
it("getAllHighlights", async ({ client, expect, generateTypeTest }) => {
	const response = await client.highlight.getAllHighlights();

	generateTypeTest({ type: "GetAllHighlightsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [],
		  "result": true,
		}
	`);
});

// TODO: Need more data with highlights
it("getHighlightsInCollection", async ({
	task,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await createCollection(task, client);

	const response = await client.highlight.getHighlightsInCollection(
		collection.item._id,
	);

	generateTypeTest({ type: "GetHighlightsInCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [],
		  "result": true,
		}
	`);
});
