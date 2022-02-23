import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      // comp: resolve(__dirname, 'src/components'),
    }
  },
  build: {
    minify: false,
    
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger:true
      },
    },
  },
})


