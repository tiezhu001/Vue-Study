import {UserLayout,BasicLayout} from '@/layouts'


/**
 * 基础路由(不需要登录就能访问的)
 */
export const constantRouterMap = [
    {
        
        path:'/',
        component:BasicLayout,
    },
    {
        
        path:'/user',
        component:UserLayout,
        redirect:"/user/login",
        hidden:true,
        children:[{
            path:'login',
            name:'login',
            component:()=>import('@/views/user/login')
        }]
    }
]