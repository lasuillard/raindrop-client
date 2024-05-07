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
