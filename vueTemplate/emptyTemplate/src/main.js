import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import { zhCn } from "element-plus/dist/locale/zh-cn.min.mjs";

const app = createApp(App);

// element引入,并全局配置中文
app.use(ElementPlus, {
  locale: zhCn
});

app.mount("#app");
