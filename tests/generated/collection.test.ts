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
		      "_id": 49869389,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:56:13.943Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:56:13.943Z",
		      "lastUpdate": "2024-11-21T12:56:13.943Z",
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
		      "_id": 49869393,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:56:14.805Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:56:14.805Z",
		      "lastUpdate": "2024-11-21T12:56:14.805Z",
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
		      "_id": 49869394,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:56:14.924Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:56:14.923Z",
		      "lastUpdate": "2024-11-21T12:56:14.924Z",
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
		      "_id": 49869398,
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
		        "https://up.raindrop.io/collection/thumbs/498/693/98/e0baf93e1f297abd2c2baabee2ec3cc1.png",
		      ],
		      "created": "2024-11-21T12:56:15.450Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:56:15.449Z",
		      "lastUpdate": "2024-11-21T12:56:15.450Z",
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
		      "_id": 49869399,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:56:15.636Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:56:15.634Z",
		      "lastUpdate": "2024-11-21T12:56:15.636Z",
		      "parent": null,
		      "public": false,
		      "slug": "fetch-full-pagination-results",
		      "sort": 0,
		      "title": "fetch full pagination results",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		    {
		      "_id": 49869402,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:56:15.909Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:56:15.908Z",
		      "lastUpdate": "2024-11-21T12:56:15.909Z",
		      "parent": null,
		      "public": false,
		      "slug": "get-tags-in-collection",
		      "sort": 0,
		      "title": "getTagsInCollection",
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
		    49869405,
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
		      "_id": 49869399,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 1,
		      "cover": [],
		      "created": "2024-11-21T12:56:15.636Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:56:18.164Z",
		      "lastUpdate": "2024-11-21T12:56:18.164Z",
		      "parent": null,
		      "public": false,
		      "slug": "fetch-full-pagination-results",
		      "sort": 0,
		      "title": "fetch full pagination results",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		    {
		      "_id": 49869404,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:56:16.128Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:56:16.127Z",
		      "lastUpdate": "2024-11-21T12:56:16.128Z",
		      "parent": null,
		      "public": false,
		      "slug": "c",
		      "sort": 0,
		      "title": "C",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		    {
		      "_id": 49869407,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:56:17.176Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:56:18.133Z",
		      "lastUpdate": "2024-11-21T12:56:18.134Z",
		      "parent": null,
		      "public": false,
		      "slug": "rename-or-merge-tags",
		      "sort": 0,
		      "title": "renameOrMergeTags",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		    {
		      "_id": 49869409,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:56:17.702Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:56:17.702Z",
		      "lastUpdate": "2024-11-21T12:56:17.702Z",
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
		      "_id": 49869411,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:56:18.115Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:56:18.115Z",
		      "lastUpdate": "2024-11-21T12:56:18.115Z",
		      "parent": {
		        "$id": 49869409,
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
		    "_id": 49869414,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-11-21T12:56:19.062Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-11-21T12:56:19.061Z",
		    "lastUpdate": "2024-11-21T12:56:19.062Z",
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
		    "_id": 49869420,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-11-21T12:56:19.857Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-11-21T12:56:19.857Z",
		    "lastUpdate": "2024-11-21T12:56:20.316Z",
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
		    "_id": 49869427,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-11-21T12:56:21.525Z",
		    "creatorRef": 2067190,
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-11-21T12:56:21.524Z",
		    "lastUpdate": "2024-11-21T12:56:21.525Z",
		    "parent": null,
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
		    "_id": 49869429,
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
		      "https://up.raindrop.io/collection/thumbs/498/694/29/1732193783042.png",
		    ],
		    "created": "2024-11-21T12:56:21.965Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-11-21T12:56:21.964Z",
		    "lastUpdate": "2024-11-21T12:56:23.112Z",
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
		    49869434,
		    49869435,
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
		  "count": 10,
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
		      "count": 12,
		    },
		    {
		      "_id": -1,
		      "count": 5,
		    },
		    {
		      "_id": -99,
		      "count": 0,
		    },
		  ],
		  "meta": {
		    "_id": 2067190,
		    "changedBookmarksDate": "2024-11-21T12:56:25.947Z",
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
		  "link": "https://app.raindrop.io/join/5c30ba41-8671-4d35-98de-d8dcfefed6cc",
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
		          "png": "https://icon-finder.fly.dev/pack/twemoji-emojis/407533-256.png",
		        },
		        {
		          "png": "https://icon-finder.fly.dev/pack/fxemoji-emojis/400795-256.png",
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
