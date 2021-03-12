import { createRouter, createWebHashHistory } from "vue-router";
// eslint-disable-next-line no-unused-vars
import Layout from "layouts/index.vue";
//工厂函数来创建router
export const routes = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    meta: { title: "首页", icon: "el-icon-s-home" },
    children: [
      {
        path: "home",
        component: () => import("views/home.vue"),
        name: "Home",
        meta: { title: "首页", icon: "el-icon-s-home" },
      },
    ],
  },
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    meta: { title: "概览", icon: "el-icon-s-home" },
    children: [
      {
        path: "home",
        component: () => import("views/home.vue"),
        name: "Home",
        meta: { title: "概览", icon: "el-icon-s-home" },
      },
    ],
  },
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    meta: { title: "告警", icon: "el-icon-s-home" },
    children: [
      {
        path: "home",
        component: () => import("views/home.vue"),
        name: "Home",
        meta: { title: "告警1", icon: "el-icon-s-home" },
        children: [
          {
            path: ":id",
            name: "Detail",
            hidden: true,
            meta: {
              title: "详情",
              icon: "el-icon-s-home",
              activeMenu: "/home",
            },
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
