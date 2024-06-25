import type { Task } from "vitest";
import type { Raindrop } from "~/client";
import type { CreateCollectionResponse } from "~/generated";

// Helper function to create collection
export async function createCollection(
	task: Task,
	client: Raindrop,
	args?: object,
): Promise<CreateCollectionResponse> {
	const response = await client.collection.createCollection({
		view: "list",
		title: task.name,
		sort: 0,
		public: false,
		parent: {
			$ref: "collections",
			$id: 0,
			oid: 0,
		},
		cover: [],
		...(args || {}),
	});
	return response.data;
}
