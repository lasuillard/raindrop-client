import { it } from "^/tests/_helpers/vitest";

it("getCurrentUser", async ({ client, expect, generateTypeTest }) => {
	const response = await client.user.getCurrentUser();

	generateTypeTest({
		type: "UserResponse",
	});
	// TODO: No data for `$.user.config.acknowledge`
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
		      "font_size": 0,
		      "last_collection": 43325344,
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
		      "used": 73048,
		    },
		    "fullName": "miyil99106",
		    "groups": [
		      {
		        "collections": [],
		        "hidden": false,
		        "sort": 0,
		        "title": "Collections",
		      },
		    ],
		    "lastAction": "2024-06-24T14:50:37.212Z",
		    "lastUpdate": "2024-06-24T14:50:37.212Z",
		    "lastVisit": "2024-06-24T11:44:19.210Z",
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

it.todo("updateCurrentUser");
it.todo("getPublicUserByName");
it.todo("connectSocialNetworkProvider");
it.todo("disconnectSocialNetworkProvider");
