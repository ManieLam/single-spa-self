import store from './store'

const microApps = [
  {
    name: 'sub-app-vue',
    // entry: process.env.SUB_APP_VUE,
    entry: '//localhost:3000/', // TODO 公共端口管理.env.development
    // activeRule: (location) => location.pathname.startsWith('/vue') // 如果采用函数，则子应用中的main.js需要同步修改
    activeRule: '/vue'
  }
]
console.log('store:', store)

const apps = microApps.map(app => {
  return {
    ...app,
    container: '#single-vue',
    props: {
      routerBase: app.activeRule, // 下发基础路由
      globalStore: store // 下发store，计划父-子，子-子交互
      // getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps