import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/allGoods",
    name: "allGoods",
    component: () => import("../views/AllGoods.vue"),
  },
  {
    path: "/myGoods",
    name: "myGoods",
    component: () => import("../views/MyGoods.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
