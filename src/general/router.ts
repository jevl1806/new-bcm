import type { Router, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw = {
  path: "",
  children: [
    {
      path: "/home",
      name: "Home",
      meta: {
        requireAuth: true,
      },
      component: () => import("./views/HomeView.vue"),
    },
    {
      path: "/not-found",
      name: "NotFound",
      component: () => import("./views/NotFound.vue"),
    },
  ],
};

export default (router: Router) => {
  router.addRoute("general", routes);
};
