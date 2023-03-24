import type { Router, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw = {
  path: "",
  component: () => import("./views/MainTemplate.vue"),
  children: [
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("./views/RegisterView.vue"),
    },
  ],
};

export default (router: Router) => {
  router.addRoute("auth", routes);
};
