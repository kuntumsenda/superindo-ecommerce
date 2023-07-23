const state = {
  listProductInCart: []
}
const getters = {
  getTotalProductInCart(state) {
    let total = 0
    state.listProductInCart.forEach(el => {
      total = el.qty+total
    });
    return total
  },
  getListProductInCart: (state) => state.listProductInCart
}
const mutations = {
  PUSH_PRODUCT_TO_CART(state, payload) {
    let item = payload
    item['qty'] = 1
    state.listProductInCart.push(item)
  },
  INCREMENT_QTY_PRODUCT_IN_CART(state, payload){
    const item = state.listProductInCart.find(item => item.productId === payload.productId)
    item.qty++
  }
}
const actions = {
  addToCart ({ commit, state }, payload) {
    if(payload.stock > 0){
      const isAnyProductInCart = state.listProductInCart.find(item => item.productId === payload.productId)
      !isAnyProductInCart? commit('PUSH_PRODUCT_TO_CART', payload):commit('INCREMENT_QTY_PRODUCT_IN_CART', payload)
      commit('product/DECREMENT_STOCK', payload, { root: true })
    } 
  }
}

export default {
  namespaced: true, 
  state, 
  getters, 
  mutations, 
  actions
}
