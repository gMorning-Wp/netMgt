import { createRouter, createWebHashHistory } from "vue-router";
//工厂函数来创建router
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/", component: () => import("../views/Home.vue") }],
});

export default router;
