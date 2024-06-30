import slugify from "slugify";
import type { Task } from "vitest";

export function taskId(task: Task): string {
	let id = `${task.suite?.name || ""}-${task.name}`;
	id = id.replace(/^-/, "");

	return slugify(id);
}
