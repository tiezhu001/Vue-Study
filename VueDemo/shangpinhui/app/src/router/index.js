import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '../views/Login.vue'
import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome' 
import User from '@/views/user/User'
import Rights from '@/views/power/Rights'
import Roles from '@/views/power/Roles'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            name:'Login',
            path:'/login',
            component:Login
        },
        {
            path:'/home',
            component:Home,
            redirect:'/welcome',
            children:[
                {
                    path:'/welcome',
                    component:Welcome
                },
                {
                    path:"/users",
                    component:User
                },
                {
                    path:"/rights",
                    component:Rights
                },
                {
                    path:"/roles",
                    component:Roles
                }
            ]
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.path==='/login') return next();
    const token= window.sessionStorage.getItem('token');
    if(!token) return next('/login')
    next();
})

export default router