<script setup>
import { useStore } from 'vuex'
import StarRating from 'vue-star-rating'
import { useNotification } from "@kyvg/vue3-notification";

defineProps(['product'])
const store = useStore()
const notification = useNotification()
function addToCart(item) {
  if(!item.stock || !item.stockAfterCart){
    notification.notify(store.state.notification.productNotAvailable);
    return false
  }
  let payload = item
  payload['qty'] = payload.qty?payload.qty:1
  store.dispatch('cart/addToCart', payload)
  notification.notify(store.state.notification.addToCartSuccess);
}
</script>
<template>
  <div class="product--wrapper">
    <div class="product-img--wrapper">
      <img v-if="product.photo" :src="product.photo" :alt="product.productName">
      <img v-else src="@/assets/illustration/no-img.jpg">
    </div>
    <div class="product-content--wrapper">
      <div class="text-capitalize text-secondary text-body-2 text-ellipsis-2 category-product">
        <span v-for="(item, index) in product.category" :key="index"><span v-if="index!=0">, </span>{{ item }}</span>
      </div>
      <p :class="`text--stock text-weight-medium ${product.stockAfterCart?'text-positive':'text-grey-1'}`">{{ product.stockAfterCart?'In Stock':'Out of Stock' }}</p>
      <div class="title--product"><h5 class="text-ellipsis-2 text-subtitle-2 text-capitalize">{{ product.productName }}</h5></div>
      <star-rating read-only v-model:rating="product.rating" :star-size="16" />
      <div class="price--product text-weight-bold flex nowrap items-end text-subtitle-2"><span>{{ $filters.currencyIDR(product.priceDiscount?product.priceDiscount:product.price) }}</span></div>
      <div :class="`price-regular--product flex nowrap items-center text-body-2 ${!product.discountPercent?'no-discount':''}`">
        <div v-if="product.discountPercent" class="discount--badge bg-primary-light-1 text-primary">{{ product.discountPercent }}%</div>
        <s v-if="product.priceDiscount" class="text-secondary regular-price">{{ $filters.currencyIDR(product.price) }}<span class="mark-price"></span></s>
      </div>
      <div>
        <button :class="`btn btn-accent btn--add-cart flex nowrap items-center ${!product.stockAfterCart?'btn--disable':''}`" @click="addToCart(product)">
          <span class="material-symbols-outlined">shopping_cart</span>
          <span>{{product.stockAfterCart ? 'Add To Cart' : 'Sold Out'}}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product--wrapper{
  border: 1px solid var(--NN300,#BFC9D9);
  border-radius: 12px;
  &:hover{
    box-shadow: 0 1px 4px rgba(141,150,170,0.4);
  }
}
.product-img--wrapper{
  height: 200px;
  margin-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid var(--NN300,#BFC9D9);
  position: relative;
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 200px;
    border-radius: 12px 12px 0 0;
  }
}
.product-content--wrapper{
  padding: 0 24px 24px;
}
.text--stock{
  margin: 4px 0;
}
.title--product{
  margin-bottom: 4px;
  min-height: 50.67px;
}
.price--product{
  margin-top: 12px;
  margin-bottom: 8px;
  gap: 8px;
}
.price-regular--product{
  margin-bottom: 20px;
}
.btn--add-cart{ gap: 8px }
.no-discount{ height: 24.67px;}
.category-product{ height: 35px; }
</style>