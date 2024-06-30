import fs from "node:fs";
import path from "node:path";
import { it } from "^/tests/_helpers/vitest";

it("getRootCollections", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	await setupTools.createCollection();
	await setupTools.createCollection({
		cover: [
			"https://png.pngtree.com/png-vector/20221217/ourmid/pngtree-example-sample-grungy-stamp-vector-png-image_15560590.png",
		],
	});

	const response = await client.collection.getRootCollections();

	generateTypeTest({ type: "GetRootCollectionsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": 45429359,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-06-25T12:01:49.350Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-06-25T12:01:49.349Z",
		      "lastUpdate": "2024-06-25T12:01:49.350Z",
		      "public": false,
		      "slug": "get-root-collections",
		      "sort": 0,
		      "title": "getRootCollections",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		    {
		      "_id": 45429361,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "color": "#da1f26",
		      "count": 0,
		      "cover": [
		        "https://up.raindrop.io/collection/thumbs/454/293/61/e0baf93e1f297abd2c2baabee2ec3cc1.png",
		      ],
		      "created": "2024-06-25T12:01:49.799Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-06-25T12:01:49.798Z",
		      "lastUpdate": "2024-06-25T12:01:49.799Z",
		      "public": false,
		      "slug": "get-root-collections",
		      "sort": 0,
		      "title": "getRootCollections",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		  ],
		  "result": true,
		}
	`);
});

it("reorderAllCollections", async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.reorderAllCollections();

	generateTypeTest({ type: "SimpleResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});

it("removeCollections", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();

	const response = await client.collection.removeCollections({
		ids: [collection.item._id],
	});

	generateTypeTest({ type: "RemoveCollectionsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "ids": [
		    45429364,
		  ],
		  "modified": 1,
		  "result": true,
		}
	`);
});

it("getChildCollections", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const parent = await setupTools.createCollection();
	await setupTools.createCollection({
		parent: {
			$ref: "collections",
			$id: parent.item._id,
			oid: 0,
		},
	});

	const response = await client.collection.getChildCollections();

	generateTypeTest({ type: "GetChildCollectionsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": 45429367,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-06-25T12:01:53.038Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-06-25T12:01:53.037Z",
		      "lastUpdate": "2024-06-25T12:01:53.038Z",
		      "parent": {
		        "$id": 45429366,
		        "$ref": "collections",
		      },
		      "public": false,
		      "slug": "get-child-collections",
		      "sort": 0,
		      "title": "getChildCollections",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		  ],
		  "result": true,
		}
	`);
});

it("getCollection", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();

	const response = await client.collection.getCollection(collection.item._id);

	generateTypeTest({ type: "GetCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "_id": 45429369,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-06-25T12:01:53.968Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-06-25T12:01:53.968Z",
		    "lastUpdate": "2024-06-25T12:01:53.968Z",
		    "public": false,
		    "slug": "get-collection",
		    "sort": 0,
		    "title": "getCollection",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		    "view": "list",
		  },
		  "result": true,
		}
	`);
});

it("updateCollection", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();

	const response = await client.collection.updateCollection(
		collection.item._id,
		{
			title: "updatedCollection",
			cover: [],
			view: "list",
			sort: 0,
			public: true,
			expanded: true,
		},
	);

	generateTypeTest({ type: "UpdateCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "_id": 45429372,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-06-25T12:01:54.924Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-06-25T12:01:54.924Z",
		    "lastUpdate": "2024-06-25T12:01:55.443Z",
		    "public": true,
		    "slug": "updated-collection",
		    "sort": 0,
		    "title": "updatedCollection",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		    "view": "list",
		  },
		  "result": true,
		}
	`);
});

it("removeCollection", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();

	const response = await client.collection.removeCollection(
		collection.item._id,
	);

	generateTypeTest({ type: "SimpleResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});

it("createCollection", async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.createCollection({
		view: "list",
		title: "createCollectionTest",
		sort: 0,
		public: true,
		cover: [],
	});

	generateTypeTest({ type: "CreateCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 0,
		    "_id": 45429375,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-06-25T12:01:56.802Z",
		    "creatorRef": 2067190,
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-06-25T12:01:56.802Z",
		    "lastUpdate": "2024-06-25T12:01:56.802Z",
		    "public": true,
		    "slug": "create-collection-test",
		    "sort": 0,
		    "title": "createCollectionTest",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		    "view": "list",
		  },
		  "result": true,
		}
	`);
});

// ! FIXME: Polly.js record hash for file upload keep changing
it.skip("uploadCollectionCover", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();
	const cover = await fs.openAsBlob(path.join(__dirname, "./cover.png"));

	const response = await client.collection.uploadCollectionCover(
		collection.item._id,
		// @ts-expect-error File is not Blob
		cover,
	);
	generateTypeTest({ type: "UploadCollectionCoverResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 1,
		    "_id": 45400966,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "color": "#cc0404",
		    "count": 0,
		    "cover": [
		      "https://up.raindrop.io/collection/thumbs/454/009/66/1719229529995.png",
		    ],
		    "created": "2024-06-24T11:45:04.466Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-06-24T11:45:04.465Z",
		    "lastUpdate": "2024-06-24T11:45:30.121Z",
		    "public": false,
		    "slug": "test-upload-collection-cover",
		    "sort": 0,
		    "title": "test_uploadCollectionCover",
		    "user": {
		      "$id": 2067190,
		      "$ref": "users",
		    },
		    "view": "list",
		  },
		  "result": true,
		}
	`);
});

it("mergeCollections", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const one = await setupTools.createCollection();
	const two = await setupTools.createCollection();
	const three = await setupTools.createCollection();

	const response = await client.collection.mergeCollections({
		ids: [one.item._id, two.item._id],
		to: three.item._id,
	});

	generateTypeTest({ type: "MergeCollectionsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "ids": [
		    45429376,
		    45429378,
		  ],
		  "modified": 2,
		  "result": true,
		}
	`);
});

it("removeAllEmptyCollections", async ({
	client,
	expect,
	generateTypeTest,
}) => {
	const response = await client.collection.removeAllEmptyCollections();

	generateTypeTest({ type: "RemoveAllEmptyCollectionsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "count": 8,
		  "result": true,
		}
	`);
});

it("emptyTrash", async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.emptyTrash();

	generateTypeTest({ type: "SimpleResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});

it("getSystemCollectionStats", async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.getSystemCollectionStats();

	generateTypeTest({ type: "GetSystemCollectionStatsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": 0,
		      "count": 0,
		    },
		    {
		      "_id": -1,
		      "count": 0,
		    },
		    {
		      "_id": -99,
		      "count": 0,
		    },
		  ],
		  "meta": {
		    "_id": 2067190,
		    "changedBookmarksDate": "2024-06-25T12:10:22.598Z",
		    "pro": false,
		  },
		  "result": true,
		}
	`);
});

it.skip("getCollaborators");

it("shareCollection", async ({
	setupTools,
	client,
	expect,
	generateTypeTest,
}) => {
	const collection = await setupTools.createCollection();

	const response = await client.collection.shareCollection(
		collection.item._id,
		{
			emails: ["example@example.com"],
			role: "viewer",
		},
	);

	generateTypeTest({ type: "ShareCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "emails": [
		    "example@example.com",
		  ],
		  "result": true,
		}
	`);
});

it.skip("unshareOrLeaveCollection");
it.skip("changeCollaboratorAccessLevel");
it.skip("deleteCollaborator");
it.skip("acceptInvitation");

it("searchCovers", async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.searchCovers("strawberry");

	generateTypeTest({ type: "SearchCoversResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "icons": [
		        {
		          "png": "https://icon-finder.fly.dev/pack/fxemoji-emojis/400795-256.png",
		        },
		        {
		          "png": "https://icon-finder.fly.dev/pack/twemoji-emojis/407533-256.png",
		        },
		        {
		          "png": "https://icon-finder.fly.dev/pack/fruits-and-vegetables-tiny/474529-256.png",
		        },
		        {
		          "png": "https://icon-finder.fly.dev/pack/icons8-color/18041-256.png",
		        },
		      ],
		      "title": "Icons",
		    },
		  ],
		  "result": true,
		}
	`);
});

it("getFeaturedCovers", async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.getFeaturedCovers();

	generateTypeTest({ type: "GetFeaturedCoversResponse" });
	expect(response.data).toMatchSnapshot(); // Response is too large
});
