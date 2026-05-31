import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// JSX lives in .js files, so tell both the React plugin and esbuild to treat
// every .js file under src/ as JSX.
export default defineConfig({
  plugins: [react({ include: /\.(js|jsx)$/ })],
  base: './',
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
})
