import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import collections from '../../tests/fixtures/collections-childrens.json';
import groups from '../../tests/fixtures/collections.json';
import { Collection, Configuration, CollectionApi as _CollectionApi } from '../generated';
import { TreeNode, TreeSource, makeTree } from '../utils/tree';

export class CollectionApi extends _CollectionApi {
	/**
	 * Create structured tree of collections.
	 * @returns Root of tree.
	 */
	async getCollectionTree() {
		const [{ data: groups }, { data: collections }] = await Promise.all([
			this.getRootCollections(),
			this.getChildCollections()
		]);

		const groupNodes: TreeSource<Collection>[] = groups.items.map((item) => ({
			data: item,
			id: item._id.toString(),
			parent: null,

			toNode() {
				return new TreeNode(this.data);
			}
		}));
		const collectionNodes: TreeSource<Collection>[] = collections.items.map((item) => ({
			data: item,
			id: item._id.toString(),
			parent: item.parent.$id.toString(),

			toNode() {
				return new TreeNode(this.data);
			}
		}));
		const source: TreeSource<Collection>[] = groupNodes.concat(collectionNodes);
		source.sort(
			(a, b) =>
				(a.data?.title ?? '').localeCompare(b.data?.title ?? '') ||
				(a.data?._id ?? 0) - (b.data?._id ?? 0)
		);

		const rootNode = makeTree(null, source);
		return rootNode;
	}
}

/* c8 ignore start */
if (import.meta.vitest) {
	const { describe, expect, it, afterEach } = import.meta.vitest;

	// Mocks
	const mockAxios = new MockAdapter(axios, { onNoMatch: 'throwException' });

	const collectionApi = new CollectionApi(new Configuration(), undefined, axios);

	afterEach(() => {
		mockAxios.resetHandlers();
		mockAxios.resetHistory();
	});

	describe(collectionApi.getCollectionTree, () => {
		it('build tree from groups and collections', async () => {
			mockAxios
				.onGet('https://api.raindrop.io/rest/v1/collections')
				.reply(() => {
					return [200, groups];
				})
				.onGet('https://api.raindrop.io/rest/v1/collections/childrens')
				.reply(() => {
					return [200, collections];
				});

			const tree = await collectionApi.getCollectionTree();
			const visits: string[] = [];
			tree.traverse((node) => {
				visits.push(`${node.data?._id || null}: ${node.data?.title || 'root'}`);
			});

			expect(visits).toEqual([
				'null: root',
				'35947369: Bookmarks bar',
				'35947370: D1',
				'35947372: D2',
				'35947373: D3',
				'35947374: D2-2',
				'32203872: Default',
				'33302214: Default'
			]);
		});
	});
}
/* c8 ignore stop */
