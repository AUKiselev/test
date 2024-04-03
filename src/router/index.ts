import { createRouter, createWebHistory } from 'vue-router';
import authCheck from './libs/authCheck';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/index.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/pages/auth.vue'),
    },
  ],
});

router.beforeEach(async (to) => {
  const isAuthenticated = await authCheck();
  if (isAuthenticated) return to.name === 'auth' ? { name: 'index' } : true;
  return to.name === 'auth' ? true : { name: 'auth' };
});

export default router;
