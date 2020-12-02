import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "parentbase" */ '../views/Home'),
    children: [{
      path: '/mainprogram1',
      name: 'mainprogram1',
      component: () => import(/* webpackChunkName: "mainprogram1" */ '../components/mainprogram1')
    }]
  },
  {
    // 子项目history模式下，父项目的模糊匹配。不建议这样做
    // path: '/vue*',
    path: '/micrApp/vue',
    name: 'vue',
    component: () => import(/* webpackChunkName: "about" */ '../components/Vue'),
    meta: {
      isMicrApp: true
    }
  },
  {
    // 针对path: '/micrApp/vue/*的匹配，不然会进到404
    path: '/micrApp/vue/*',
    hidden: true,
    name: 'vue',
    component: () => import(/* webpackChunkName: "about" */ '../components/Vue')
  },
  {
    path: '/mainprogram',
    name: 'mainprogram',
    component: () => import(/* webpackChunkName: "mainprogram1" */ '../components/mainprogram1')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "mainprogram1" */ '../views/404')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
