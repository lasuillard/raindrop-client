import { assertType, it } from "vitest";
import type { RemoveRaindropsResponse } from "~/generated/api";

it("removeRaindrops", () => {
	assertType<RemoveRaindropsResponse>({ result: true, modified: 1 });
});
