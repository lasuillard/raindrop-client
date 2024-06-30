import { afterAll } from "vitest";
import { generateAllTests } from "./_helpers/typechecks";

afterAll(async () => {
	await generateAllTests();
});
