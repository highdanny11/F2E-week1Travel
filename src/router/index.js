import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../views/Front/Homepage.vue'),
      },
      {
        path: 'AttractionsResult/:id',
        component: () => import('../views/Front/AttractionsResult.vue'),
      },
    ],
  },
  {
    path: '/FoodLive',
    name: 'FoodLive',
    component: () => import('../views/FoodLive.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Front/FoodLivepage.vue'),
      },
      {
        path: 'FoodResult/:id',
        component: () => import('../views/Front/FoodResult.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
