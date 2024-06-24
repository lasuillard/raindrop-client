import { type Collection, CollectionApi as _CollectionApi } from "~/generated";
import { TreeNode, type TreeSource, makeTree } from "~/utils/tree";

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

		const groupNodes: TreeSource<Collection>[] = groups.items.map((item) => ({
			data: item,
			id: item._id.toString(),
			parent: null,

			toNode() {
				return new TreeNode(this.data);
			},
		}));
		const collectionNodes: TreeSource<Collection>[] = collections.items.map(
			(item) => ({
				data: item,
				id: item._id.toString(),
				parent: item.parent.$id.toString(),

				toNode() {
					return new TreeNode(this.data);
				},
			}),
		);
		const source: TreeSource<Collection>[] = groupNodes.concat(collectionNodes);
		source.sort(
			(a, b) =>
				(a.data?.title ?? "").localeCompare(b.data?.title ?? "") ||
				(a.data?._id ?? 0) - (b.data?._id ?? 0),
		);

		const rootNode = makeTree(null, source);
		return rootNode;
	}
}
