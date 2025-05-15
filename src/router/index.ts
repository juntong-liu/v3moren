import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import mallRoutes from './mall/index'
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/',
    component: () => import('@/views/Home.vue') // 确保有@路径别名
  },
   ...mallRoutes   // 商城多级路由模块
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router