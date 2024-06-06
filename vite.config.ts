import { resolve } from "node:path";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import packageManifest from "./package.json";

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		dts({
			rollupTypes: true,
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			formats: ["es", "cjs"],
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: [...Object.keys(packageManifest.dependencies), /^node:.*/],
		},
		target: "ESNext",
	},
	define: {
		"import.meta.vitest": "undefined",
	},
	test: {
		include: [
			"tests/**/*.{test,spec}.{js,ts}",
			"src/**/*.{js,ts}", // In-source testing
		],
		exclude: ["**/__mocks__/*", "src/generated/**/*"],
		coverage: {
			all: true,
			include: ["src/**"],
			exclude: ["src/**/__mocks__/*", "src/**/*.d.ts"],
			reporter: ["text", "clover", "html"],
		},
		setupFiles: ["tests/setup.ts"],
		api: {
			// Publish for * if inside container for forwarding
			host: process.env.CONTAINER ? "0.0.0.0" : "127.0.0.1",
			port: 51204,
		},
	},
});
