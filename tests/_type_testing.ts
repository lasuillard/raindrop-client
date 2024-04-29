import type { Use } from '@vitest/runner';
import fs from 'fs';
import path from 'path';
import type { ExpectStatic, Task } from 'vitest';

export interface CreateTest {
	// Test identifier
	testId: string;

	// Type to assert, imported from '~/generated/api'
	type: string;

	// String represented value to assert type
	value: string;
}

let filesToCreate: CreateTest[] = [];

// eslint-disable-next-line jsdoc/require-jsdoc
function addTest(item: CreateTest) {
	filesToCreate = [...filesToCreate, item];
}

// eslint-disable-next-line jsdoc/require-jsdoc
export async function generateTypeTest(
	{ task, expect }: { task: Task; expect: ExpectStatic },
	use: Use<void>
) {
	// Check test file generation registered only once
	let ack = false;

	// Add snapshot serializer as an workaround for hook to generate type tests
	expect.addSnapshotSerializer({
		serialize(val, config, indentation, depth, refs, printer) {
			addTest({
				testId: task.id,
				type: 'UserResponse',
				value: JSON.stringify(val)
			});
			ack = true;
			return printer(val, config, indentation, depth, refs);
		},
		test() {
			return !ack;
		}
	});

	await use();
}

// eslint-disable-next-line jsdoc/require-jsdoc
function generateTest(dir: string, item: CreateTest) {
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
	console.log(`Will generate file ${filepath} with content ${content}`);
	fs.writeFileSync(filepath, content);
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function generateAllTests() {
	const dir = path.join(__dirname, '__type_testing__');
	if (!fs.existsSync(dir)) fs.mkdirSync(dir);

	for (const spec of filesToCreate) {
		generateTest(dir, spec);
	}
}
