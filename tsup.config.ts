import { defineConfig } from 'tsup'
import { copyFileSync, mkdirSync } from 'fs'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  loader: {
    '.css': 'copy',
  },
  onSuccess: async () => {
    // Ensure styles directory exists
    mkdirSync('dist/styles', { recursive: true })
    // Copy CSS file
    copyFileSync('src/styles/globals.css', 'dist/styles/globals.css')
  },
})


