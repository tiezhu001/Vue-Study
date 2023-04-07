import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";
import path from "path";
//import Components from "unplugin-vue-components/vite";
//import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Components({
    //   dirs: ['src'],
    //   resolves: [AntDesignVueResolver()],
    // })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 程序支持别名配置 需要vs code支持路径提示
    },
  },
});
