import { createWebHistory, createRouter } from "vue-router";
import {constantRouterMap} from '@/config/router.config.js'

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap, // 只包含基础不需要登录的路由
});

// 定义一个resetRouter 方法，在退出登录后或token过期后 需要重新登录时，调用即可
/**
 * TODO:待测试此方法
 */
export function resetRouter() {
  const newRouter = createRouter({
    history: createWebHistory(),
    routes: constantRouterMap,
  });
  router.matcher = newRouter.matcher;
}

export default router;
