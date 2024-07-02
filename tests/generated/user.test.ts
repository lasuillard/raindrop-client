import { it } from "^/tests/_helpers/vitest";

it("getCurrentUser", async ({ client, expect, generateTypeTest }) => {
	const response = await client.user.getCurrentUser();

	generateTypeTest({ type: "GetCurrentUserResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		  "user": {
		    "_id": 2067190,
		    "avatar": "",
		    "config": {
		      "acknowledge": [
		        "onboard_upgrade",
		      ],
		      "add_default_collection": -1,
		      "ai_suggestions": true,
		      "broken_level": "default",
		      "default_collection_view": "list",
		      "filters_hide": false,
		      "font_size": 0,
		      "last_collection": 45430305,
		      "nested_view_legacy": true,
		      "raindrops_buttons": [
		        "select",
		        "preview",
		        "edit",
		        "remove",
		      ],
		      "raindrops_hide": [
		        "list_excerpt",
		        "simple_excerpt",
		        "grid_excerpt",
		        "masonry_excerpt",
		      ],
		      "raindrops_search_by_score": true,
		      "raindrops_search_incollection": false,
		      "raindrops_sort": "title",
		    },
		    "email": "miyil99106@iliken.com",
		    "files": {
		      "lastCheckPoint": "2024-04-21T06:46:01.479Z",
		      "size": 100000000,
		      "used": 0,
		    },
		    "fullName": "miyil99106",
		    "groups": [
		      {
		        "collections": [],
		        "hidden": false,
		        "sort": 0,
		        "title": "raindrop-client",
		      },
		    ],
		    "lastAction": "2024-06-27T12:19:57.372Z",
		    "lastUpdate": "2024-06-27T12:19:57.372Z",
		    "lastVisit": "2024-06-26T11:07:37.787Z",
		    "name": "miyil99106",
		    "password": true,
		    "pro": false,
		    "registered": "2024-04-21T06:46:01.480Z",
		    "tfa": {
		      "enabled": false,
		    },
		  },
		}
	`);
});

it("updateCurrentUser", async ({ client, expect, generateTypeTest }) => {
	const response = await client.user.updateCurrentUser({
		groups: [
			{
				title: "raindrop-client",
			},
		],
	});

	generateTypeTest({ type: "UpdateCurrentUserResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "__v": 1,
		    "_id": 2067190,
		    "avatar": "",
		    "config": {
		      "acknowledge": [
		        "onboard_upgrade",
		      ],
		      "add_default_collection": -1,
		      "ai_suggestions": true,
		      "broken_level": "default",
		      "default_collection_view": "list",
		      "filters_hide": false,
		      "font_size": 0,
		      "last_collection": 45430305,
		      "nested_view_legacy": true,
		      "raindrops_buttons": [
		        "select",
		        "preview",
		        "edit",
		        "remove",
		      ],
		      "raindrops_hide": [
		        "list_excerpt",
		        "simple_excerpt",
		        "grid_excerpt",
		        "masonry_excerpt",
		      ],
		      "raindrops_search_by_score": true,
		      "raindrops_search_incollection": false,
		      "raindrops_sort": "title",
		    },
		    "email": "miyil99106@iliken.com",
		    "files": {
		      "lastCheckPoint": "2024-04-21T06:46:01.479Z",
		      "size": 100000000,
		      "used": 0,
		    },
		    "fullName": "miyil99106",
		    "groups": [
		      {
		        "collections": [],
		        "hidden": false,
		        "sort": 0,
		        "title": "raindrop-client",
		      },
		    ],
		    "lastAction": "2024-06-27T12:19:57.372Z",
		    "lastUpdate": "2024-06-27T12:19:57.372Z",
		    "lastVisit": "2024-06-26T11:07:37.787Z",
		    "name": "miyil99106",
		    "password": true,
		    "pro": false,
		    "registered": "2024-04-21T06:46:01.480Z",
		    "tfa": {
		      "enabled": false,
		    },
		  },
		  "result": true,
		  "user": {
		    "__v": 1,
		    "_id": 2067190,
		    "avatar": "",
		    "config": {
		      "acknowledge": [
		        "onboard_upgrade",
		      ],
		      "add_default_collection": -1,
		      "ai_suggestions": true,
		      "broken_level": "default",
		      "default_collection_view": "list",
		      "filters_hide": false,
		      "font_size": 0,
		      "last_collection": 45430305,
		      "nested_view_legacy": true,
		      "raindrops_buttons": [
		        "select",
		        "preview",
		        "edit",
		        "remove",
		      ],
		      "raindrops_hide": [
		        "list_excerpt",
		        "simple_excerpt",
		        "grid_excerpt",
		        "masonry_excerpt",
		      ],
		      "raindrops_search_by_score": true,
		      "raindrops_search_incollection": false,
		      "raindrops_sort": "title",
		    },
		    "email": "miyil99106@iliken.com",
		    "files": {
		      "lastCheckPoint": "2024-04-21T06:46:01.479Z",
		      "size": 100000000,
		      "used": 0,
		    },
		    "fullName": "miyil99106",
		    "groups": [
		      {
		        "collections": [],
		        "hidden": false,
		        "sort": 0,
		        "title": "raindrop-client",
		      },
		    ],
		    "lastAction": "2024-06-27T12:19:57.372Z",
		    "lastUpdate": "2024-06-27T12:19:57.372Z",
		    "lastVisit": "2024-06-26T11:07:37.787Z",
		    "name": "miyil99106",
		    "password": true,
		    "pro": false,
		    "registered": "2024-04-21T06:46:01.480Z",
		    "tfa": {
		      "enabled": false,
		    },
		  },
		}
	`);
});

it("getPublicUserByName", async ({ client, expect, generateTypeTest }) => {
	const response = await client.user.getPublicUserByName(2067190);

	generateTypeTest({ type: "GetPublicUserByNameResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "result": true,
		  "user": {
		    "_id": 2067190,
		    "avatar": "",
		    "config": {
		      "nested_view_legacy": true,
		      "raindrops_hide": [
		        "list_excerpt",
		        "simple_excerpt",
		        "grid_excerpt",
		        "masonry_excerpt",
		      ],
		    },
		    "email": "",
		    "fullName": "miyil99106",
		    "lastAction": "2024-06-27T12:19:57.372Z",
		    "lastUpdate": "2024-06-27T12:19:57.372Z",
		    "name": "miyil99106",
		    "pro": false,
		    "registered": "2024-04-21T06:46:01.480Z",
		  },
		}
	`);
});

it.skip("connectSocialNetworkProvider");
it.skip("disconnectSocialNetworkProvider");
