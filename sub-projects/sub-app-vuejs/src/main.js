import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
import commonStore from '../../../common/store'

Vue.config.productionTip = false


let vueOptions = null
const isQiankun = window.__POWERED_BY_QIANKUN__

function render (props = {}) {
  console.log('爸爸传回来的数据：', props)
  const { container, routerBase, globalStore } = props
  const router = new VueRouter({
    // base: isQiankun ? routerBase : '/vue', // 更换为history时开启
    routes
  })
  if (isQiankun) {
    router.beforeEach((to, from, next) => {
      if (!to.path.includes('micrApp')) {
        next({
          path: '/micrApp/vue' + to.path
        })
      } else {
        next()
      }
    })
  }
  const elContainer = container ? container.querySelector('#app') : '#app'

  vueOptions = {
    // el: "#vueApp",
    router,
    store,
    render: h => h(App)
  }
  new Vue(vueOptions).$mount(elContainer)
}

if (!isQiankun) {
  // 这里是子应用独立运行的环境，比如实现子应用的登录逻辑
  // 独立运行时，也注册一个名为global的store module
  commonStore.globalRegister(store)
  // 存储独立数据，这里的globalModule，是同个common/store注册后的globalModule，相当于子应用里的globalModule
  const userInfo = { name: '我是当子应用独立运行时的全局global数据' }
  // console.info('独立的store：', store.state)
  store.commit('global/setGlobalState', { user: userInfo })
  render()
}

export async function bootstrap () {
  console.log('sub-app-vuejs bootstraped-----');
}
export async function mount (props) {
  // console.log('sub-app-vuejs mount------');
  // 注册共享storeModule，获取父、其他子的数据
  commonStore.globalRegister(store, props.globalStore)
  render(props)
}
export async function unmount (props) {
  // console.log('sub-app-vuejs unmount-----');
  delete vueOptions.el
  // instance.$destroy()
  // instance.$el.innerHTML = ''
  // instance = null
}
export async function update (props) {
  console.log('sub-app-vuejs update------');
}