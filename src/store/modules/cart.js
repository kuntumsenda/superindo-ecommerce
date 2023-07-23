export const namespaced = true
export const state = {
  totalProductCart: 1
}
export const getters = {
  getTotalProductCart: state => state.totalProductCart
}
export const mutations = {}
export const actions = {}

export default {
  namespaced, state, getters, mutations, actions
}
