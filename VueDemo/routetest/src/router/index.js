import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import Movie from '../components/Movie.vue'
import Tab1 from '../components/tab/tab1.vue'
import Tab2 from '../components/tab/tab2.vue'

// 注册使用路由插件
Vue.use(Router);

// 定义路由
const router = new Router({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:Home},
        {path:"/about",component:About,
            children:[
            {path:"tab1",component:Tab1},
            {path:"tab2",component:Tab2}
        ]},
        {path:"/movie/:id",component:Movie},
      
    ]
});

// 导出组件
export default router;

