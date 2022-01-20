import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import result from '../views/Front/result.vue';

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Front/Homepage.vue'),
      },
      {
        path: '/FoodLive',
        name: 'FoodLive',
        component: () => import('../views/Front/FoodLivepage.vue'),
      },
      {
        path: '/result/:type/:option/:area',
        name: 'result',
        component: result,
        props: (route) => ({
          type: route.params.type,
          option: route.params.option,
          area: route.params.area,
          que: route.query.q,
        }),
      },
    ],
  },
  {
    path: '/Traffic',
    name: 'Traffic',
    component: () => import('../views/Front/Traffic.vue'),
  },
  {
    path: '/Test',
    name: 'Test',
    component: () => import('../views/Front/Test.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
