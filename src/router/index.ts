import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home.vue') // 确保有@路径别名
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router