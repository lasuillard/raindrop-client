import fs from "node:fs";
import path from "node:path";
import { it } from "^/tests/_helpers/vitest";

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
		    "_id": 905640657,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		    "created": "2024-11-21T12:20:29.332Z",
		    "creatorRef": 2067190,
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "lastUpdate": "2024-11-21T12:20:29.332Z",
		    "link": "https://raindrop.io",
		    "media": [
		      {
		        "link": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		        "type": "image",
		      },
		    ],
		    "note": "",
		    "removed": false,
		    "sort": 905640657,
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

it("getRaindrop", async ({ setupTools, client, expect, generateTypeTest }) => {
	const raindrop = await setupTools.createRaindrop({
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
		    "_id": 905640660,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		    "created": "2024-11-21T12:20:29.729Z",
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
		        "_id": "673f258db940b43ca829652a",
		        "created": "2024-11-21T12:20:29.728Z",
		        "creatorRef": {
		          "_id": 2067190,
		          "avatar": "",
		          "email": "",
		          "name": "miyil99106",
		        },
		        "lastUpdate": "2024-11-21T12:20:29.729Z",
		        "note": "",
		        "text": "ignore",
		      },
		    ],
		    "lastUpdate": "2024-11-21T12:20:29.729Z",
		    "link": "https://raindrop.io",
		    "media": [
		      {
		        "link": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		        "type": "image",
		      },
		    ],
		    "note": "",
		    "removed": false,
		    "sort": 905640660,
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

it("updateRaindrop", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const raindrop = await setupTools.createRaindrop();

	const response = await client.raindrop.updateRaindrop(raindrop.item._id, {
		excerpt: "updateRaindrop",
		tags: ["raindrop"],
		highlights: [{ text: "ignore", note: "" }],
	});

	generateTypeTest({ type: "UpdateRaindropResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 1,
		    "_id": 905640723,
		    "collection": {
		      "$id": -99,
		      "$ref": "collections",
		      "oid": -99,
		    },
		    "collectionId": -99,
		    "cover": "",
		    "created": "2024-11-21T12:20:30.457Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "raindrop.io",
		    "excerpt": "updateRaindrop",
		    "highlights": [
		      {
		        "_id": "673f258fa1d8200efe798413",
		        "created": "2024-11-21T12:20:31.682Z",
		        "creatorRef": 2067190,
		        "lastUpdate": "2024-11-21T12:20:31.683Z",
		        "note": "",
		        "text": "ignore",
		      },
		    ],
		    "lastUpdate": "2024-11-21T12:20:31.683Z",
		    "link": "https://raindrop.io",
		    "media": [],
		    "note": "",
		    "removed": true,
		    "sort": 905640723,
		    "tags": [
		      "raindrop",
		    ],
		    "title": "updateRaindrop",
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

it("removeRaindrop", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const raindrop = await setupTools.createRaindrop();

	const response = await client.raindrop.removeRaindrop(raindrop.item._id);

	generateTypeTest({ type: "RemoveRaindropResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "_id": 905641075,
		    "collection": {
		      "$id": -99,
		      "$ref": "collections",
		      "oid": -99,
		    },
		    "collectionId": -99,
		    "cover": "",
		    "created": "2024-11-21T12:20:32.026Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "lastUpdate": "2024-11-21T12:20:32.419Z",
		    "link": "https://raindrop.io",
		    "media": [],
		    "note": "",
		    "order": 0,
		    "removed": true,
		    "sort": 905641075,
		    "tags": [],
		    "title": "removeRaindrop",
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

it("uploadFile", async ({ client, expect, generateTypeTest }) => {
	const cover = await fs.openAsBlob(path.join(__dirname, "./cover.png"));

	// @ts-expect-error File is not Blob
	const response = await client.raindrop.uploadFile(cover, 0, {
		headers: {
			"Content-Type": "multipart/form-data; boundary=0000000000",
		},
	});

	generateTypeTest({ type: "UploadFileResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 0,
		    "_id": 905641108,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://rdl.ink/render/https%3A%2F%2Fup.raindrop.io%2Fraindrop%2Ffiles%2F905%2F641%2F108%2Fblob",
		    "created": "2024-11-21T12:20:33.223Z",
		    "creatorRef": 2067190,
		    "domain": "up.raindrop.io",
		    "excerpt": "",
		    "file": {
		      "name": "blob",
		      "size": 111258,
		      "type": "image/png",
		    },
		    "lastUpdate": "2024-11-21T12:20:33.355Z",
		    "link": "https://api.raindrop.io/v2/raindrop/905641108/file?type=image/png",
		    "media": [],
		    "note": "",
		    "removed": false,
		    "sort": 905641108,
		    "tags": [],
		    "title": "blob",
		    "type": "image",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		  },
		  "result": true,
		}
	`);
});

it("uploadRaindropCover", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const raindrop = await setupTools.createRaindrop();
	const cover = await fs.openAsBlob(path.join(__dirname, "./cover.png"));

	const response = await client.raindrop.uploadRaindropCover(
		raindrop.item._id,
		// @ts-expect-error File is not Blob
		cover,
		{
			headers: {
				"Content-Type": "multipart/form-data; boundary=0000000000",
			},
		},
	);

	generateTypeTest({ type: "UploadRaindropCoverResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 1,
		    "_id": 905641112,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://up.raindrop.io/raindrop/thumbs/905/641/112/1732191634487.png",
		    "created": "2024-11-21T12:20:33.724Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "lastUpdate": "2024-11-21T12:20:34.561Z",
		    "link": "https://raindrop.io",
		    "media": [
		      {
		        "link": "https://up.raindrop.io/raindrop/thumbs/905/641/112/1732191634487.png",
		        "type": "image",
		      },
		    ],
		    "note": "",
		    "removed": false,
		    "sort": 905641112,
		    "tags": [],
		    "title": "uploadRaindropCover",
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

// ? Pro feature
it.skip("getPermanentCopy");

// ? Pro feature
it.skip("suggestForNewBookmark");

// ? Pro feature
it.skip("suggestForExistingBookmark");

it("getRaindrops", async ({ setupTools, client, expect, generateTypeTest }) => {
	const collection = await setupTools.createCollection();
	await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
	});
	await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
	});
	await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
	});

	const response = await client.raindrop.getRaindrops(collection.item._id);

	generateTypeTest({ type: "GetRaindropsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "collectionId": 49867723,
		  "count": 3,
		  "items": [
		    {
		      "_id": 905641244,
		      "collection": {
		        "$id": 49867723,
		        "$ref": "collections",
		        "oid": 49867723,
		      },
		      "collectionId": 49867723,
		      "cover": "",
		      "created": "2024-11-21T12:20:36.321Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "avatar": "",
		        "email": "",
		        "name": "miyil99106",
		      },
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2024-11-21T12:20:36.321Z",
		      "link": "https://raindrop.io",
		      "media": [],
		      "note": "",
		      "removed": false,
		      "sort": 905641244,
		      "tags": [],
		      "title": "getRaindrops",
		      "type": "link",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		    },
		    {
		      "_id": 905641135,
		      "collection": {
		        "$id": 49867723,
		        "$ref": "collections",
		        "oid": 49867723,
		      },
		      "collectionId": 49867723,
		      "cover": "",
		      "created": "2024-11-21T12:20:35.930Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "avatar": "",
		        "email": "",
		        "name": "miyil99106",
		      },
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2024-11-21T12:20:35.931Z",
		      "link": "https://raindrop.io",
		      "media": [],
		      "note": "",
		      "removed": false,
		      "sort": 905641135,
		      "tags": [],
		      "title": "getRaindrops",
		      "type": "link",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		    },
		    {
		      "_id": 905641127,
		      "collection": {
		        "$id": 49867723,
		        "$ref": "collections",
		        "oid": 49867723,
		      },
		      "collectionId": 49867723,
		      "cover": "",
		      "created": "2024-11-21T12:20:35.379Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "avatar": "",
		        "email": "",
		        "name": "miyil99106",
		      },
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2024-11-21T12:20:35.379Z",
		      "link": "https://raindrop.io",
		      "media": [],
		      "note": "",
		      "removed": false,
		      "sort": 905641127,
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

it("updateRaindrops", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	const raindrop = await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
	});

	const response = await client.raindrop.updateRaindrops(collection.item._id, {
		ids: [raindrop.item._id],
		tags: ["rainy-days"],
	});

	generateTypeTest({ type: "UpdateRaindropsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "modified": 1,
		  "result": true,
		}
	`);
});

it("removeRaindrops", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	const raindrop = await setupTools.createRaindrop({
		collection: { $id: collection.item._id },
	});

	const response = await client.raindrop.removeRaindrops(
		collection.item._id,
		"",
		{
			ids: [raindrop.item._id],
		},
	);

	generateTypeTest({ type: "RemoveRaindropsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "modified": 1,
		  "result": true,
		}
	`);
});

it("createRaindrops", async ({ client, expect, generateTypeTest }) => {
	const response = await client.raindrop.createRaindrops({
		items: [
			{
				link: "https://raindrop.io",
				media: [
					{
						link: "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
					},
				],
				tags: ["raindrop"],
			},
		],
	});

	generateTypeTest({ type: "CreateRaindropsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "__v": 0,
		      "_id": 905641270,
		      "collection": {
		        "$id": -1,
		        "$ref": "collections",
		        "oid": -1,
		      },
		      "collectionId": -1,
		      "cover": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		      "created": "2024-11-21T12:20:39.773Z",
		      "creatorRef": 2067190,
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2024-11-21T12:20:39.773Z",
		      "link": "https://raindrop.io",
		      "media": [
		        {
		          "link": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		          "type": "image",
		        },
		      ],
		      "note": "",
		      "removed": false,
		      "sort": 905641270,
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
		  ],
		  "result": true,
		}
	`);
});
