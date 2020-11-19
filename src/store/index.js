import { initGlobalState } from 'qiankun'
import Vue from 'vue'
const initialState = Vue.observable({
  user: {
    name: '主应用数据之爸爸教你做人'
  }
})

const actions = initGlobalState(initialState)

actions.onGlobalStateChange((newState, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('main change', JSON.stringify(newState), JSON.stringify(prev))

  for (const key in newState) {
    initialState[key] = newState[key]
  }
})

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
  // 有key，表示取globalState下的某个子级对象
  // 无key，表示取全部
  console.log('请求爸爸数据', initialState);
  return key ? initialState[key] : initialState
}
export default actions