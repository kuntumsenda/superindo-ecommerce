const state = {
  listProductInCart: [],
  totalPriceInCart: 0,
  totalDiscountInCart: 0,
  totalCheckoutPrice: 0
}
const getters = {
  getTotalProductInCart(state) {
    let total = 0
    state.listProductInCart.forEach(el => {
      if(typeof el.qty === 'number') total = el.qty+total
      else undefined
    });
    return total
  },
  getListProductInCart: (state) => state.listProductInCart
}
const mutations = {
  PUSH_PRODUCT_TO_CART(state, payload) {
    let item = payload
    item['discount'] = item.priceDiscount?item.price-item.priceDiscount:0
    item['totalPrice'] = item.price*payload.qty
    item['totalPriceDiscount'] = item.priceDiscount*payload.qty
    state.listProductInCart.push(item)
  },
  SPLICE_PRODUCT_IN_CART(state, id) {
    const index = state.listProductInCart.findIndex(item => item.productId === id)
    state.listProductInCart.splice(index, 1)
  },
  INCREMENT_QTY_PRODUCT_IN_CART(state, payload){
    const item = state.listProductInCart.find(item => item.productId === payload.productId)
    item.qty++
    item.totalPrice = item.price*item.qty
    item.totalPriceDiscount = item.priceDiscount*item.qty
  },
  DECREMENT_QTY_PRODUCT_IN_CART(state, payload){
    const item = state.listProductInCart.find(item => item.productId === payload.productId)
    item.qty--
    console.log(item.qty)
    item.totalPrice = item.price*item.qty
    item.totalPriceDiscount = item.priceDiscount*item.qty
  },
  UPDATE_QTY_PRODUCT_IN_CART(state, payload){
    const item = state.listProductInCart.find(item => item.productId === payload.data.productId)
    console.log(item)
    console.log(payload.newQty)
    item.qty = payload.newQty
    item.totalPrice = item.price*item.qty
    item.totalPriceDiscount = item.priceDiscount*item.qty
  },
  COUNT_TOTAL_PRICE_IN_CART(state){
    state.totalPriceInCart = 0
    state.totalDiscountInCart = 0
    state.totalCheckoutPrice = 0
    for(let item of state.listProductInCart){
      state.totalPriceInCart += item.totalPrice
      state.totalDiscountInCart += item.discount
      item.discount?state.totalCheckoutPrice += item.totalPriceDiscount:state.totalCheckoutPrice += item.totalPrice
    }
  }
}
const actions = {
  addToCart ({ commit, state }, payload) {
    if(payload.stockAfterCart > 0){
      const isAnyProductInCart = state.listProductInCart.find(item => item.productId === payload.productId)
      if(!isAnyProductInCart){
        commit('PUSH_PRODUCT_TO_CART', payload)
        commit('COUNT_TOTAL_PRICE_IN_CART')
        commit('product/UPDATE_STOCK', payload, { root: true })
      }else{ 
        commit('INCREMENT_QTY_PRODUCT_IN_CART', payload)
        commit('COUNT_TOTAL_PRICE_IN_CART')
        commit('product/DECREMENT_STOCK', payload.productId, { root: true })
      }
    } 
  },
  removeFromCart ({ commit }, payload) { 
    commit('SPLICE_PRODUCT_IN_CART', payload.productId)
    commit('COUNT_TOTAL_PRICE_IN_CART')
    commit('product/UPDATE_STOCK', payload, { root: true })
  },
  updateCart ({ commit }, payload) {
    console.log(payload)
    const data = payload.data
    if(payload.type == 'increment' && data.stockAfterCart > 0){
      commit('INCREMENT_QTY_PRODUCT_IN_CART', data)
      commit('COUNT_TOTAL_PRICE_IN_CART')
      commit('product/DECREMENT_STOCK', data.productId, { root: true })
      return
    }
    if(payload.type == 'decrement' && data.qty > 1){
      commit('DECREMENT_QTY_PRODUCT_IN_CART', data)
      commit('COUNT_TOTAL_PRICE_IN_CART')
      commit('product/INCREMENT_STOCK', data.productId, { root: true })
      return
    }
    if(payload.type == 'input'){
      const itemCart = state.listProductInCart.find(item => item.productId === payload.data.productId)
      commit('UPDATE_QTY_PRODUCT_IN_CART', payload)
      commit('COUNT_TOTAL_PRICE_IN_CART')
      commit('product/UPDATE_STOCK', itemCart, { root: true })
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
