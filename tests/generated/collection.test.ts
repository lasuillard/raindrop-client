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
		      "_id": 49867700,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:20:31.973Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:20:31.973Z",
		      "lastUpdate": "2024-11-21T12:20:31.973Z",
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
		      "_id": 49867701,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 1,
		      "cover": [],
		      "created": "2024-11-21T12:20:32.358Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:20:32.824Z",
		      "lastUpdate": "2024-11-21T12:20:32.824Z",
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
		    {
		      "_id": 49867703,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:20:32.403Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:20:32.403Z",
		      "lastUpdate": "2024-11-21T12:20:32.403Z",
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
		      "_id": 49867705,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 1,
		      "cover": [],
		      "created": "2024-11-21T12:20:32.776Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:20:33.355Z",
		      "lastUpdate": "2024-11-21T12:20:33.355Z",
		      "parent": null,
		      "public": false,
		      "slug": "get-highlights-in-collection",
		      "sort": 0,
		      "title": "getHighlightsInCollection",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		    {
		      "_id": 49867707,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:20:32.840Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:20:32.840Z",
		      "lastUpdate": "2024-11-21T12:20:32.840Z",
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
		      "_id": 49867706,
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
		        "https://up.raindrop.io/collection/thumbs/498/677/06/e0baf93e1f297abd2c2baabee2ec3cc1.png",
		      ],
		      "created": "2024-11-21T12:20:32.816Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:20:32.816Z",
		      "lastUpdate": "2024-11-21T12:20:32.816Z",
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
		    49867719,
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
		      "_id": 49867706,
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
		        "https://up.raindrop.io/collection/thumbs/498/677/06/e0baf93e1f297abd2c2baabee2ec3cc1.png",
		      ],
		      "created": "2024-11-21T12:20:32.816Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:20:32.816Z",
		      "lastUpdate": "2024-11-21T12:20:32.816Z",
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
		      "_id": 49867710,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:20:33.683Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:20:34.822Z",
		      "lastUpdate": "2024-11-21T12:20:34.822Z",
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
		      "_id": 49867722,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:20:34.519Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:20:34.519Z",
		      "lastUpdate": "2024-11-21T12:20:34.519Z",
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
		      "_id": 49867723,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 1,
		      "cover": [],
		      "created": "2024-11-21T12:20:34.933Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:20:35.416Z",
		      "lastUpdate": "2024-11-21T12:20:35.416Z",
		      "parent": null,
		      "public": false,
		      "slug": "get-raindrops",
		      "sort": 0,
		      "title": "getRaindrops",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		    {
		      "_id": 49867725,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:20:35.010Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:20:35.010Z",
		      "lastUpdate": "2024-11-21T12:20:35.010Z",
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
		      "_id": 49867726,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 1,
		      "cover": [],
		      "created": "2024-11-21T12:20:35.150Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:20:35.624Z",
		      "lastUpdate": "2024-11-21T12:20:35.624Z",
		      "parent": null,
		      "public": false,
		      "slug": "remove-tags-from-collection",
		      "sort": 0,
		      "title": "removeTagsFromCollection",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		    {
		      "_id": 49867727,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-11-21T12:20:35.420Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-11-21T12:20:35.419Z",
		      "lastUpdate": "2024-11-21T12:20:35.420Z",
		      "parent": {
		        "$id": 49867725,
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
		    "_id": 49867729,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-11-21T12:20:36.231Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-11-21T12:20:36.231Z",
		    "lastUpdate": "2024-11-21T12:20:36.231Z",
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
		    "_id": 49867731,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-11-21T12:20:37.006Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-11-21T12:20:37.006Z",
		    "lastUpdate": "2024-11-21T12:20:37.435Z",
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
		    "_id": 49867737,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-11-21T12:20:38.709Z",
		    "creatorRef": 2067190,
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-11-21T12:20:38.709Z",
		    "lastUpdate": "2024-11-21T12:20:38.709Z",
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
		    "_id": 49867738,
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
		      "https://up.raindrop.io/collection/thumbs/498/677/38/1732191640063.png",
		    ],
		    "created": "2024-11-21T12:20:39.184Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-11-21T12:20:39.184Z",
		    "lastUpdate": "2024-11-21T12:20:40.144Z",
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
		    49867741,
		    49867743,
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
		  "count": 11,
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
		      "count": 9,
		    },
		    {
		      "_id": -1,
		      "count": 4,
		    },
		    {
		      "_id": -99,
		      "count": 0,
		    },
		  ],
		  "meta": {
		    "_id": 2067190,
		    "changedBookmarksDate": "2024-11-21T12:20:42.881Z",
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
		  "link": "https://app.raindrop.io/join/0f009803-a777-4bab-a861-c3f819063e7c",
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
