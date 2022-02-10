/** @type {import("tsup").Options} */
export const tsup = {
	entryPoints: ['src/index.ts'],
	format: ['esm', 'cjs'],
	sourcemap: false,
	splitting: false,
	clean: true
};
