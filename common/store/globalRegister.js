/**
 * 在每个子应用实例中注册贯彻主、子应用共享的store数据，子应用单独运行时，为防止运行异常，也需要注册。
 * @param {注册vuex实例，一般为子应用} store
 * @param {qiankun下发的props} props
*/
function registerGlobalModule (store, props = {}) {
  // 官网的store.hasModule 无法使用
  if (!store) {
    console.info(store._modules.get(['global']))
    console.info(store)
    console.info('store.hasModule出现异常：%c%s', 'color:yellow;', store.hasModule)
    return
  }

  // 获取初始化的state, 当存在props数据，优先存取父应用中的store(@/store)，当不存在props数据时，则表示在子应用同样注册一个命名空间为global的storeModule
  const initState = props.getGlobalState && props.getGlobalState() || {
    menu: [],
    user: {}
  }
  
  // 将父应用的数据存储到子应用中，命名空间固定为global
  // if (!store.hasModule('global')) {
  if (!store._modules.get(['global'])) {
    const globalModule = {
      namespaced: true,
      state: initState,
      actions: {
        // 子应用改变state并通知父应用
        setGlobalState ({ commit }, payload) {
          commit('setGlobalState', payload)
          commit('emitGlobalState', payload)
        },
        // 初始化，只用于mount时同步父应用的数据
        initGlobalState ({ commit }, payload) {
          commit('setGlobalState', payload)
        },
      },
      mutations: {
        setGlobalState (state, payload) {
          // eslint-disable-next-line
          console.log('通过common/store注册后的globalModule修改payload', payload);
          state = Object.assign(state, payload)
        },
        // 通知父应用
        emitGlobalState (state) {
          if (props.setGlobalState) {
            props.setGlobalState(state)
          }
        }
      }
    }
    // 模块动态注册store
    store.registerModule('global', globalModule)
    console.log('已经注册全局globalstore', store.state)
  } else {
    // 每次mount时，都同步一次父应用数据
    console.log('每次mount时，都同步一次父应用数据', initState)
    store.dispatch('global/initGlobalState', initState)
  }
}

export default registerGlobalModule;