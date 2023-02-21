import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {join,path} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname, './src'),  // 程序支持别名配置 需要vs code支持路径提示
    }
  }
})
