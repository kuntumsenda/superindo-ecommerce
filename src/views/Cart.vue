<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CartCard from '@/components/cart/CartCard.vue'
const store = useStore()
const cartList = computed(() => store.getters['cart/getListProductInCart'])
const totalCart = computed(() => store.getters['cart/getTotalProductInCart'])
const totalPrice = computed(() => store.state.cart.totalPriceInCart)
const totalDiscount = computed(() => store.state.cart.totalDiscountInCart)
const totalCheckoutPrice = computed(() => store.state.cart.totalCheckoutPrice)

</script>
<template>
  <div class="container">
    <section v-if="!totalCart" class="cart-empty--wrapper">
      <div class="empty-cart--illust">
        <img src="@/assets/illustration/empty-cart.png" alt="">
      </div>
      <h2 class="text-weight-bolder">Keranjang Belanja Kosong</h2>
      <p class="text-secondary">Yuk, isi dengan barang - barang kebutuhanmu</p>
      <button class="btn btn-primary" @click="$router.push({name: 'home'})">Mulai Belanja</button>
    </section>
    <div v-else class="cart--wrapper flex nowrap justify-between">
      <section class="section--lis-cart">
        <h3>Keranjang</h3>
        <div v-for="(item, index) in cartList" :key="item.productId">
          <hr v-if="index == 0" class="line--space-product">
          <CartCard :cartItem="item" />
          <hr class="line--space-product">
        </div>
      </section>
      <div class="summary-cart--container">
        <section class="section--summary-cart">
          <h4>Ringkasan Belanja</h4>
          <div class="flex nowrap justify-between">
            <p>Total Harga ({{ totalCart }} Item)</p>
            <p>Rp. {{ totalPrice }}</p>
          </div>
          <div class="flex nowrap justify-between total-discount--wrapper">
            <p>Anda telah Berhemat</p>
            <p>Rp. {{ totalDiscount }}</p>
          </div>
          <hr>
          <div class="flex nowrap justify-between text-subtitle-2 text-weight-black price-checkout--wrapper">
            <p>Total Harga</p>
            <p>Rp. {{ totalCheckoutPrice }}</p>
          </div>
          <button class="btn btn-primary btn--checkout">Checkout ({{ totalCart }})</button>
        </section>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container{
  position: relative;
}
.cart-empty--wrapper{
  padding: 30px 0;
  text-align: center;
  p{
    margin: 10px 0 20px;
  }
}
.empty-cart--illust{
  max-width: 300px;
  margin: 0 auto;
}
.cart--wrapper{
  max-width: 1000px;
  margin: 0 auto;
  h3{
    margin-bottom: 16px;
  }
}
.line--space-product{
  margin-top: 16px;
  border-width: 3px;
  border-color: #364a5161
}
.summary-cart--container{
  max-width: 350px;
  width: 100%;
  padding-top: 45px;
  h4{ margin-bottom: 20px; }
}
.section--lis-cart{
  height: calc(100vh - 160px);
  overflow-y: auto;
  padding-right: 40px;
}
.section--summary-cart{
  padding: 16px;
  border-radius: 8px;
  border-color: #364a5161;
  box-shadow: 0 1px 4px rgba(141,150,170,0.4);
}
.total-discount--wrapper{
  padding: 10px 0 20px;
}
.price-checkout--wrapper{
  padding: 20px 0 30px;
}
.btn--checkout{
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>