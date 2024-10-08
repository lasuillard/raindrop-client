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
		    "_id": 842212819,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		    "created": "2024-08-27T11:15:37.601Z",
		    "creatorRef": 2067190,
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "lastUpdate": "2024-08-27T11:15:37.601Z",
		    "link": "https://raindrop.io",
		    "media": [
		      {
		        "link": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		        "type": "image",
		      },
		    ],
		    "note": "",
		    "removed": false,
		    "sort": 842212819,
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
		    "_id": 842212820,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		    "created": "2024-08-27T11:15:37.986Z",
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
		        "_id": "66cdb5593b3023553716f908",
		        "created": "2024-08-27T11:15:37.986Z",
		        "creatorRef": {
		          "_id": 2067190,
		          "avatar": "",
		          "email": "",
		          "name": "miyil99106",
		        },
		        "lastUpdate": "2024-08-27T11:15:37.986Z",
		        "note": "",
		        "text": "ignore",
		      },
		    ],
		    "lastUpdate": "2024-08-27T11:15:37.986Z",
		    "link": "https://raindrop.io",
		    "media": [
		      {
		        "link": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		        "type": "image",
		      },
		    ],
		    "note": "",
		    "removed": false,
		    "sort": 842212820,
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
		    "_id": 842212828,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "",
		    "created": "2024-08-27T11:15:38.725Z",
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
		        "_id": "66cdb55b0e9282cf678b5912",
		        "created": "2024-08-27T11:15:39.096Z",
		        "creatorRef": 2067190,
		        "lastUpdate": "2024-08-27T11:15:39.096Z",
		        "note": "",
		        "text": "ignore",
		      },
		    ],
		    "lastUpdate": "2024-08-27T11:15:39.096Z",
		    "link": "https://raindrop.io",
		    "media": [],
		    "note": "",
		    "removed": false,
		    "sort": 842212828,
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
		    "_id": 842212833,
		    "collection": {
		      "$id": -99,
		      "$ref": "collections",
		      "oid": -99,
		    },
		    "collectionId": -99,
		    "cover": "",
		    "created": "2024-08-27T11:15:39.454Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "lastUpdate": "2024-08-27T11:15:39.831Z",
		    "link": "https://raindrop.io",
		    "media": [],
		    "note": "",
		    "order": 0,
		    "removed": true,
		    "sort": 842212833,
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
		    "_id": 842212838,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://rdl.ink/render/https%3A%2F%2Fup.raindrop.io%2Fraindrop%2Ffiles%2F842%2F212%2F838%2Fblob",
		    "created": "2024-08-27T11:15:40.683Z",
		    "creatorRef": 2067190,
		    "domain": "up.raindrop.io",
		    "excerpt": "",
		    "file": {
		      "name": "blob",
		      "size": 111258,
		      "type": "image/png",
		    },
		    "lastUpdate": "2024-08-27T11:15:40.795Z",
		    "link": "https://api.raindrop.io/v2/raindrop/842212838/file?type=image/png",
		    "media": [],
		    "note": "",
		    "removed": false,
		    "sort": 842212838,
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
		    "_id": 842212841,
		    "collection": {
		      "$id": -1,
		      "$ref": "collections",
		      "oid": -1,
		    },
		    "collectionId": -1,
		    "cover": "https://up.raindrop.io/raindrop/thumbs/842/212/841/1724757341956.png",
		    "created": "2024-08-27T11:15:41.155Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "avatar": "",
		      "email": "",
		      "name": "miyil99106",
		    },
		    "domain": "raindrop.io",
		    "excerpt": "",
		    "lastUpdate": "2024-08-27T11:15:42.099Z",
		    "link": "https://raindrop.io",
		    "media": [
		      {
		        "link": "https://up.raindrop.io/raindrop/thumbs/842/212/841/1724757341956.png",
		        "type": "image",
		      },
		    ],
		    "note": "",
		    "removed": false,
		    "sort": 842212841,
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
		  "collectionId": 47216389,
		  "count": 3,
		  "items": [
		    {
		      "_id": 842212854,
		      "collection": {
		        "$id": 47216389,
		        "$ref": "collections",
		        "oid": 47216389,
		      },
		      "collectionId": 47216389,
		      "cover": "",
		      "created": "2024-08-27T11:15:43.630Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "avatar": "",
		        "email": "",
		        "name": "miyil99106",
		      },
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2024-08-27T11:15:43.630Z",
		      "link": "https://raindrop.io",
		      "media": [],
		      "note": "",
		      "removed": false,
		      "sort": 842212854,
		      "tags": [],
		      "title": "getRaindrops",
		      "type": "link",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		    },
		    {
		      "_id": 842212849,
		      "collection": {
		        "$id": 47216389,
		        "$ref": "collections",
		        "oid": 47216389,
		      },
		      "collectionId": 47216389,
		      "cover": "",
		      "created": "2024-08-27T11:15:43.252Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "avatar": "",
		        "email": "",
		        "name": "miyil99106",
		      },
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2024-08-27T11:15:43.252Z",
		      "link": "https://raindrop.io",
		      "media": [],
		      "note": "",
		      "removed": false,
		      "sort": 842212849,
		      "tags": [],
		      "title": "getRaindrops",
		      "type": "link",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		    },
		    {
		      "_id": 842212847,
		      "collection": {
		        "$id": 47216389,
		        "$ref": "collections",
		        "oid": 47216389,
		      },
		      "collectionId": 47216389,
		      "cover": "",
		      "created": "2024-08-27T11:15:42.873Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "avatar": "",
		        "email": "",
		        "name": "miyil99106",
		      },
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2024-08-27T11:15:42.873Z",
		      "link": "https://raindrop.io",
		      "media": [],
		      "note": "",
		      "removed": false,
		      "sort": 842212847,
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
		      "_id": 842212863,
		      "collection": {
		        "$id": -1,
		        "$ref": "collections",
		        "oid": -1,
		      },
		      "collectionId": -1,
		      "cover": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		      "created": "2024-08-27T11:15:46.822Z",
		      "creatorRef": 2067190,
		      "domain": "raindrop.io",
		      "excerpt": "",
		      "highlights": [],
		      "lastUpdate": "2024-08-27T11:15:46.822Z",
		      "link": "https://raindrop.io",
		      "media": [
		        {
		          "link": "https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg",
		          "type": "image",
		        },
		      ],
		      "note": "",
		      "removed": false,
		      "sort": 842212863,
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
