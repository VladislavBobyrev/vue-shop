import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ShopView from '../views/shopView/ShopView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'shop',
    component: ShopView,
  },
  {
    path: '/basket',
    name: 'basket',
    component: () => import(/* webpackChunkName: "about" */ '../views/basketView/BasketView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: 'active',
})

export default router