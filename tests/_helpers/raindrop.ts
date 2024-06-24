import type { Use } from "@vitest/runner";
import type { Raindrop } from "~/client";

export async function resetData(
	{ client }: { client: Raindrop },
	use: Use<void>,
) {
	console.debug("Resetting data");

	const { data } = await client.collection.getRootCollections();
	const collectionIds = data.items.map((item) => item._id);
	await client.collection.removeCollections({ ids: collectionIds });

	await use();
}