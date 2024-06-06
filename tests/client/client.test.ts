import { it } from "^/tests/_helpers";
import { expect } from "vitest";
import { Raindrop } from "~/client";

it("should instantiate", () => {
	const rd = new Raindrop();
	expect(rd).toBeTruthy();
});
