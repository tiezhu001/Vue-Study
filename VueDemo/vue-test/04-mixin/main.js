import Vue from 'vue'
import App from './App.vue'
//import {mixin1} from './mixin.js'

Vue.config.productionTip=false;
//Vue.mixin(mixin1)

new Vue({
    el:"#app",
    render:h=>h(App)    
})

/**
 * 混入的用途:
 * 1.一个公用的东西,包括数据，方法等,如果混入定义的名称或者方法名有冲突,优先执行内部组件的，钩子函数除外,不管是组件定义的钩子函数和混入的js定义的都会执行
 * 2.类似于一个公共class
 * 混入的用法
 *      1.局部混入
 *          1.1 每个组件哪里需要就在哪里导入,然后配置 混入选项 mixins:[]
 *      2.全局混入
 *          2.1 在main.js引入混入的js,然后Vue.mixin()  // 每配置一个混入 用一次Vue.mixin
 * 
 */