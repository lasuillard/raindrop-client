import { it } from "^/tests/_helpers/vitest";
import { describe, expect } from "vitest";
import { createCollection, createRaindrop } from "../generated/_helpers";

describe("raindrop.getAllRaindrops", () => {
	it("fetch full pagination results", async ({ task, client }) => {
		const collection = await createCollection(task, client);
		await createRaindrop(task, client, {
			collection: { $id: collection.item._id },
		});
		await createRaindrop(task, client, {
			collection: { $id: collection.item._id },
		});
		await createRaindrop(task, client, {
			collection: { $id: collection.item._id },
		});

		const result = await client.raindrop.getAllRaindrops(collection.item._id, {
			pageSize: 1,
		});
		expect(result.length).toBe(3);
		expect(result).toMatchInlineSnapshot(`
			[
			  {
			    "_id": 809520465,
			    "collection": {
			      "$id": 45559848,
			      "$ref": "collections",
			      "oid": 45559848,
			    },
			    "collectionId": 45559848,
			    "cover": "",
			    "created": "2024-06-30T11:28:37.267Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2024-06-30T11:28:37.267Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 809520465,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			  {
			    "_id": 809520464,
			    "collection": {
			      "$id": 45559848,
			      "$ref": "collections",
			      "oid": 45559848,
			    },
			    "collectionId": 45559848,
			    "cover": "",
			    "created": "2024-06-30T11:28:36.877Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2024-06-30T11:28:36.877Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 809520464,
			    "tags": [],
			    "title": "fetch full pagination results",
			    "type": "link",
			    "user": {
			      "$id": 2067190,
			      "$ref": "users",
			    },
			  },
			  {
			    "_id": 809520461,
			    "collection": {
			      "$id": 45559848,
			      "$ref": "collections",
			      "oid": 45559848,
			    },
			    "collectionId": 45559848,
			    "cover": "",
			    "created": "2024-06-30T11:28:36.496Z",
			    "creatorRef": {
			      "_id": 2067190,
			      "avatar": "",
			      "email": "",
			      "name": "miyil99106",
			    },
			    "domain": "raindrop.io",
			    "excerpt": "",
			    "highlights": [],
			    "lastUpdate": "2024-06-30T11:28:36.496Z",
			    "link": "https://raindrop.io",
			    "media": [],
			    "note": "",
			    "removed": false,
			    "sort": 809520461,
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
