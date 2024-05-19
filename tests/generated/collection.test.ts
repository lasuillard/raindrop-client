import { it } from '^/tests/_helpers';

it('getRootCollections', async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.getRootCollections();
	generateTypeTest({
		type: 'CollectionResponseMany'
	});
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "items": [
		    {
		      "_id": 43450397,
		      "access": {
		        "draggable": true,
		        "for": 2067190,
		        "level": 4,
		        "root": false,
		      },
		      "author": true,
		      "count": 1,
		      "cover": [],
		      "created": "2024-04-21T07:39:41.503Z",
		      "creatorRef": {
		        "_id": 2067190,
		        "email": "",
		        "name": "miyil99106",
		      },
		      "description": "",
		      "expanded": true,
		      "lastAction": "2024-04-21T07:39:57.839Z",
		      "lastUpdate": "2024-04-21T07:39:57.839Z",
		      "public": false,
		      "slug": "testest",
		      "sort": 0,
		      "title": "testest",
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

it('reorderAllCollections', async ({ client, expect, generateTypeTest }) => {
	const response = await client.collection.reorderAllCollections();
	generateTypeTest({
		type: 'Response'
	});
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		}
	`);
});

it('removeCollections', async ({ client, expect, generateTypeTest }) => {
	const collection = await client.collection.createCollection({
		view: 'list',
		title: 'removeCollections',
		sort: 0,
		public: true,
		parent: {
			$ref: 'collections',
			$id: 0,
			oid: 0
		},
		cover: ['string']
	});

	const response = await client.collection.removeCollections({ ids: [collection.data.item!._id] });
	generateTypeTest({
		type: 'RemoveCollections200Response'
	});
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "ids": [
		    44291953,
		  ],
		  "modified": 1,
		  "result": true,
		}
	`);
});

it.todo('getChildCollections');
it.todo('getCollection');
it.todo('updateCollection');
it.todo('removeCollection');
it.todo('createCollection');
it.todo('uploadCollectionCover');
it.todo('mergeCollections');
it.todo('removeAllEmptyCollections');
it.todo('emptyTrash');
it.todo('getSystemCollectionStats');
it.todo('getCollaborators');
it.todo('shareCollection');
it.todo('unshareOrLeaveCollection');
it.todo('changeCollaboratorAccessLevel');
it.todo('deleteCollaborator');
it.todo('acceptInvitation');
it.todo('searchCovers');
it.todo('getFeaturedCovers');
