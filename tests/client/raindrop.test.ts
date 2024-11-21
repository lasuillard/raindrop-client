import { it } from "^/tests/_helpers/vitest";
import { describe, expect } from "vitest";

describe("raindrop.getAllRaindrops", () => {
	it("fetch full pagination results", async ({ setupTools, client }) => {
		const collection = await setupTools.createCollection();
		const collectionId = collection.item._id;
		await setupTools.createRaindrop({ collection: { $id: collectionId } });
		await setupTools.createRaindrop({ collection: { $id: collectionId } });
		await setupTools.createRaindrop({ collection: { $id: collectionId } });

		const result = await client.raindrop.getAllRaindrops(collectionId, {
			pageSize: 1,
		});
		expect(result.length).toBe(3);
		expect(result).toMatchInlineSnapshot(`
			[
			  {
			    "_id": 905642584,
			    "collection": {
			      "$id": 49867801,
			      "$ref": "collections",
			      "oid": 49867801,
			    },
			    "collectionId": 49867801,
			    "cover": "",
			    "created": "2024-11-21T12:22:43.567Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2024-11-21T12:22:43.567Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 905642584,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			  {
			    "_id": 905642582,
			    "collection": {
			      "$id": 49867801,
			      "$ref": "collections",
			      "oid": 49867801,
			    },
			    "collectionId": 49867801,
			    "cover": "",
			    "created": "2024-11-21T12:22:43.157Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2024-11-21T12:22:43.157Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 905642582,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			  {
			    "_id": 905642579,
			    "collection": {
			      "$id": 49867801,
			      "$ref": "collections",
			      "oid": 49867801,
			    },
			    "collectionId": 49867801,
			    "cover": "",
			    "created": "2024-11-21T12:22:42.771Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2024-11-21T12:22:42.771Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 905642579,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			]
		`);
	});
});
