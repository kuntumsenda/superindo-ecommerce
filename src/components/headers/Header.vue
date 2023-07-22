<script>
import { ref } from 'vue'
export default {
  setup() {
    const urlLogo = ref("https://www.superindo.co.id/images/new/logo-superindo.png")
    const menu = ref([
      {
        text: 'wishlist',
        icon: 'favorite'
      },
      {
        text: 'cart',
        icon: 'shopping_cart'
      }
    ])

    return {
      urlLogo,
      menu
    }
  },
}
</script>

<template>
  <header class="header--container">
    <a class="logo--wrapper" @click="$router.push({name: 'home'})">
      <img :src="urlLogo" alt="superindo_logo">
    </a>
    <div class="headers-icon--wrapper">
      <div class="item wishlist">
        <a class="flex nowrap items-end text-primary">
          <span class="material-symbols-outlined">favorite</span>
          <span class="text-body-2">Wishlist</span>
        </a>
        <span class="material-symbols-outlined">
shopping_cart
</span>
      </div>
      <div class="item cart"></div>
      <div class="item account"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.headers-icon--wrapper{
  .item{
    padding: 0 10px;
    a{
      gap: 5px;
    }
  }
}
</style>