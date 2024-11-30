import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgr()],
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
})
