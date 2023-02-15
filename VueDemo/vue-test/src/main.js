import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import Router from './router/index.js'

Vue.config.productionTip = false;

Vue.use(VueRouter)

new Vue({
  el: "#app",
  render: (h) => h(App),
  router:Router, // 只有引入了vuex才有这个配置项
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
});
