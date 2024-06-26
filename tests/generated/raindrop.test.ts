import { it } from "^/tests/_helpers/vitest";

it("createRaindrop", async ({ client, expect, generateTypeTest }) => {
	const response = await client.raindrop.createRaindrop({
		link: "https://raindrop.io",
		media: [], // TODO: Not sure what should be here
		tags: ["raindrop"],
	});

	generateTypeTest({ type: "CreateRaindropResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 0,
		    "_id": 806646696,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "",
		    "created": "2024-06-25T13:54:37.444Z",
		    "creatorRef": 2067190,
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "lastUpdate": "2024-06-25T13:54:37.444Z",
		    "link": "https://raindrop.io",
		    "media": [],
		    "note": "",
		    "removed": false,
		    "sort": 806646696,
		    "tags": [
		      "raindrop",
		    ],
		    "title": "https://raindrop.io",
		    "type": "link",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		  },
		  "result": true,
		}
	`);
});

it.todo("getRaindrop");
it.todo("updateRaindrop");
it.todo("removeRaindrop");
it.todo("uploadFile");
it.todo("uploadRaindropCover");
it.todo("getPermanentCopy");
it.todo("suggestForNewBookmark");
it.todo("suggestForExistingBookmark");
it.todo("getRaindrops");
it.todo("updateRaindrops");
it.todo("removeRaindrops");
it.todo("createRaindrops");
