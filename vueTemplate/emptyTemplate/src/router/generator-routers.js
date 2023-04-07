import * as loginApi from "@/api/user/index.js";
import { BasicLayout, PageView, RouteView } from "@/layouts";

// 前端路由表
const constantRouterComponents = {
  // 基础页面 layout必须引入
  BasicLayout: BasicLayout,
  PageView: PageView,
  RouteView: RouteView,
  403: () => import(""),
  404: () => import(""),
  500: () => import(""),

  // 其他路由
};

// 根级菜单
const rootRouter = {
  key: "",
  name: "index",
  path: "",
  component: "BasicLayout",
  redirect: "/dashboard",
  meta: {
    title: "首页",
  },
  children: [],
};

/**
 * 动态生成token
 * @param {*} token 
 * @returns 
 */
export const generatorDynamicRouter = (token) => {
  return new Promise((resolve, reject) => {
    loginApi
      .getCurrentUserNav(token)
      .then((res) => {
        console.log("getCurrentUserNav", res);
        const menuNav = [];
        const childrenNav = [];
        listToTree(res, childrenNav, 0);
        rootRouter.children = childrenNav;
        menuNav.push(rootRouter);
        // 动态生成路由表
        const routers = generator(menuNav);
        resolve(routers);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/**
 * 格式化树形结构数据 生成 vue-router 层级路由表
 * @param {*} treeRouters
 * @param {*} parent
 */
export const generator = (treeRouters, parent) => {
  return treeRouters.map((item) => {
    const { title, show, hideChildren, hiddenHeaderContent, target, icon } =
      item.meta || {};
    const currentRouter = {
      // 如果路由设置了path,则作为路由path，否则路由地址动态拼接
      path: item.path || `${(parent, parent.path) || ""}/${item.key}`,
      // 路由名称,唯一
      name: item.name || item.key || "",
      component:
        constantRouterComponents[item.component || item.key] ||
        (() => import(`@/views/${item.component}`)),
      meta: {
        title: title,
        icon: icon || undefined,
        hiddenHeaderContent: hiddenHeaderContent,
        target: target,
        permission: item.name,
      },
    };

    // 是否设置了隐藏菜单
    if (show === false) {
      currentRouter.hidden = true;
    }

    // 是否设置了隐藏子菜单
    if (hideChildren) {
      currentRouter.hideChildrenInMenu = true;
    }

    // 重定向
    item.redirect && (currentRouter.redirect = item.redirect);

    // 是否有子菜单,并递归处理
    if (item.children && item.children.length > 0) {
      currentRouter.children = generator(item.children, currentRouter);
    }

    return currentRouter;
  });
};

/**
 * 数组转树形结构
 * @param list 源数组
 * @param tree 树
 * @param parentId 父ID
 */
const listToTree = (list, tree, parentId) => {
  list.forEach((item) => {
    // 判断是否是父级菜单
    if (item.parentId === parentId) {
      const child = {
        ...item,
        key: item.key || item.name,
        children: [],
      };
      // 迭代list,找到当前菜单相符合的所有子菜单
      listToTree(list, child.children, item.id);
      // 删掉不存在的children值属性
      if (child.children.length <= 0) {
        delete child.children;
      }
      // 加入到树种
      tree.push(child);
    }
  });
};
