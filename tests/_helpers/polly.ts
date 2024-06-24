import NodeHTTPAdapter from "@pollyjs/adapter-node-http";
import { Polly } from "@pollyjs/core";
import FSPersister from "@pollyjs/persister-fs";
import type { Use } from "@vitest/runner";
import type { Task } from "vitest";

Polly.register(NodeHTTPAdapter);
Polly.register(FSPersister);

export async function polly({ task }: { task: Task }, use: Use<Polly>) {
	const _polly = new Polly(task.name, {
		adapters: ["node-http"],
		persister: "fs",
		persisterOptions: {
			fs: {
				recordingsDir: "tests/__recordings__",
			},
		},
		recordFailedRequests: true,
		matchRequestsBy: {
			headers: {
				exclude: ["authorization"],
			},
		},
	});
	_polly.server.any().on("beforePersist", (_, recording) => {
		recording.request.headers = recording.request.headers.map(
			// @ts-expect-error Don't care
			(header: Header) => {
				if (header.name === "authorization") {
					header.value = "<REDACTED>";
				}
				return header;
			},
		);
	});
	await use(_polly);
	await _polly.stop();
}
