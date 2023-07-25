<script setup>
import kInput from '../input/Input.vue'
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useNotification } from "@kyvg/vue3-notification";

const store = useStore()
const notification = useNotification()

const props = defineProps(['cartItem'])

let quantity = ref(props.cartItem.qty)
let msgInputQty = ref('')

const disablePlusBtn = computed(() => {
  return !props.cartItem.stockAfterCart ? true : false
})
const disableMinusBtn = computed(() => {
  return quantity.value<=1 ? true : false
})
function inputQtyOnChange() {
  console.log(quantity.value)
  if(!quantity.value){
    msgInputQty = 'Jumlah harus diisi'
    return
  }
  msgInputQty = ''
  setTimeout(() => {
    updateCart()
  }, 300);
}
function updateCart() {
  let numQuantity = quantity.value ? parseInt(quantity.value):0
  let payload = {
    type: 'input',
    newQty: 0,
    data: props.cartItem
  }
  msgInputQty = ''
  if(numQuantity<=0){
    payload.newQty = 1
    store.dispatch('cart/updateCart', payload)
    quantity.value = 1
  }
  else if(numQuantity>props.cartItem.stock){
    msgInputQty = `Maks. Beli ${props.cartItem.stock}`
    payload.newQty = props.cartItem.stock
    store.dispatch('cart/updateCart', payload)
    quantity.value = props.cartItem.stock 
  }else{
    payload.newQty = numQuantity
    store.dispatch('cart/updateCart', payload)
  }
}
function btnQtyOnClick(type) {
  let payload = {
    type: type,
    data: props.cartItem
  }
  if(type == 'increment' && !disablePlusBtn.value){
    quantity.value = parseInt(quantity.value)+1
    store.dispatch('cart/updateCart', payload)
    return
  }
  if(type == 'decrement' && !disableMinusBtn.value){
    quantity.value = parseInt(quantity.value)-1
    store.dispatch('cart/updateCart', payload)
    return
  }
}
</script>

<template>
  <div class="cart--card">
    <div class="flex justify-end btn--remove-item">
      <button class="btn btn-flat text-negative" @click="$store.dispatch('cart/removeFromCart', cartItem)">
        Hapus Item
      </button>
    </div>
    <div class="flex nowrap item--wrapper">
      <div class="img-product--wrapper">
        <img :src="cartItem.photo" :alt="cartItem.productName">
      </div>
      <div>
        <div>
          <p class="text-capitalize text-subtitle-2">{{ cartItem.productName }}</p>
        </div>
        <div class="text-capitalize text-secondary text-body-2 category--wrapper">
          <span v-for="(item, index) in cartItem.category" :key="index"><span v-if="index!=0">, </span>{{ item }}</span>
        </div>
        <div class="flex nowrap items-center text-body-2 price--wrapper">
          <div v-if="cartItem.discountPercent" class="discount--badge bg-primary-light-1 text-primary">{{ cartItem.discountPercent }}%</div>
          <s v-if="cartItem.priceDiscount" class="text-secondary price--discount">Rp. {{ cartItem.price }} <span class="mark-price"></span></s>
          <span class="text-weight-black text-body-1">Rp. {{ cartItem.priceDiscount }}</span>
        </div>
      </div>
    </div>
    <div class="flex nowrap justify-between items-end qty-note--wrapper">
      <div class="sub-total--price text-weight-black">
        <span>Total: </span><span>Rp. {{ cartItem.totalPriceDiscount?cartItem.totalPriceDiscount:cartItem.totalPrice }}</span>
      </div>
      <div>
        <kInput v-model="quantity" class="input--center input--qty" type="number" placeholder="0" @blur="updateCart" @input="inputQtyOnChange">
          <template #prepend-outer>
            <a :class="`${disableMinusBtn?'link--disable':''}`" @click="btnQtyOnClick('decrement')"><span class="material-symbols-outlined">do_not_disturb_on</span></a>
          </template>
          <template #append-outer>
            <a :class="`${disablePlusBtn?'link--disable':''}`" @click="btnQtyOnClick('increment')"><span class="material-symbols-outlined">add_circle</span></a>
          </template>
        </kInput>
        <div class="text-center"><span class="text-caption text-negative">{{ msgInputQty }}</span></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart--card{
  max-width: 900px;
  width: 100%
}
  .item--wrapper{
    gap: 12px;
  }
  .img-product--wrapper{
    align-self: stretch;
    img{
      width: 150px;
    }
  }
  .price--discount{ margin-right: 12px;}
  .category--wrapper{
    margin-top: 4px;
    margin-bottom: 21px;
  }
  .qty-note--wrapper{
    margin-top: 8px;
  }
  .btn--remove-item{
    margin-bottom: 8px;
  }
  .input--qty{
    max-width: 160px;
  }
  .sub-total--price{
    font-size: 18px;
    margin-right: 8px;
    span{
      margin-right: 8px;
    }
  }
</style>