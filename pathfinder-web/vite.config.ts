import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/pathfinder-app/',
  build: {
    sourcemap: true
  },
  test: {
    server: {
      deps: {
        inline: [/^(?!.*vitest).*$/],
      }
    }
  },
  plugins: [react({ tsDecorators: true })],
  resolve: {
    alias: {
      "@": "/src",
    }
  },
})
