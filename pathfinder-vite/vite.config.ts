import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pathfinder-app/',
  test: {
    server: {
      deps: {
        inline: [/^(?!.*vitest).*$/],
      }
    }
  },
  plugins: [react({ tsDecorators: true })],
})
