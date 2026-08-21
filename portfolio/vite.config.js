import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [
    react(),
  ],
  server: {
    watch: {
      // Исключаем папку public из слежки — там медиафайлы (mp4, jpg),
      // которые Windows может блокировать, вызывая ошибку EBUSY
      ignored: ['**/public/**'],
    },
  },
})
