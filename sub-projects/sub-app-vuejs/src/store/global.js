const state = {
  user: {}
}
const mutations = {
  setGlobalState (state, datas) {
    state.user = datas
  }
}

export default {
  namespaced: true,
  state,
  mutations
}