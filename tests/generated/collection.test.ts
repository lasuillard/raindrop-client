import { it } from "^/tests/_helpers/vitest";
import fs from "node:fs";
import path from "node:path";

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
		      "_id": 57170609,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2025-07-02T05:27:19.282Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2025-07-02T05:27:19.282Z",
		      "lastUpdate": "2025-07-02T05:27:19.282Z",
		      "parent": null,
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
		    {
		      "_id": 57170615,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2025-07-02T05:28:17.813Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2025-07-02T05:28:17.813Z",
		      "lastUpdate": "2025-07-02T05:28:17.813Z",
		      "parent": null,
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
		      "_id": 57170616,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2025-07-02T05:28:17.931Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2025-07-02T05:28:17.930Z",
		      "lastUpdate": "2025-07-02T05:28:17.931Z",
		      "parent": null,
		      "public": false,
		      "slug": "a",
		      "sort": 0,
		      "title": "A",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		    {
		      "_id": 57170618,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2025-07-02T05:28:18.703Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2025-07-02T05:28:18.703Z",
		      "lastUpdate": "2025-07-02T05:28:18.703Z",
		      "parent": null,
		      "public": false,
		      "slug": "b",
		      "sort": 0,
		      "title": "B",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		    {
		      "_id": 57170620,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "color": "#da1c24",
		      "count": 0,
		      "cover": [
		        "https://up.raindrop.io/collection/thumbs/571/706/20/e0baf93e1f297abd2c2baabee2ec3cc1.png",
		      ],
		      "created": "2025-07-02T05:28:19.110Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2025-07-02T05:28:19.110Z",
		      "lastUpdate": "2025-07-02T05:28:19.110Z",
		      "parent": null,
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
		    57170528,
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
	resetData: _,
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
		      "_id": 57170609,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2025-07-02T05:27:19.282Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2025-07-02T05:27:19.282Z",
		      "lastUpdate": "2025-07-02T05:27:19.282Z",
		      "parent": null,
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
		    {
		      "_id": 57170610,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2025-07-02T05:27:19.711Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2025-07-02T05:27:19.711Z",
		      "lastUpdate": "2025-07-02T05:27:19.711Z",
		      "parent": {
		        "$id": 57170609,
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
		    "_id": 57170532,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2025-07-02T05:21:20.063Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2025-07-02T05:21:20.062Z",
		    "lastUpdate": "2025-07-02T05:21:20.063Z",
		    "parent": null,
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
		    "_id": 57170533,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2025-07-02T05:21:21.636Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2025-07-02T05:21:21.635Z",
		    "lastUpdate": "2025-07-02T05:21:22.007Z",
		    "parent": null,
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
		    "_id": 57170535,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2025-07-02T05:21:23.009Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2025-07-02T05:21:23.009Z",
		    "lastUpdate": "2025-07-02T05:21:23.009Z",
		    "parent": null,
		    "public": false,
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

it("uploadCollectionCover", async ({
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
		{
			headers: {
				"Content-Type": "multipart/form-data; boundary=0000000000",
			},
		},
	);

	generateTypeTest({ type: "UploadCollectionCoverResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 1,
		    "_id": 57171605,
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
		      "https://up.raindrop.io/collection/thumbs/571/716/05/1751439490570.png",
		    ],
		    "created": "2025-07-02T06:58:09.614Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2025-07-02T06:58:09.613Z",
		    "lastUpdate": "2025-07-02T06:58:10.664Z",
		    "parent": null,
		    "public": false,
		    "slug": "upload-collection-cover",
		    "sort": 0,
		    "title": "uploadCollectionCover",
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
		    57170537,
		    57170538,
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
		  "count": 15,
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
		      "count": 3,
		    },
		    {
		      "_id": -1,
		      "count": 3,
		    },
		    {
		      "_id": -99,
		      "count": 0,
		    },
		  ],
		  "meta": {
		    "_id": 2067190,
		    "changedBookmarksDate": "2025-07-02T05:21:27.325Z",
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
		  "link": "https://app.raindrop.io/join/f7530cfd-77d8-40bc-867b-32e2d6841ba3",
		  "result": true,
		  "token": "<REDACTED>",
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
		          "png": "https://icons.rdl.ink/pack/fxemoji-emojis/400795-256.png",
		        },
		        {
		          "png": "https://icons.rdl.ink/pack/twemoji-emojis/407533-256.png",
		        },
		        {
		          "png": "https://icons.rdl.ink/pack/things/strawberry-256.png",
		        },
		        {
		          "png": "https://icons.rdl.ink/pack/fruits-and-vegetables-tiny/474529-256.png",
		        },
		        {
		          "png": "https://icons.rdl.ink/pack/icons8-color/18041-256.png",
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
