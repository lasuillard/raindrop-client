import { assertType, it } from "vitest";
import type { UserResponse } from "~/generated/api";

it("getCurrentUser", () => {
	assertType<UserResponse>({
		result: true,
		user: {
			tfa: { enabled: false },
			files: {
				used: 73048,
				size: 100000000,
				lastCheckPoint: "2024-04-21T06:46:01.479Z",
			},
			_id: 2067190,
			fullName: "miyil99106",
			name: "miyil99106",
			email: "miyil99106@iliken.com",
			avatar: "",
			pro: false,
			groups: [
				{ title: "Collections", hidden: false, sort: 0, collections: [] },
			],
			lastAction: "2024-06-24T13:34:48.320Z",
			lastVisit: "2024-06-24T11:44:19.210Z",
			registered: "2024-04-21T06:46:01.480Z",
			lastUpdate: "2024-06-24T13:34:48.320Z",
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
				last_collection: 43325344,
				raindrops_sort: "title",
				ai_suggestions: true,
			},
			password: true,
		},
	});
});
