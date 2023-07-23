<script setup>
import subsIntro from '@/components/subscribe/IntroSubscribe.vue'
import previewProduct from '@/components/product/PreviewProduct.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const productList = computed(() => store.getters['product/getProducts'])
</script>
<template>
  <div>
    <div class="container">
      <section class="section--products-popular">
        <div class="title--product-popular flex nowrap justify-between items-center">
          <h2>Produk Populer</h2>
          <a class="text-primary">Lihat Semua</a>
        </div>
        <div class="product--grid">
          <div class="item--grid" v-for="product in productList " :key="product.id">
            <previewProduct :product="product"/>
          </div>
        </div>
      </section>
    </div>
    <div class="container">
      <subsIntro/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section--products-popular{
  margin-bottom: 40px;
  h2{ 
    margin-bottom: 24px; 
  }
}
.title--product-popular{
  a:hover{ text-decoration: underline; }
}
.product--grid{
  margin: 0 -15px;
  min-height: 1px;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
  row-gap: 24px;
  .item--grid{
    padding-left: 15px;
    padding-right: 15px;
    min-height: 1px;
    width: 20.0%;
  }
}
</style>
