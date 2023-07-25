const state = {
  products: [
    {
      photo: 'https://picsum.photos/500/300',
      productId: 1,
      category: ['minuman', 'susu'],
      productName: 'indomilk susu UHT chocolate 950ml',
      price: 17490,
      discountPercent: 15,
      priceDiscount: 14390,
      stock: 999,
      stockAfterCart: 999,
      rating: 5,
    },
    {
      photo: 'https://picsum.photos/500/300',
      productId: 2,
      category: ['makanan', 'frozen food'],
      productName: 'so good chicken nugget crispy pck 400gr',
      price: 51990,
      discountPercent: 25,
      priceDiscount: 36500,
      stock: 4,
      stockAfterCart: 4,
      rating: 4,
    },
    {
      photo: 'https://picsum.photos/500/300',
      productId: 3,
      category: ['snack'],
      productName: 'simba choco chips box 330gr',
      price: 37590,
      discountPercent: 30,
      priceDiscount: 25000,
      stock: 999,
      stockAfterCart: 999,
      rating: 3,
    },
    {
      photo: 'https://picsum.photos/500/300',
      productId: 4,
      category: ['kebutuhan pokok', 'bumbu dapur'],
      productName: '365 minyak goreng PCH 2000ml',
      price: 33900,
      discountPercent: 0,
      priceDiscount: 0,
      stock: 999,
      stockAfterCart: 999,
      rating: 2,
    },
    {
      photo: 'https://picsum.photos/500/300',
      productId: 5,
      category: ['minuman', 'susu'],
      productName: 'meg cheddar cheese  box 160gr',
      price: 16000,
      discountPercent: 0,
      priceDiscount: 0,
      stock: 0,
      stockAfterCart: 0,
      rating: 3,
    }
  ]
}
const getters = {
  getProducts(state) { return state.products }
}
const mutations = {
  DECREMENT_STOCK(state, id){
    const product = state.products.find(product => product.productId === id)
    product.stockAfterCart--
  },
  INCREMENT_STOCK(state, id){
    const product = state.products.find(product => product.productId === id)
    product.stockAfterCart++
  },
  UPDATE_STOCK(state, payload) {
    const product = state.products.find(product => product.productId === payload.productId)
    product.stockAfterCart = product.stock-payload.qty
  }
}
const actions = {}

export default {
  namespaced: true, 
  state, 
  getters,
  mutations, 
  actions
}
