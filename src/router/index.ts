import Main from '../views/main.vue';
import * as VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router;
