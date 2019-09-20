import Vue from 'vue'
import Router from 'vue-router'

import routerBeforeHandler from './routerMiddleware/routerBeforeHandler'
import routerAfterHandler from './routerMiddleware/routerAfterHandler'

Vue.use(Router)

export const routesList = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home/home'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () =>
      import(/* webpackChunkName: "personal" */ '@/pages/personal/personal'),
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: () =>
      import(/* webpackChunkName: "order" */ '@/pages/order/order'),
    meta: {
      title: '订单'
    }
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () =>
      import(/* webpackChunkName: "classify" */ '@/pages/classify/classify'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '@/pages/shop/shop'),
    meta: {
      title: '商品列表'
    }
  }
]
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routesList
})

router.beforeEach((to, from, next) => {
  // 全局route 中间件
  routerBeforeHandler(to, from, next)
})

router.afterEach((to, from) => {
  // 全局route 中间件
  routerAfterHandler(to, from)
})

export default router
