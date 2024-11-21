import { assertType, it } from "vitest";
import type { UpdateCurrentUserResponse } from "~/generated/api";

it("updateCurrentUser", () => {
	assertType<UpdateCurrentUserResponse>({
		result: true,
		user: {
			tfa: { enabled: false },
			files: {
				used: 0,
				size: 100000000,
				lastCheckPoint: "2024-11-21T11:19:36.998Z",
			},
			_id: 2067190,
			fullName: "miyil99106",
			name: "miyil99106",
			email: "miyil99106@iliken.com",
			avatar: "",
			pro: false,
			groups: [
				{ title: "raindrop-client", hidden: false, sort: 0, collections: [] },
			],
			lastAction: "2024-11-21T12:42:51.009Z",
			lastVisit: "2024-11-21T11:19:35.254Z",
			registered: "2024-04-21T06:46:01.480Z",
			lastUpdate: "2024-11-21T12:42:51.009Z",
			config: {
				default_collection_view: "list",
				raindrops_hide: [
					"list_excerpt",
					"simple_excerpt",
					"grid_excerpt",
					"masonry_excerpt",
				],
				raindrops_buttons: ["select", "preview", "edit", "remove"],
				raindrops_search_by_score: true,
				raindrops_search_incollection: false,
				broken_level: "default",
				font_size: 0,
				nested_view_legacy: true,
				add_default_collection: -1,
				acknowledge: ["onboard_upgrade"],
				last_collection: 48071472,
				raindrops_sort: "title",
				ai_suggestions: true,
				filters_hide: false,
			},
			password: true,
		},
		item: {
			tfa: { enabled: false },
			files: {
				used: 0,
				size: 100000000,
				lastCheckPoint: "2024-11-21T11:19:36.998Z",
			},
			_id: 2067190,
			fullName: "miyil99106",
			name: "miyil99106",
			email: "miyil99106@iliken.com",
			avatar: "",
			pro: false,
			groups: [
				{ title: "raindrop-client", hidden: false, sort: 0, collections: [] },
			],
			lastAction: "2024-11-21T12:42:51.009Z",
			lastVisit: "2024-11-21T11:19:35.254Z",
			registered: "2024-04-21T06:46:01.480Z",
			lastUpdate: "2024-11-21T12:42:51.009Z",
			config: {
				default_collection_view: "list",
				raindrops_hide: [
					"list_excerpt",
					"simple_excerpt",
					"grid_excerpt",
					"masonry_excerpt",
				],
				raindrops_buttons: ["select", "preview", "edit", "remove"],
				raindrops_search_by_score: true,
				raindrops_search_incollection: false,
				broken_level: "default",
				font_size: 0,
				nested_view_legacy: true,
				add_default_collection: -1,
				acknowledge: ["onboard_upgrade"],
				last_collection: 48071472,
				raindrops_sort: "title",
				ai_suggestions: true,
				filters_hide: false,
			},
			password: true,
		},
	});
});
