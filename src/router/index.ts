import { createRouter, createWebHistory } from "vue-router";
import { isAuthenticated } from "@/auth/infrastucture/services";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      redirect: () => "login",
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "NotFound" },
    },
  ],
});

router.beforeEach((to, from) => {
  if (to.name !== "Login" && !isAuthenticated() && to.meta.requireAuth)
    return { name: "Login" };
  if (to.name === "Login" && isAuthenticated()) return { name: "Home" };
});

export default router;
