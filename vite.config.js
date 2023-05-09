import { defineConfig } from 'vite';
import lwc from '@lwc/rollup-plugin';
import replace from '@rollup/plugin-replace';

export default defineConfig({
	plugins: [],
	build: {
		target: 'esnext',
		polyfillDynamicImport: false,
		rollupOptions: {
			external: ['lwc'],
			input: 'src/main.ts',
			output: {
				file: 'dist/main.js',
				format: 'esm',
			},
			plugins: [
				replace({
					'process.env.NODE_ENV': JSON.stringify('development'),
					'preventAssignment': true,
				}),
				lwc(),
			],
		}
	},
	optimizeDeps: {
		extensions: ["jsx"],
	},
});

