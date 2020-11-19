/* 子应用私有store */
import Vue from 'vue'
import Vuex from 'vuex'
// import global from './global'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {name: '我是vue子应用私有的数据'}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  //   global
  }
})
