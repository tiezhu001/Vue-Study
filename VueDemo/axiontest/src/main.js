import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
// axios.defaults.baseURL="" 配置请求的根路径

Vue.prototype.axios =axios; // 把axios挂载在Vue的原型上 这样在每个组件中都可以访问到axios

new Vue({
  render: h => h(App),
}).$mount('#app')
