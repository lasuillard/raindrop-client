import fs from "node:fs";
import path from "node:path";
import { it } from "^/tests/_helpers/vitest";
import type { Task } from "vitest";
import type { Raindrop } from "~/client";
import type { CreateCollectionResponse } from "~/generated";

// TODO: Refactor repeated test codes (e.g. test data creation); name from test ID
// TODO: Name file of recordings, typechecks to test name (they won't duplicate as OpenAPI operation ID should unique)
// TODO: Address type errors

// Helper function to create collection
async function createCollection(
	task: Task,
	client: Raindrop,
	args?: object,
): Promise<CreateCollectionResponse> {
	const response = await client.collection.createCollection({
		view: "list",
		title: task.name,
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
	await createCollection(task, client);
	await createCollection(task, client, {
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
		      "_id": 45403665,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-06-24T14:53:06.493Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-06-24T14:53:06.493Z",
		      "lastUpdate": "2024-06-24T14:53:06.493Z",
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
		      "_id": 45403666,
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
		        "https://up.raindrop.io/collection/thumbs/454/036/66/e0baf93e1f297abd2c2baabee2ec3cc1.png",
		      ],
		      "created": "2024-06-24T14:53:06.952Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-06-24T14:53:06.952Z",
		      "lastUpdate": "2024-06-24T14:53:06.952Z",
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
		ids: [collection.item._id],
	});

	generateTypeTest({ type: "RemoveCollectionsResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "ids": [
		    45403629,
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
		      "_id": 45403631,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-06-24T14:51:05.263Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-06-24T14:51:05.262Z",
		      "lastUpdate": "2024-06-24T14:51:05.263Z",
		      "parent": {
		        "$id": 45403630,
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
	task,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	const collection = await createCollection(task, client);

	const response = await client.collection.getCollection(collection.item._id);

	generateTypeTest({ type: "GetCollectionResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "_id": 45403632,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-06-24T14:51:07.076Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-06-24T14:51:07.075Z",
		    "lastUpdate": "2024-06-24T14:51:07.076Z",
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
	task,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	const collection = await createCollection(task, client);

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
		    "_id": 45403634,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-06-24T14:51:08.845Z",
		    "creatorRef": {
		      "_id": 2067190,
		      "email": "",
		      "name": "miyil99106",
		    },
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-06-24T14:51:08.845Z",
		    "lastUpdate": "2024-06-24T14:51:09.378Z",
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
	task,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	const collection = await createCollection(task, client);

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
		    "_id": 45403636,
		    "access": {
		      "draggable": true,
		      "for": 2067190,
		      "level": 4,
		      "root": false,
		    },
		    "author": true,
		    "count": 0,
		    "cover": [],
		    "created": "2024-06-24T14:51:12.312Z",
		    "creatorRef": 2067190,
		    "description": "",
		    "expanded": true,
		    "lastAction": "2024-06-24T14:51:12.312Z",
		    "lastUpdate": "2024-06-24T14:51:12.312Z",
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
	task,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	const collection = await createCollection(task, client);
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
	task,
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	const one = await createCollection(task, client);
	const two = await createCollection(task, client);
	const three = await createCollection(task, client);

	generateTypeTest({ type: "MergeCollectionsResponse" });
	const response = await client.collection.mergeCollections({
		ids: [one.item._id, two.item._id],
		to: three.item._id,
	});

	expect(response.data).toMatchInlineSnapshot(`
		{
		  "ids": [
		    45403638,
		    45403639,
		  ],
		  "modified": 2,
		  "result": true,
		}
	`);
});

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
