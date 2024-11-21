import { assertType, it } from "vitest";
import type { CreateCollectionResponse } from "~/generated/api";

it("createCollection", () => {
	assertType<CreateCollectionResponse>("Unauthorized");
});
