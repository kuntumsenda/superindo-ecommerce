<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CartCard from '@/components/cart/CartCard.vue'
const store = useStore()
const cartList = computed(() => store.getters['cart/getListProductInCart'])
const totalCart = computed(() => store.getters['cart/getTotalProductInCart'])
</script>
<template>
  <div class="container">
    <section v-if="totalCart<1" class="cart-empty--wrapper">
      <div class="empty-cart--illust">
        <img src="@/assets/illustration/empty-cart.png" alt="">
      </div>
      <h2 class="text-weight-bolder">Keranjang Belanja Kosong</h2>
      <p class="text-secondary">Yuk, isi dengan barang - barang kebutuhanmu</p>
      <button class="btn btn-primary" @click="$router.push({name: 'home'})">Mulai Belanja</button>
    </section>
    <section>
      <div v-for="item in cartList" :key="item.productId">
        <CartCard :cartItem="item" />
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
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
</style>