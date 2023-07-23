import { createStore } from 'vuex'
import user from './modules/user'
import product from './modules/product'
import cart from './modules/cart'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    product,
    cart
  }
})
