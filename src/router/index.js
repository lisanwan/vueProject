import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/element-ui.vue'),
    children: [
      {
        path: '/echarts',
        component: () => import('../views/echarts.vue')
      }
    ]
  }
  // {
  //   path: '/echarts',
  //       component: () => import('../views/echarts.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
