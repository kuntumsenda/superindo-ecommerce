<script setup>
import { useStore } from 'vuex'
import StarRating from 'vue-star-rating'
import { useNotification } from "@kyvg/vue3-notification";

defineProps(['product'])
const store = useStore()
const notification = useNotification()
function addToCart(item) {
  if(!item.stock){
    return false
  }
  store.dispatch('cart/addToCart', item)
  notification.notify({
    title: `Produk telah ditambahkan ke keranjang`,
    type: 'success'
  });
}
</script>
<template>
  <div class="product--wrapper">
    <div class="product-img--wrapper">
      <img :src="product.photo" :alt="product.productName">
    </div>
    <div class="product-content--wrapper">
      <div class="text-capitalize text-secondary text-body-2 text-ellipsis-2 category-product">
        <span v-for="(item, index) in product.category" :key="index"><span v-if="index!=0">, </span>{{ item }}</span>
      </div>
      <p :class="`text--stock text-weight-medium ${product.stock?'text-positive':'text-grey-1'}`">{{ product.stock?'In Stock':'Out of Stock' }}</p>
      <h5 class="title--product  text-ellipsis-2 text-subtitle-2 text-capitalize">{{ product.productName }}</h5>
      <star-rating read-only v-model:rating="product.rating" :star-size="16" />
      <div class="price--product text-weight-bold flex nowrap items-end text-subtitle-2"><span>Rp. {{ product.priceDiscount?product.priceDiscount:product.price }}</span></div>
      <div :class="`price-regular--product flex nowrap items-center text-body-2 ${!product.discountPercent?'no-discount':''}`">
        <div v-if="product.discountPercent" class="discount--badge bg-primary-light-1 text-primary">{{ product.discountPercent }}%</div>
        <s v-if="product.priceDiscount" class="text-secondary regular-price">Rp. {{ product.price }} <span class="mark-price"></span></s>
      </div>
      <div>
        <button class="btn btn-accent btn--add-cart flex nowrap items-center" @click="addToCart(product)">
          <span class="material-symbols-outlined">shopping_cart</span>
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product--wrapper{
  border: 1px solid var(--NN300,#BFC9D9);
  border-radius: 12px;
}
.product-img--wrapper{
  margin-bottom: 10px;
  img{
    border-radius: 12px 12px 0 0;
  }
}
.product-content--wrapper{
  padding: 0 24px 24px;
}
.text--stock{
  margin-top: 4px;
  margin-bottom: 10px;
}
.title--product{
  margin-bottom: 10px;
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