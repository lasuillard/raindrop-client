import { assertType, it } from "vitest";
import type { ShareCollectionResponse } from "~/generated/api";

it("shareCollection", () => {
	assertType<ShareCollectionResponse>({
		result: true,
		token: "<REDACTED>",
		link: "https://app.raindrop.io/join/0f009803-a777-4bab-a861-c3f819063e7c",
	});
});
