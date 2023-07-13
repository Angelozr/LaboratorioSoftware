import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: '/laboratorios',
      name: 'laboratorios',
      component: () => import('../views/Laboratorios.vue')
    },
    {
      path: '/horarios',
      name: 'horarios',
      component: () => import('../views/horarios.vue')
    },
    {
      path: '/observaciones',
      name: 'observaciones',
      component: () => import('../views/Observaciones.vue')
    },
    {
      path: '/reservar',
      name: 'reservar',
      component: () => import('../views/Reservar.vue')
    },
    {
      path: '/datos',
      name: 'datos',
      component: () => import('../views/Datos.vue')
    },
    {
      path: "/general",
      name: "general",
      component: () => import("../views/General.vue"),
      meta: {
        auth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
    if (to.path === "/login" && auth.currentUser){
       next("/general")   
    } else if ( to.matched.some ((record) => record.meta.auth) && !auth.currentUser)
    {
      next("/login");
    } else {
       next();
    }
});

export default router;
