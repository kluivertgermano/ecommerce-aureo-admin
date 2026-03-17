import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      onwarn(warning, _warn) {
        // Ignora todos os warnings
        return
      },
    },
  },
  esbuild: {
    logLevel: 'silent', // Silencia erros do esbuild
  }
})