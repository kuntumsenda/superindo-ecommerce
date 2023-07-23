<script setup>
import kInput from '../input/Input.vue'
import { ref } from 'vue'
const urlLogo = ref("https://www.superindo.co.id/images/new/logo-superindo.png")
const menus = ref([
  {
    text: 'wishlist',
    icon: 'favorite',
    routeName: 'home'
  },
  {
    text: 'cart',
    icon: 'shopping_cart',
    routeName: 'cart'
  }
])
const search = ref('')
</script>
<template>
  <header class="header--container">
    <div class="container flex nowrap justify-between items-center full-width">
      <a class="logo--wrapper" @click="$router.push({name: 'home'})">
        <img :src="urlLogo" alt="superindo_logo">
      </a>
      <div class="header-search--wrapper flex nowrap items-center">
        <button class="btn btn-flat">Kategori</button>
        <kInput v-model="search" variant="outline" placeholder="Cari di Super Indo" style="width: 100%;">
          <template #prepend-inner>
            <span class="material-symbols-outlined">search</span>
          </template>
        </kInput>
      </div>
      <div class="headers-icon--wrapper flex nowrap items-center">
        <div v-for="menu in menus" :key="menu.text" :class="`item ${menu.text}`">
          <a class="flex nowrap items-end text-primary" @click="$router.push({name: menu.routeName})">
            <span class="material-symbols-outlined">{{menu.icon}}</span>
            <span class="text-body-2 text-capitalize">{{menu.text}}</span>
            <span v-if="menu.text=='cart' && $store.getters['cart/getTotalProductCart']" class="bagde--count">{{$store.getters['cart/getTotalProductCart']}}</span>
          </a>
        </div>
        <div class="item account">
          <a class="flex nowrap items-center">
            <div class="account-avatar--wrapper">
              <img src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Transparent-Images.png" alt="avatar">
            </div>
            <span class="text-body-2 text-secondary text--profile-name">Kuntumse...</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import './../../assets/css/module/variable';

.headers-icon--wrapper{
  .item{
    padding: 0 10px;
    position: relative;
    a{
      gap: 5px;
    }
  }
}
.account{
  a{
    height: 40px;
  }
}
.account-avatar--wrapper{
  background-color: $secondary;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}
.text--profile-name{
  padding-top: 6px;
}
.bagde--count{
  font-size: 11px;
  font-weight: $bold;
  border-radius: 50%;
  padding: 2px 6px;
  color: $white;
  background: $primary;
  position: absolute;
  left: 27px;
  top: -8px;
  z-index: 10;
}
@media screen and (min-width: $md-screen) {
  .header-search--wrapper{
    margin-right: 16px;
    margin-left: 16px;
  }
}
@media screen and (min-width: $lg-screen) {
  .header-search--wrapper{
    width: 50%;
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>