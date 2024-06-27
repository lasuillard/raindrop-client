import { it } from "^/tests/_helpers/vitest";
import { createCollection, createRaindrop } from "./_helpers";

it("createRaindrop", async ({ client, expect, generateTypeTest }) => {
	const response = await client.raindrop.createRaindrop({
		link: "https://raindrop.io",
		media: [
			{
				link: "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
			},
		],
		tags: ["raindrop"],
	});

	generateTypeTest({ type: "CreateRaindropResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 0,
		    "_id": 807122261,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		    "created": "2024-06-26T14:24:37.227Z",
		    "creatorRef": 2067190,
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "lastUpdate": "2024-06-26T14:24:37.227Z",
		    "link": "https://raindrop.io",
		    "media": [
		      {
		        "link": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		        "type": "image",
		      },
		    ],
		    "note": "",
		    "removed": false,
		    "sort": 807122261,
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

it("getRaindrop", async ({ task, client, expect, generateTypeTest }) => {
	const raindrop = await createRaindrop(task, client, {
		media: [
			{
				link: "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
			},
		],
		highlights: [{ text: "ignore", note: "" }],
		tags: ["raindrop"],
	});

	const response = await client.raindrop.getRaindrop(raindrop.item._id);

	generateTypeTest({ type: "GetRaindropResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "author": true,
		  "item": {
		    "_id": 807122283,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		    "created": "2024-06-26T14:24:43.449Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "highlights": [
		      {
		        "_id": "667c24abddad5251499582db",
		        "created": "2024-06-26T14:24:43.448Z",
		        "creatorRef": {
		          "_id": 2067190,
		          "avatar": "",
		          "email": "",
		          "name": "miyil99106",
		        },
		        "lastUpdate": "2024-06-26T14:24:43.451Z",
		        "note": "",
		        "text": "ignore",
		      },
		    ],
		    "lastUpdate": "2024-06-26T14:24:43.449Z",
		    "link": "https://raindrop.io",
		    "media": [
		      {
		        "link": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		        "type": "image",
		      },
		    ],
		    "note": "",
		    "removed": false,
		    "sort": 807122283,
		    "tags": [
		      "raindrop",
		    ],
		    "title": "getRaindrop",
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

it.todo("updateRaindrop");

it.todo("removeRaindrop");

it.todo("uploadFile");

it.todo("uploadRaindropCover");

it.todo("getPermanentCopy");

it.todo("suggestForNewBookmark");

it.todo("suggestForExistingBookmark");

it("getRaindrops", async ({ task, client, expect, generateTypeTest }) => {
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

	const response = await client.raindrop.getRaindrops(collection.item._id);

	generateTypeTest({ type: "GetRaindropsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "collectionId": 45478258,
		  "count": 3,
		  "items": [
		    {
		      "_id": 807636969,
		      "collection": {
		        "$id": 45478258,
		        "$ref": "collections",
		        "oid": 45478258,
		      },
		      "collectionId": 45478258,
		      "cover": "",
		      "created": "2024-06-27T12:54:06.484Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "avatar": "",
		        "email": "",
		        "name": "miyil99106",
		      },
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2024-06-27T12:54:06.484Z",
		      "link": "https://raindrop.io",
		      "media": [],
		      "note": "",
		      "removed": false,
		      "sort": 807636969,
		      "tags": [],
		      "title": "getRaindrops",
		      "type": "link",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		    },
		    {
		      "_id": 807636965,
		      "collection": {
		        "$id": 45478258,
		        "$ref": "collections",
		        "oid": 45478258,
		      },
		      "collectionId": 45478258,
		      "cover": "",
		      "created": "2024-06-27T12:54:06.122Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "avatar": "",
		        "email": "",
		        "name": "miyil99106",
		      },
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2024-06-27T12:54:06.122Z",
		      "link": "https://raindrop.io",
		      "media": [],
		      "note": "",
		      "removed": false,
		      "sort": 807636965,
		      "tags": [],
		      "title": "getRaindrops",
		      "type": "link",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		    },
		    {
		      "_id": 807636958,
		      "collection": {
		        "$id": 45478258,
		        "$ref": "collections",
		        "oid": 45478258,
		      },
		      "collectionId": 45478258,
		      "cover": "",
		      "created": "2024-06-27T12:54:05.747Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "avatar": "",
		        "email": "",
		        "name": "miyil99106",
		      },
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2024-06-27T12:54:05.747Z",
		      "link": "https://raindrop.io",
		      "media": [],
		      "note": "",
		      "removed": false,
		      "sort": 807636958,
		      "tags": [],
		      "title": "getRaindrops",
		      "type": "link",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		    },
		  ],
		  "result": true,
		}
	`);
});

it.todo("updateRaindrops");

it.todo("removeRaindrops");

it.todo("createRaindrops");
