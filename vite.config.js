import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import RadixVueResolver from 'radix-vue/resolver'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    Components({
      resolvers: [PrimeVueResolver(), RadixVueResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/_variables.scss";` // 确保路径正确
      }
    }
  },
  server: {
    https: {
      key: fs.readFileSync("/home/lilhammer/Dev/Cert/localhost+1-key.pem"),
      cert: fs.readFileSync('/home/lilhammer/Dev/Cert/localhost+1.pem')
    }
  }
})
