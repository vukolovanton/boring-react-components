import { defineConfig } from 'vite';
import dts from 'vite-dts';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react(), dts()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'useless-react-components',
			fileName: (format) => `useless-react-components.${format}.js`,
		},
		rollupOptions: {
			external: ['react'],
			output: {
				globals: {
					react: 'React',
				},
			},
		},
	},
});
