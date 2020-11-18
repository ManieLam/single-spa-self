import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'

Vue.config.productionTip = false


let vueOptions = null
const isQiankun = window.__POWERED_BY_QIANKUN__

function render (props = {}) {
  const { container, routerBase, getGlobalState, onGlobalStateChange } = props
  console.log('getGlobalState:', getGlobalState)
  const router = new VueRouter({
    base: isQiankun ? routerBase : '/vue',
    routes
  })
  const elContainer = container ? container.querySelector('#app') : '#app'
  if (onGlobalStateChange) {
    onGlobalStateChange((state, prev) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log(state, prev);
      store.commit('global/setGlobalState', state)
    })
  }

  vueOptions = {
    // el: "#vueApp",
    router,
    store,
    render: h => h(App)
  }
  new Vue(vueOptions).$mount(elContainer)
}

if (!isQiankun) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑

  // 独立运行时，也注册一个名为global的store module
  // commonStore.globalRegister(store)
  // 模拟登录后，存储用户信息到global module
  const userInfo = { name: '我是独立运行时名字叫张三' } // 假设登录后取到的用户信息
  store.commit('global/setGlobalState', userInfo)

  render()
}

export async function bootstrap () {
  console.log('sub-app-vuejs bootstraped-----');
}
export async function mount (props) {
  console.log('sub-app-vuejs mount------');
  render(props)
}
export async function unmount (props) {
  console.log('sub-app-vuejs unmount-----');
  delete vueOptions.el
  // instance.$destroy()
  // instance.$el.innerHTML = ''
  // instance = null
}
export async function update (props) {
  console.log('sub-app-vuejs update------');
}