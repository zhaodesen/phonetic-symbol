/// <reference types="vitest" />
import path from 'node:path'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {},
  plugins: [vue(), UnoCSS()],
})
