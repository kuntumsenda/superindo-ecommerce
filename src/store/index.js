import { createStore } from 'vuex'
import user from './modules/user'
import product from './modules/product'
import cart from './modules/cart'
import notification from './modules/notification'

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
    cart,
    notification
  }
})
