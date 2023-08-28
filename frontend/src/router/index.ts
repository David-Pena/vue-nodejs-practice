import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/team",
      component: () => import("../views/Team.vue"),
    },
    {
      path: "/contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/settings",
      component: () => import("../views/Settings.vue"),
    },
  ],
});

export default router;
