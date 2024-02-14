import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "HomeComponent",
    component: Home,
  },
  {
    path: "/pedidos",
    name: "PedidosComponent",
    component: () =>
      import(/* webpackChunkName: "pedidos" */ "../views/Pedidos.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
