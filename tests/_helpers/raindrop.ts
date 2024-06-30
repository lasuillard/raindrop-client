import type { Use } from "@vitest/runner";
import type { Task } from "vitest";
import type { Raindrop } from "~/client";
import type {
	CreateCollectionRequest,
	CreateCollectionResponse,
	CreateRaindropRequest,
	CreateRaindropResponse,
} from "~/generated";

export async function resetData(
	{ client }: { client: Raindrop },
	use: Use<void>,
) {
	console.debug("Resetting data");

	// Remove all collections
	const { data } = await client.collection.getRootCollections();
	const collectionIds = data.items.map((item) => item._id);
	await client.collection.removeCollections({ ids: collectionIds });

	// Remove unsorted raindrops
	await client.raindrop.removeRaindrops(0);

	await use();
}

// Shortcut for setup utilities
export async function setupTools(
	{ task, client }: { task: Task; client: Raindrop },
	use: Use<SetupTools>,
) {
	const setupTool = new SetupTools(task, client);
	await use(setupTool);
}

export class SetupTools {
	task: Task;
	client: Raindrop;

	constructor(task: Task, client: Raindrop) {
		this.task = task;
		this.client = client;
	}

	// Helper function to create collection
	async createCollection(
		args?: Partial<CreateCollectionRequest>,
	): Promise<CreateCollectionResponse> {
		const response = await this.client.collection.createCollection({
			view: "list",
			title: this.task.name,
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
	async createRaindrop(
		args?: Partial<CreateRaindropRequest>,
	): Promise<CreateRaindropResponse> {
		const response = await this.client.raindrop.createRaindrop({
			title: this.task.name,
			link: "https://raindrop.io",
			...(args || {}),
		});
		return response.data;
	}
}
