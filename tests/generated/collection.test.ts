import { it } from "^/tests/_helpers/vitest";

it("getRootCollections", async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.getRootCollections();
	generateTypeTest({
		type: "CollectionResponseMany",
	});
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": 44887441,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-06-07T13:21:31.633Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-06-07T13:21:31.633Z",
		      "lastUpdate": "2024-06-07T13:21:31.633Z",
		      "public": true,
		      "slug": "create-collection",
		      "sort": 0,
		      "title": "createCollection",
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
	generateTypeTest({
		type: "Response",
	});
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});

it("removeCollections", async ({ client, expect, generateTypeTest }) => {
	const collection = await client.collection.createCollection({
		view: "list",
		title: "removeCollections",
		sort: 0,
		public: true,
		parent: {
			$ref: "collections",
			$id: 0,
			oid: 0,
		},
		cover: ["string"],
	});

	const response = await client.collection.removeCollections({
		// biome-ignore lint/style/noNonNullAssertion: PASS
		ids: [collection.data.item!._id],
	});
	generateTypeTest({
		type: "RemoveCollections200Response",
	});
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "ids": [
		    44887480,
		  ],
		  "modified": 1,
		  "result": true,
		}
	`);
});

it("getChildCollections", async ({
	client,
	expect,
	generateTypeTest,
	resetData: _,
}) => {
	const parent = await client.collection.createCollection({
		view: "list",
		title: "createCollection",
		sort: 0,
		public: true,
		parent: {
			$ref: "collections",
			$id: 0,
			oid: 0,
		},
		cover: [],
	});
	await client.collection.createCollection({
		view: "list",
		title: "nestedCollection",
		sort: 0,
		public: true,
		parent: {
			$ref: "collections",
			// biome-ignore lint/style/noNonNullAssertion: PASS
			$id: parent.data.item!._id,
			oid: 0,
		},
		cover: [],
	});

	const response = await client.collection.getChildCollections();
	generateTypeTest({
		type: "CollectionResponseMany",
	});
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": 44998269,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 0,
		      "cover": [],
		      "created": "2024-06-10T12:28:58.050Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-06-10T12:28:58.050Z",
		      "lastUpdate": "2024-06-10T12:28:58.050Z",
		      "parent": {
		        "$id": 44998268,
		        "$ref": "collections",
		      },
		      "public": true,
		      "slug": "nested-collection",
		      "sort": 0,
		      "title": "nestedCollection",
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

it.todo("getCollection");
it.todo("updateCollection");
it.todo("removeCollection");
it.todo("createCollection");
it.todo("uploadCollectionCover");
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
