import { assertType, it } from "vitest";
import type { GetCurrentUserResponse } from "~/generated/api";

it("getCurrentUser", () => {
	assertType<GetCurrentUserResponse>({
		result: true,
		user: {
			tfa: { enabled: false },
			files: {
				used: 222516,
				size: 100000000,
				lastCheckPoint: "2025-07-02T03:58:09.050Z",
			},
			_id: 2067190,
			fullName: "miyil99106",
			name: "miyil99106",
			email: "miyil99106@iliken.com",
			avatar: "",
			pro: false,
			groups: [
				{
					title: "My Collections",
					hidden: false,
					sort: 0,
					collections: [57170323],
				},
			],
			lastAction: "2025-07-02T05:19:26.442Z",
			lastVisit: "2025-07-02T04:51:11.347Z",
			registered: "2024-04-21T06:46:01.480Z",
			lastUpdate: "2025-07-02T05:19:26.442Z",
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
