import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'

Vue.config.productionTip=false;



const vm =  new Vue({
    el:"#app",
    render:h=>h(App),
    store, // 只有引入了vuex才有这个配置项
    beforeCreate(){
        Vue.prototype.$bus = this
    }    
})
console.log(vm)

