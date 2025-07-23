import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: false,
    lib: {
      fileName: 'cyberpunk-2077-lib',
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    }
  },
})
