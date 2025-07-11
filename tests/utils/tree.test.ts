import { it } from "^/tests/_helpers/vitest";
import { expect } from "vitest";
import { makeTree, TreeNode, type TreeSource } from "~/utils/tree";

it("should have following default values", () => {
	const node = new TreeNode("test");
	expect(node.data).toEqual("test");
	expect(node.parent).toBeNull();
	expect(node.children).toEqual([]);
});

it("can be built from array of sources", () => {
	/**
	 *   1
	 *  / \
	 * 2   3
	 *    / \
	 *   4   5
	 *      /
	 *     6
	 */
	const data: Pick<TreeSource<string>, "data" | "id" | "parent">[] = [
		{ data: "1", id: "1", parent: null },
		{ data: "2", id: "2", parent: "1" },
		{ data: "3", id: "3", parent: "1" },
		{ data: "4", id: "4", parent: "3" },
		{ data: "5", id: "5", parent: "3" },
		{ data: "6", id: "6", parent: "5" },
	];
	const source: TreeSource<string>[] = data.map((data) => ({
		...data,
		toNode() {
			return new TreeNode(this.data);
		},
	}));
	const tree = makeTree(null, source);
	const visits: (string | null)[] = [];
	tree.traverse((node) => {
		visits.push(node.data);
	});
	expect(visits).toEqual([null, "1", "2", "3", "4", "5", "6"]);
});
