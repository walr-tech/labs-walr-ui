import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'styles/globals': 'src/styles/globals.css',
  },
  format: ['cjs', 'esm'],
  dts: {
    entry: 'src/index.ts', // Only generate types for TS files
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  loader: {
    '.css': 'copy',
  },
  banner: {
    js: '"use client";',
  },
})


