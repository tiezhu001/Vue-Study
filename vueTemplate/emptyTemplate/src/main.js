import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
// import { zhCn } from "element-plus/dist/locale/zh-cn.min.mjs";
import router from "@/router/index";


const app = createApp(App);

app.use(router)
// element引入,并全局配置中文
app.use(ElementPlus, {
  // locale: zhCn
});

app.mount("#app");
