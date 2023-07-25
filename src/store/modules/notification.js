const state = {
  noFitur: {
    type: 'info',
    title: 'Info',
    text: 'Saat ini Fitur tidak tersedia'
  },
  addToCartSuccess: {
    type: 'success',
    title: 'Yeay!',
    text: 'Produk telah ditambahkan ke keranjang'
  },
  subscribeSuccess: {
    type: 'success',
    title: 'Yeay!',
    text: 'Kami telah mengirim News Letter ke Email anda'
  },
  removeCartSuccess: {
    type: 'error',
    title: 'Hapus',
    text: 'Produk telah dihapus dari keranjang'
  },
  productNotAvailable: {
    type: 'warning',
    title: 'Sorry... :(',
    text: 'Produk sudah tidak tersedia'
  }
}

export default {
  namespaced: true, 
  state, 
}
