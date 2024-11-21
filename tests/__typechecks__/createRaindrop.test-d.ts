import { assertType, it } from "vitest";
import type { CreateRaindropResponse } from "~/generated/api";

it("createRaindrop", () => {
	assertType<CreateRaindropResponse>("Unauthorized");
});
