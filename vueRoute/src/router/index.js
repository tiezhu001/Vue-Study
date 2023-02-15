import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/user/:id",
    name: "users",
    component: () => import("@/views/user.vue"),
    children: [
      {
        path: "profile",
        component: () => import("@/views/profile.vue"),
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
