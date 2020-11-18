import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import './single.spa.config.js' // 单纯使用single-spa框架的时候启用
import microApps from './register.config'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false;
Vue.use(Ant);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

registerMicroApps(microApps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
})

start()
