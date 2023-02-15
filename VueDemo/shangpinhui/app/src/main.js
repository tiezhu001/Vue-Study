import Vue from "vue";
import App from "./App.vue";

// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 引入路由
import Router from "./router/index.js";

// 导入全局样式表
import "@/assets/css/global.css";

// 导入font图标
import "@/assets/font/iconfont.css";

// 引入axios并配置
import axios from "axios";

axios.defaults.baseURL = "https://lianghj.top:8888/api/private/v1/";

//axios配置请求拦截器
axios.interceptors.request.use(config=>{
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config;
})

// axios挂载到Vue原型对象上
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.use(ElementUI, {
  size: "small",
  zindex: 3000,
});

new Vue({
  router: Router,
  render: (h) => h(App),
}).$mount("#app");
