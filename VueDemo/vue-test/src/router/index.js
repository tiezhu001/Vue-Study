import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

const router = new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
      meta: {
        isAuth: false,
      },

      // 独享路由守卫
    //   beforeEnter: (to, _, next) => {
    //     if (to.meta.isAuth) {
    //       next();
    //     }
    //   },
    },
    {
      path: "/home",
      component: Home,
      meta: {
        isAuth: false,
      },
      children: [
        {
          path: "news", // 二级路由不需要添加  /
          component: News,
        },
        {
          path: "message",
          component: Message,
          children: [
            {
              name: "xiangqing", // 当为每个路由配置了名称 就可以在对象写法中为name 替换 path
              //path:'detail',  // query参数
              path: "detail/:id/:title", // param参数
              component: Detail,

              // 路由的props参数 为了让组件更方便的接受参数

              // 第一种写法 传递只能是死的数据
              //props:{id:'001',title:"张三"}

              // 第二种写法 为bool值可以把传递的param参数 以 props的形式传递给组件(query参数不适用)
              // props:true,

              // 第三种写法 函数 第一个参数是$route参数
              props(route) {
                return { id: route.params.id, title: route.params.title };
              },
            },
          ],
        },
      ],
    },
  ],
});

// 全局前置路由守卫,每次切换路由之前
// router.beforeEach((to,from,next)=>{
//     if(to.meta.isAuth){
//         next()
//     }
//     else{
//         // nothing
//     }
// })

// 全局后置路由守卫,路由组件渲染完执行
// router.afterEach((to, from) => {
//   document.title = to.fullPath;
//   document.title = from.fullPath;
// });

export default router;
