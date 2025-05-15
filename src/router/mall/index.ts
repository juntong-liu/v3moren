const routes = [
  {
    path: '/mall',
    component: () => import('@/views/mall/MallIndex.vue'),
    children: [
      { 
        path: ':category',               // 二级路由（动态参数）
        component: () => import('@/views/mall/Category.vue'),
        children: [
          {
            path: ':productId',          // 三级路由
            component: () => import('@/views/mall/Product.vue')
          }
        ]
      },
      { 
        path: 'class2',               // 我是固定的，不能动态
        component: () => import('@/views/mall/Category2.vue')
      }
    ]
  }
]
export default routes