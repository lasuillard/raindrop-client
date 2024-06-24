import fs from "node:fs";
import path from "node:path";
import { it } from "^/tests/_helpers/vitest";
import type { Task } from "vitest";
import type { Raindrop } from "~/client";
import type { CollectionResponseOne } from "~/generated";

// TODO: Refactor repeated test codes (e.g. test data creation); name from test ID
// TODO: Name file of recordings, typechecks to test name (they won't duplicate as OpenAPI operation ID should unique)
// TODO: Address type errors

// Global counter for unique collection name (if test create multiple collections)
let _counter = 0;

// Helper function to create collection
async function createCollection(
	task: Task,
	client: Raindrop,
	args?: object,
): Promise<CollectionResponseOne> {
	const response = await client.collection.createCollection({
		view: "list",
		title: `${task.name}_${_counter++}`,
		sort: 0,
		public: false,
		parent: {
			$ref: "collections",
			$id: 0,
			oid: 0,
		},
		cover: [],
		...(args || {}),
	});
	return response.data;
}

it("getRootCollections", async ({
	task,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	await Promise.all([
		createCollection(task, client),
		createCollection(task, client, {
			cover: [
				"https://png.pngtree.com/png-vector/20221217/ourmid/pngtree-example-sample-grungy-stamp-vector-png-image_15560590.png",
			],
		}),
	]);

	const response = await client.collection.getRootCollections();

	generateTypeTest({ type: "GetRootCollectionsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": 45402789,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-06-24T13:47:14.393Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-06-24T13:47:14.393Z",
		      "lastUpdate": "2024-06-24T13:47:14.393Z",
		      "public": false,
		      "slug": "get-root-collections-0",
		      "sort": 0,
		      "title": "getRootCollections_0",
		      "user": {
		        "$id": 2067190,
		        "$ref": "users",
		      },
		      "view": "list",
		    },
		    {
		      "_id": 45402790,
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
		        "https://up.raindrop.io/collection/thumbs/454/027/90/e0baf93e1f297abd2c2baabee2ec3cc1.png",
		      ],
		      "created": "2024-06-24T13:47:14.443Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-06-24T13:47:14.443Z",
		      "lastUpdate": "2024-06-24T13:47:14.443Z",
		      "public": false,
		      "slug": "get-root-collections-1",
		      "sort": 0,
		      "title": "getRootCollections_1",
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

it("reorderAllCollections", async ({
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	const response = await client.collection.reorderAllCollections();

	generateTypeTest({ type: "SimpleResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});

it("removeCollections", async ({
	task,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	const collection = await createCollection(task, client);

	const response = await client.collection.removeCollections({
		// biome-ignore lint/style/noNonNullAssertion: PASS
		ids: [collection.item!._id],
	});
	generateTypeTest({ type: "RemoveCollectionsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "ids": [
		    45402791,
		  ],
		  "modified": 1,
		  "result": true,
		}
	`);
});

it("getChildCollections", async ({
	task,
	client,
	expect,
	generateTypeTest,
}) => {
	const parent = await createCollection(task, client);
	await createCollection(task, client, {
		parent: {
			$ref: "collections",
			// biome-ignore lint/style/noNonNullAssertion: PASS
			$id: parent.item!._id,
			oid: 0,
		},
	});

	const response = await client.collection.getChildCollections();
	generateTypeTest({ type: "GetChildCollectionsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": 45402793,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-06-24T13:47:19.304Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-06-24T13:47:19.303Z",
		      "lastUpdate": "2024-06-24T13:47:19.304Z",
		      "parent": {
		        "$id": 45402792,
		        "$ref": "collections",
		      },
		      "public": false,
		      "slug": "get-child-collections-4",
		      "sort": 0,
		      "title": "getChildCollections_4",
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
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	const existing = await client.collection.createCollection({
		view: "list",
		title: "testCollection",
		sort: 0,
		public: true,
		cover: [],
	});
	const response = await client.collection.getCollection(
		// biome-ignore lint/style/noNonNullAssertion: PASS
		existing.data.item!._id,
	);
	generateTypeTest({ type: "GetCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "_id": 45402794,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-06-24T13:47:21.119Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-06-24T13:47:21.118Z",
		    "lastUpdate": "2024-06-24T13:47:21.119Z",
		    "public": true,
		    "slug": "test-collection",
		    "sort": 0,
		    "title": "testCollection",
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
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	const existing = await client.collection.createCollection({
		view: "list",
		title: "testCollection",
		sort: 0,
		public: true,
		cover: [],
	});
	const response = await client.collection.updateCollection(
		// biome-ignore lint/style/noNonNullAssertion: PASS
		existing.data.item!._id,
		{
			title: "updatedCollection",
			cover: ["string"],
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
		    "__v": 1,
		    "_id": 45402795,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [
		      "",
		    ],
		    "created": "2024-06-24T13:47:22.893Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-06-24T13:47:22.893Z",
		    "lastUpdate": "2024-06-24T13:47:23.376Z",
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
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	const existing = await client.collection.createCollection({
		view: "list",
		title: "testCollection",
		sort: 0,
		public: true,
		cover: [],
	});
	const response = await client.collection.removeCollection(
		// biome-ignore lint/style/noNonNullAssertion: PASS
		existing.data.item!._id,
	);
	generateTypeTest({ type: "SimpleResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});

it("createCollection", async ({
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
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
		    "_id": 45402797,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-06-24T13:47:26.691Z",
		    "creatorRef": 2067190,
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-06-24T13:47:26.690Z",
		    "lastUpdate": "2024-06-24T13:47:26.691Z",
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
	client,
	expect,
	generateTypeTest,
}) => {
	const existing = await client.collection.createCollection({
		view: "list",
		title: "test_uploadCollectionCover",
		sort: 0,
		public: false,
		cover: [],
	});
	const cover = await fs.openAsBlob(path.join(__dirname, "./cover.png"));
	const response = await client.collection.uploadCollectionCover(
		// biome-ignore lint/style/noNonNullAssertion: PASS
		existing.data.item!._id,
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

it.todo("mergeCollections");
it.todo("removeAllEmptyCollections");
it.todo("emptyTrash");
it.todo("getSystemCollectionStats");
it.todo("getCollaborators");
it.todo("shareCollection");
it.todo("unshareOrLeaveCollection");
it.todo("changeCollaboratorAccessLevel");
it.todo("deleteCollaborator");
it.todo("acceptInvitation");
it.todo("searchCovers");
it.todo("getFeaturedCovers");
