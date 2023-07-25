import productService from '@/services/product'
const state = {
  products: [
    {
      photo: 'https://live.staticflickr.com/65535/53069203617_a4408dd8d3_z.jpg',
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
      photo: 'https://live.staticflickr.com/65535/53070310488_60e97fe394_n.jpg',
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
      photo: 'https://live.staticflickr.com/65535/53070313158_d2ff6182ac_n.jpg',
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
      photo: 'https://live.staticflickr.com/65535/53070210280_3fac488300_n.jpg',
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
      photo: 'https://live.staticflickr.com/65535/53070211760_0d24b6aca6_m.jpg',
      productId: 5,
      category: ['minuman', 'susu'],
      productName: 'meg cheddar cheese  box 160gr',
      price: 16000,
      discountPercent: 0,
      priceDiscount: 0,
      stock: 0,
      stockAfterCart: 0,
      rating: 3,
    },
    {
      photo: 'https://live.staticflickr.com/65535/53070319193_3f7549076c_n.jpg',
      productId: 6,
      category: ['snack'],
      productName: 'rinso cair',
      price: 7000,
      discountPercent: 0,
      priceDiscount: 0,
      stock: 50,
      stockAfterCart: 50,
      rating: 5,
    },
    {
      photo: 'https://live.staticflickr.com/65535/53069818031_c122f38a67_z.jpg',
      productId: 7,
      category: ['snack'],
      productName: 'chitato rasa daging bakar',
      price: 10000,
      discountPercent: 0,
      priceDiscount: 0,
      stock: 20,
      stockAfterCart: 20,
      rating: 4,
    },
    {
      photo: 'https://live.staticflickr.com/65535/53070009384_17f9438279_n.jpg',
      productId: 8,
      category: ['minuman', 'susu'],
      productName: 'susu bear brand original',
      price: 10000,
      discountPercent: 0,
      priceDiscount: 0,
      stock: 10,
      stockAfterCart: 10,
      rating: 4,
    },
    {
      photo: 'https://live.staticflickr.com/65535/53070011134_6380bd3f8d.jpg',
      productId: 9,
      category: ['makanan', 'instant'],
      productName: 'indomie goreng jumbo rasa ayam bakar',
      price: 4000,
      discountPercent: 0,
      priceDiscount: 0,
      stock: 10,
      stockAfterCart: 10,
      rating: 5,
    },
    {
      photo: 'https://live.staticflickr.com/65535/53070322448_d7b59a2c55.jpg',
      productId: 10,
      category: ['snack', 'coklat'],
      productName: 'oreo biskuit fill coklat',
      price: 12000,
      discountPercent: 0,
      priceDiscount: 0,
      stock: 10,
      stockAfterCart: 10,
      rating: 5,
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
  },
  SORT_NAME(state, sort) {
    console.log('masuk')
    if(sort=='asc'){
      state.products.sort((a, b)=> a.productName < b.productName ? -1 : 1)
      return
    }
    state.products.sort((a, b)=> a.productName > b.productName ? -1 : 1)
  },
  SORT_PRICE(state, sort) {
    console.log(sort)
    if(sort=='asc'){
      state.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      return
    }
    state.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
  }
}
const actions = {
  applyFilter({commit}, payload) {
    payload.sortBy === 'name' ? commit('SORT_NAME', payload.sort) : commit('SORT_PRICE', payload.sort)
  },
  async getListProductFavourite({ rootstate }, params) {
    try{
      const res = await productService.getProductFavorite(rootstate.general.webService, params)
      console.log(res.data)
    }catch(err){
      console.log(err)
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
