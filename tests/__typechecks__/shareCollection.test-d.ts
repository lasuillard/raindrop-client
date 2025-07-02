import { assertType, it } from "vitest";
import type { ShareCollectionResponse } from "~/generated/api";

it("shareCollection", () => {
	assertType<ShareCollectionResponse>({
		result: true,
		token: "<REDACTED>",
		link: "https://app.raindrop.io/join/f7530cfd-77d8-40bc-867b-32e2d6841ba3",
	});
});
