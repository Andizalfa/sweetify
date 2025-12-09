import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'          // <- PENTING, ini yang hilang tadi
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    tailwindcss(),
    vue(),
    mode === 'development' && vueDevTools(), // devtools cuma aktif saat dev
  ],
  base: '/sweetify/', // untuk GitHub Pages
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
