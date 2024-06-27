import fs from "node:fs";
import path from "node:path";
import { it } from "^/tests/_helpers/vitest";
import { createRaindrop } from "./_helpers";

it("parseURL", async ({ client, expect, generateTypeTest }) => {
	const response = await client.import.parseURL("https://example.com");

	generateTypeTest({ type: "ParseURLResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "item": {
		    "cover": "<screenshot>",
		    "excerpt": "",
		    "media": [],
		    "meta": {
		      "tags": [],
		    },
		    "title": "Example Domain",
		    "type": "link",
		  },
		  "result": true,
		}
	`);
});

it("checkURLsExist", async ({ task, client, expect, generateTypeTest }) => {
	await createRaindrop(task, client, {
		link: "https://raindrop.com",
	});
	const response = await client.import.checkURLsExist({
		urls: ["https://raindrop.com"],
	});

	generateTypeTest({ type: "CheckURLsExistResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "duplicates": [
		    {
		      "_id": 807603868,
		      "link": "https://raindrop.com",
		    },
		  ],
		  "id": 807603868,
		  "ids": [
		    807603868,
		  ],
		  "result": true,
		}
	`);
});

// ! FIXME: Polly.js record hash for file upload keep changing
it.skip("importHTMLBookmarkFile", async ({
	client,
	expect,
	generateTypeTest,
}) => {
	const file = await fs.openAsBlob(
		path.join(__dirname, "./chrome-bookmarks.html"),
	);

	// @ts-expect-error File is not Blob
	const response = await client.import.importHTMLBookmarkFile(file);

	generateTypeTest({ type: "ImportHTMLBookmarkFileResponse" });
	expect(response.data).toMatchInlineSnapshot(`
		{
		  "count": {
		    "bookmarks": 8,
		    "folders": 3,
		    "highlights": 0,
		    "tags": 0,
		  },
		  "items": [
		    {
		      "bookmarks": [
		        {
		          "cover": "",
		          "created": "2024-03-24T13:58:25.000Z",
		          "excerpt": "",
		          "important": false,
		          "lastUpdate": "2024-03-24T13:58:25.000Z",
		          "link": "https://containers.dev/features",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "Dev Container Features",
		        },
		        {
		          "cover": "",
		          "created": "2024-02-17T01:33:16.000Z",
		          "excerpt": "",
		          "important": false,
		          "lastUpdate": "2024-02-17T01:33:16.000Z",
		          "link": "https://devv.ai/en",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "Devv",
		        },
		        {
		          "cover": "",
		          "created": "2023-04-22T02:40:55.000Z",
		          "excerpt": "",
		          "important": false,
		          "lastUpdate": "2023-04-22T02:40:55.000Z",
		          "link": "https://gemini.google.com",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "Gemini",
		        },
		        {
		          "cover": "",
		          "created": "2023-01-29T13:03:03.000Z",
		          "excerpt": "",
		          "important": false,
		          "lastUpdate": "2023-01-29T13:03:03.000Z",
		          "link": "https://chat.openai.com/chat",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "ChatGPT",
		        },
		      ],
		      "folders": [
		        {
		          "bookmarks": [
		            {
		              "cover": "",
		              "created": "2023-03-09T01:22:45.000Z",
		              "excerpt": "",
		              "important": false,
		              "lastUpdate": "2023-03-09T01:22:45.000Z",
		              "link": "https://support.google.com/chrome/answer/157179?co=GENIE.Platform=Desktop&hl=en",
		              "media": [],
		              "note": "",
		              "tags": [],
		              "title": "Chrome keyboard shortcuts",
		            },
		          ],
		          "folders": [],
		          "title": "Keyboard Shortcuts",
		        },
		      ],
		      "title": "Bookmarks bar",
		    },
		    {
		      "bookmarks": [
		        {
		          "cover": "",
		          "created": "2024-04-04T14:20:27.000Z",
		          "excerpt": "",
		          "important": false,
		          "lastUpdate": "2024-04-04T14:20:27.000Z",
		          "link": "https://hub.docker.com",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "Docker Hub",
		        },
		        {
		          "cover": "",
		          "created": "2023-05-12T09:24:43.000Z",
		          "excerpt": "",
		          "important": false,
		          "lastUpdate": "2023-05-12T09:24:43.000Z",
		          "link": "https://www.reddit.com",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "Reddit",
		        },
		        {
		          "cover": "",
		          "created": "2023-05-12T09:24:37.000Z",
		          "excerpt": "",
		          "important": false,
		          "lastUpdate": "2023-05-12T09:24:37.000Z",
		          "link": "https://stackoverflow.com",
		          "media": [],
		          "note": "",
		          "tags": [],
		          "title": "Stack Overflow",
		        },
		      ],
		      "folders": [],
		      "title": "Import",
		    },
		  ],
		  "result": true,
		}
	`);
});
