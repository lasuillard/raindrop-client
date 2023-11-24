import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [dts()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'raindrop-client',
			fileName: 'raindrop-client'
		}
	},
	define: {
		'import.meta.vitest': 'undefined'
	},
	test: {
		include: [
			'{tests,e2e}/**/*.{test,spec}.{js,ts}',
			'src/**.{js,ts}' // In-source testing
		],
		exclude: ['**/__mocks__/*'],
		coverage: {
			all: true,
			include: ['src/**'],
			exclude: ['src/**/__mocks__/*', 'src/**/*.d.ts'],
			reporter: ['text', 'clover', 'html'],
			reportsDirectory: `coverage/${process.env.VITEST_ENV || 'unit'}`
		},
		setupFiles: ['tests/setup.ts'],
		api: {
			// Publish for * if inside container for forwarding
			host: process.env.CONTAINER ? '0.0.0.0' : '127.0.0.1',
			port: 51204
		}
	}
});
