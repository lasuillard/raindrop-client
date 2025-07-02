import { assertType, it } from "vitest";
import type { GetPublicUserByNameResponse } from "~/generated/api";

it("getPublicUserByName", () => {
	assertType<GetPublicUserByNameResponse>({
		result: true,
		user: {
			_id: 2067190,
			fullName: "miyil99106",
			name: "miyil99106",
			email: "",
			avatar: "",
			pro: false,
			lastAction: "2025-07-02T05:21:12.753Z",
			registered: "2024-04-21T06:46:01.480Z",
			lastUpdate: "2025-07-02T05:21:12.753Z",
			config: {
				raindrops_hide: [
					"list_excerpt",
					"simple_excerpt",
					"grid_excerpt",
					"masonry_excerpt",
				],
				nested_view_legacy: true,
			},
		},
	});
});
