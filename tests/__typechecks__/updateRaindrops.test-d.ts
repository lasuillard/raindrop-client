import { assertType, it } from "vitest";
import type { UpdateRaindropsResponse } from "~/generated/api";

it("updateRaindrops", () => {
	assertType<UpdateRaindropsResponse>({ result: true, modified: 1 });
});
