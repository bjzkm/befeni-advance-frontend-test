import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: 'fabrics' }
    },
    {
      path: "/fabrics",
      name: "fabrics",
      component: () => import('../views/fabric/Fabrics.vue'),
    },
    {
      path: "/fabrics/:id",
      name: "fabricDetail",
      component: () => import('../views/fabric/FabricDetail.vue'),
    },
  ],
});

function render(path: String) {
  return import(/* @vite-ignore */ '../views/' + path + '.vue')
}

export default router;
