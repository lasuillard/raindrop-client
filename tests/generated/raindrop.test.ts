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
		    "_id": 809246844,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "",
		    "created": "2024-06-30T05:32:32.523Z",
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
		        "_id": "6680edf0f378b723e3bfccad",
		        "created": "2024-06-30T05:32:32.890Z",
		        "creatorRef": 2067190,
		        "lastUpdate": "2024-06-30T05:32:32.890Z",
		        "note": "",
		        "text": "ignore",
		      },
		    ],
		    "lastUpdate": "2024-06-30T05:32:32.890Z",
		    "link": "https://raindrop.io",
		    "media": [],
		    "note": "",
		    "removed": false,
		    "sort": 809246844,
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
		    "_id": 809246845,
		    "collection": {
		      "$id": -99,
		      "$ref": "collections",
		      "oid": -99,
		    },
		    "collectionId": -99,
		    "cover": "",
		    "created": "2024-06-30T05:32:33.292Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "lastUpdate": "2024-06-30T05:32:33.677Z",
		    "link": "https://raindrop.io",
		    "media": [],
		    "note": "",
		    "order": 0,
		    "removed": true,
		    "sort": 809246845,
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
		    "_id": 809582809,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://rdl.ink/render/https%3A%2F%2Fup.raindrop.io%2Fraindrop%2Ffiles%2F809%2F582%2F809%2Fblob",
		    "created": "2024-06-30T13:57:57.598Z",
		    "creatorRef": 2067190,
		    "domain": "up.raindrop.io",
		    "excerpt": "",
		    "file": {
		      "name": "blob",
		      "size": 111258,
		      "type": "image/png",
		    },
		    "lastUpdate": "2024-06-30T13:57:57.709Z",
		    "link": "https://api.raindrop.io/v2/raindrop/809582809/file?type=image/png",
		    "media": [],
		    "note": "",
		    "removed": false,
		    "sort": 809582809,
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
		    "_id": 809580615,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://up.raindrop.io/raindrop/thumbs/809/580/615/1719754936977.png",
		    "created": "2024-06-30T13:42:16.020Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "lastUpdate": "2024-06-30T13:42:17.066Z",
		    "link": "https://raindrop.io",
		    "media": [
		      {
		        "link": "https://up.raindrop.io/raindrop/thumbs/809/580/615/1719754936977.png",
		        "type": "image",
		      },
		    ],
		    "note": "",
		    "removed": false,
		    "sort": 809580615,
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
		      "_id": 809246855,
		      "collection": {
		        "$id": -1,
		        "$ref": "collections",
		        "oid": -1,
		      },
		      "collectionId": -1,
		      "cover": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		      "created": "2024-06-30T05:32:36.811Z",
		      "creatorRef": 2067190,
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2024-06-30T05:32:36.811Z",
		      "link": "https://raindrop.io",
		      "media": [
		        {
		          "link": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		          "type": "image",
		        },
		      ],
		      "note": "",
		      "removed": false,
		      "sort": 809246855,
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
