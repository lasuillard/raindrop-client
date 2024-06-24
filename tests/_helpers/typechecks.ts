import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import type { Use } from "@vitest/runner";
import type { ExpectStatic, Task } from "vitest";

export interface CreateTest {
	// Test identifier
	testId: string;

	// Type to assert, imported from '~/generated/api'
	type: string;

	// String represented value to assert type
	value: string;
}

let filesToCreate: CreateTest[] = [];

function addTest(item: CreateTest) {
	filesToCreate = [...filesToCreate, item];
}

export interface RegisterHookArgs {
	type: string;
}

export type RegisterHook = (args: RegisterHookArgs) => void;

export async function generateTypeTest(
	{ task, expect }: { task: Task; expect: ExpectStatic },
	use: Use<RegisterHook>,
) {
	const hookFn: RegisterHook = (args: RegisterHookArgs) => {
		// Check test file generation registered only once
		let ack = false;

		// Add snapshot serializer as an workaround for hook to generate type tests
		expect.addSnapshotSerializer({
			serialize(val, config, indentation, depth, refs, printer) {
				addTest({
					testId: task.name,
					type: args.type,
					value: JSON.stringify(val),
				});
				ack = true;
				return printer(val, config, indentation, depth, refs);
			},
			test() {
				return !ack;
			},
		});
	};
	await use(hookFn);
}

function generateTest(dir: string, item: CreateTest): string {
	const filepath = path.join(dir, `${item.testId}.test-d.ts`);
	const content = `\
import { assertType, it } from 'vitest';
import type { ${item.type} } from '~/generated/api'

it('${item.testId}', () => {
  assertType<${item.type}>(
    ${item.value}
  )
})
`;
	console.debug(`Will generate file ${filepath} with content: \n\n ${content}`);
	fs.writeFileSync(filepath, content);

	return filepath;
}

export function generateAllTests() {
	const dir = path.join(__dirname, "..", "__typechecks__");
	if (!fs.existsSync(dir)) fs.mkdirSync(dir);

	for (const spec of filesToCreate) {
		const filepath = generateTest(dir, spec);
		exec(`yarn run biome check --write ${filepath}`, (err, stdout, stderr) => {
			if (err) {
				console.error(stderr);
				process.exit(1);
			}

			console.log(stdout);
		});
	}
}