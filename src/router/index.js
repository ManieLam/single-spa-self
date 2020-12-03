import Vue from 'vue'
import VueRouter from 'vue-router'
import micrApp from './micrApp'
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
    path: '/mainprogram',
    name: 'mainprogram',
    component: () => import(/* webpackChunkName: "mainprogram1" */ '../components/mainprogram1')
  },
  // {
  //   path: '/program1',
  //   redirect: 'http://localhost:3005/static/#/program1'
  // },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/404')
  }
].concat(
  micrApp
)

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
