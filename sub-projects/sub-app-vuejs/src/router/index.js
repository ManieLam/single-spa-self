import Vue from 'vue'
import VueRouter from 'vue-router'
// const isQiankun = window.__POWERED_BY_QIANKUN__
let prefix = window.__POWERED_BY_QIANKUN__ ? '/micrApp/vue' + '/' : '/'
Vue.use(VueRouter)

const routes = [
  {
    path: prefix === '/' ? prefix : prefix.substring(0, prefix.length - 1),
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: prefix + 'about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "subapp-about" */ '../views/About.vue')
  }
]
console.log('micrapp-routes:', routes);
// const router = new VueRouter({
//   // 子项目设置history，base设置为父项目的一级路由。
//   base: '/vue/',
//   // mode: 'history',
//   routes
// })

export default routes
