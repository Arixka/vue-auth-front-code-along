import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Logged from "../views/Logged.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/logged",
    name: "Logged",
    component: Logged,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!localStorage.token) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;
