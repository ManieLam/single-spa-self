import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "parentbase" */ '../views/Home')
  },
  {
    // 子项目history模式下，父项目的模糊匹配。不建议这样做
    // path: '/vue*',
    path: '/vue',
    name: 'vue',
    component: () => import(/* webpackChunkName: "about" */ '../components/Vue')
  },
  {
    path: '/react',
    name: 'react',
    component: () => import(/* webpackChunkName: "about" */ '../components/React')
  // },
  // {
  //   path: '/program2',
  //   name: 'program2',
  //   component: () => import(/* webpackChunkName: "about" */ '../components/Vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
