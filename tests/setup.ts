import { afterAll } from "vitest";
import { generateAllTests } from "./_type_testing";

afterAll(() => {
	generateAllTests();
});
