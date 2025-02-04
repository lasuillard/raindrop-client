import {
	type GetChildCollectionsResponse,
	type GetRootCollectionsResponse,
	CollectionApi as _CollectionApi,
} from "~/generated";
import { TreeNode, type TreeSource, makeTree } from "~/utils/tree";

type GetRootCollectionsResponseItem = GetRootCollectionsResponse["items"][0];
type GetChildCollectionsResponseItem = GetChildCollectionsResponse["items"][0];

export type CollectionItem =
	| GetRootCollectionsResponseItem
	| GetChildCollectionsResponseItem;

export class CollectionApi extends _CollectionApi {
	/**
	 * Create structured tree of collections.
	 * @returns Root of tree.
	 */
	async getCollectionTree() {
		const [{ data: groups }, { data: collections }] = await Promise.all([
			this.getRootCollections(),
			this.getChildCollections(),
		]);

		const groupNodes: TreeSource<GetRootCollectionsResponseItem>[] =
			groups.items.map((item) => ({
				data: item,
				id: item._id.toString(),
				parent: null,

				toNode() {
					return new TreeNode(this.data);
				},
			}));

		const collectionNodes: TreeSource<GetChildCollectionsResponseItem>[] =
			collections.items.map((item) => ({
				data: item,
				id: item._id.toString(),
				parent: item.parent?.$id.toString() || null,

				toNode() {
					return new TreeNode(this.data);
				},
			}));

		const source: TreeSource<CollectionItem>[] =
			groupNodes.concat(collectionNodes);
		source.sort(
			(a, b) =>
				a.data.title.localeCompare(b.data.title) || a.data._id - b.data._id,
		);

		// ? Deduplicate items; can't explain the detail because it's been a while since I wrote this.
		const sourceDedupe = source.filter(
			(obj1, idx, arr) => arr.findIndex((obj2) => obj2.id === obj1.id) === idx,
		);

		const rootNode = makeTree(null, sourceDedupe);
		return rootNode;
	}
}
