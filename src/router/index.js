import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "YuXuan's Portfolio" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: { title: "About Me" },
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("../views/PortfolioView.vue"),
    meta: { title: "Portfolio" },
  },
  {
    path: "/portfolio/:id",
    name: "portfoliodetail",
    component: () => import("../views/PortfoliodetailView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//當「每一個」路由要進入之前，都會先經過這裡
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  // to: 即將進入的路由
  // from: 從何處進入的路由
  window.document.title = to.meta.title ? to.meta.title : "YuXuan's Portfolio";
  // next() 用來表示繼續往下執行的 callback，如果沒有呼叫它，路由就會中斷
  next();
});

export default router;
