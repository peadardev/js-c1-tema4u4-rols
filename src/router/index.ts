import { authGuard, roleGuard } from '@/modules/auth/guards/authGuard';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guest',
      component: () => import('@/modules/pages/GuestPanel.vue'),
    },
    {
      path: '/admin/config',
      name: 'admin',
      component: () => import('@/modules/pages/AdminConfig.vue'),
      beforeEnter: [authGuard, roleGuard('Admin')],
    },
    {
      path: '/admin/editor',
      name: 'editor',
      component: () => import('@/modules/pages/EditorPanel.vue'),
      beforeEnter: [authGuard, roleGuard('Admin', 'Editor')],
    },
  ],
});

export default router;
