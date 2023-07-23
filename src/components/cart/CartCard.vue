<script setup>
defineProps(['cartItem'])
</script>

<template>
  <div class="flex nowrap cart-card">
    <div class="img-product--wrapper">
      <img :src="cartItem.photo" :alt="cartItem.productName">
    </div>
    <div>
      <p class="text-capitalize text-subtitle-2">{{ cartItem.productName }}</p>
      <div class="text-capitalize text-secondary text-body-2 category--wrapper">
        <span v-for="(item, index) in cartItem.category" :key="index"><span v-if="index!=0">, </span>{{ item }}</span>
      </div>
      <div class="flex nowrap items-center text-body-2 price--wrapper">
        <div v-if="cartItem.discountPercent" class="discount--badge bg-primary-light-1 text-primary">{{ cartItem.discountPercent }}%</div>
        <s v-if="cartItem.priceDiscount" class="text-secondary price--discount">Rp. {{ cartItem.price }} <span class="mark-price"></span></s>
        <span class="text-weight-black text-body-1">Rp. {{ cartItem.price }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .cart-card{
    gap: 12px;
    max-height: 100px;
  }
  .img-product--wrapper{
    align-self: stretch;
    img{
      height: 100%;
      width: unset !important;
    }
  }
  .price--discount{ margin-right: 12px;}
  .category--wrapper{
    margin-top: 4px;
    margin-bottom: 10px;
  }
</style>