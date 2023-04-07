/**
 * 向后端请求用户的菜单，动态生成路由
 */
import { constantRouterMap } from "@/config/router.config";
import { generatorDynamicRouter } from "@/router/generator-routers.js";
import { defineStore } from "pinia";

const useAsyncRouterStore = defineStore("asyncRouter", {
  state: () => ({
    routers: constantRouterMap,
    addRouters: [],
  }),
  actions: {
    GenerateRoutes(data) {
      return new Promise((resolve, reject) => {
        const { token } = data;
        generatorDynamicRouter(token)
          .then((routers) => {
            this.addRouters = routers;
            this.routers = constantRouterMap.concat(routers);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});

export default useAsyncRouterStore
