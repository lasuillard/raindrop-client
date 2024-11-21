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
			    "_id": 905655607,
			    "collection": {
			      "$id": 49868793,
			      "$ref": "collections",
			      "oid": 49868793,
			    },
			    "collectionId": 49868793,
			    "cover": "",
			    "created": "2024-11-21T12:49:47.534Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2024-11-21T12:49:47.534Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 905655607,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			  {
			    "_id": 905655602,
			    "collection": {
			      "$id": 49868793,
			      "$ref": "collections",
			      "oid": 49868793,
			    },
			    "collectionId": 49868793,
			    "cover": "",
			    "created": "2024-11-21T12:49:47.145Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2024-11-21T12:49:47.145Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 905655602,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			  {
			    "_id": 905655600,
			    "collection": {
			      "$id": 49868793,
			      "$ref": "collections",
			      "oid": 49868793,
			    },
			    "collectionId": 49868793,
			    "cover": "",
			    "created": "2024-11-21T12:49:46.757Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2024-11-21T12:49:46.757Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 905655600,
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
