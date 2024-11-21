import { assertType, it } from "vitest";
import type { ShareCollectionResponse } from "~/generated/api";

it("shareCollection", () => {
	assertType<ShareCollectionResponse>({
		result: true,
		token: "<REDACTED>",
		link: "https://app.raindrop.io/join/bcb0c1db-f0a5-4552-85ea-99f809022a07",
	});
});
