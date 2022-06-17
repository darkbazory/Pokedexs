import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Detalle from "../views/Detalle.vue"
import NotFound from "../views/NotFound.vue"

var a = "([1-9]|[1-9][0-9]|[1-7][0-9]{2}|8[0-8][0-9]|89[0-8])";

const routes = [
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id"+a,
    name: "Detalle",
    component: Detalle,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;