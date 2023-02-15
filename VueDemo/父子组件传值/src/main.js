import Vue from 'vue'
import App from './App.vue'

// 1.导入需要全局注册的组件
import right from './components/right.vue'

// 2.注册全局组件 第一个参数自定义组件名称
Vue.component('right',{
  data(){
    
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


