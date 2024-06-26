import type { Task } from "vitest";
import type { Raindrop } from "~/client";
import type {
	CreateCollectionRequest,
	CreateCollectionResponse,
	CreateRaindropRequest,
	CreateRaindropResponse,
} from "~/generated";

// Helper function to create collection
export async function createCollection(
	task: Task,
	client: Raindrop,
	args?: Partial<CreateCollectionRequest>,
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

// Helper function to create raindrop
export async function createRaindrop(
	task: Task,
	client: Raindrop,
	args?: Partial<CreateRaindropRequest>,
): Promise<CreateRaindropResponse> {
	const response = await client.raindrop.createRaindrop({
		title: task.name,
		link: "https://raindrop.io",
		...(args || {}),
	});
	return response.data;
}
