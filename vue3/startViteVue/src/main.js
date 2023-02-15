import { createApp } from 'vue'
import App from './App.vue'
import Global from '../src/components/Global.vue'
import {createRouter,createWebHashHistory} from 'vue-router'


import './assets/main.css'


const app =  createApp(App)

// 1.定义路由
const routes = [
    {path:'/global',component:Global},
]

// 2.创建路由实例,并传递routes配置
const router =  createRouter({
    history:createWebHashHistory(),
    routes
})

app.use(router)
// 注册全局组件
app.component('Global',Global)

app.mount("#app")
