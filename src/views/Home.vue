<script setup>
import subsIntro from '@/components/subscribe/IntroSubscribe.vue'
import previewProduct from '@/components/product/PreviewProduct.vue'
import dropdown from '@/components/dropdown/Dropdown.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useNotification } from "@kyvg/vue3-notification";

const store = useStore()
const notification = useNotification()
const productList = computed(() => store.getters['product/getProducts'])
let sortBy = ref([
  {
    value: 'name',
    text: 'Nama Product',
    sort: [
      { value: 'asc', text: 'Dari A ke Z' },
      { value: 'desc', text: 'Dari Z ke A' }
    ]
  },
  {
    value: 'price',
    text: 'Harga',
    sort: [
      { value: 'asc', text: 'Dari harga terendah' },
      { value: 'desc', text: 'Dari harga tertinggi' }
    ]
  }
])
let sortBySelected = ref(sortBy.value[0])
let filter = ref({
  show: false,
  sortBy: 'name',
  sort: sortBySelected.value.sort[0].value
})
function openDropdown() {
  filter.value.show = !filter.value.show
}
function sortByOnChange() {
  filter.value.sortBy = sortBySelected.value.value
  filter.value.sort = sortBySelected.value.sort[0].value
}
const disableApplyFilter = computed(() => {
  if(!filter.value.sortBy || !filter.value.sort) return true
  else return false
})
function applyFilter() {
  if(filter.value.sortBy == 'name') store.commit('product/SORT_NAME', filter.value.sort)
  else store.commit('product/SORT_PRICE', filter.value.sort)
  filter.value.show=false
}
onMounted(() => {
  applyFilter()
})
</script>
<template>
  <div>
    <div class="container">
      <section class="section--products-popular">
        <div class="title--product-popular flex wrap justify-between items-center">
          <h2>Produk Populer</h2>
          <div class="flex nowrap items-center">
            <div class="filter--product-popular">
              <button class="btn btn-outline info flex items-center" @click="openDropdown">
                <span class="filter--label">Urutkan {{ filter.sortBy == 'name'? `Nama dari ${filter.sort == 'asc'? 'A ke Z':'Z ke A'}`:`Harga dari ${filter.sort == 'asc'? 'Terendah':'Tertinggi'}` }}</span>
                <span class="material-symbols-outlined">filter_list</span>
              </button>
              <dropdown :show="filter.show">
                <template #content-dropdown>
                  <div class="content--dropdown">
                    <div class="list--filter">
                      <p class="text-body-2 text-weight-bold">Urutkan berdasarkan</p>
                      <div>
                        <select v-model="sortBySelected" @change="sortByOnChange">
                          <option v-for="item in sortBy" :key="item.value" :value="item" >{{ item.text }}</option>
                        </select>
                      </div>
                    </div>
                    <div v-if="filter.sortBy" class="list--filter">
                      <p class="text-body-2 text-weight-bold">Urutkan berdasarkan {{ sortBySelected.text }}</p>
                      <div>
                        <select v-model="filter.sort">
                          <option v-for="item in sortBySelected.sort" :key="item.value" :value="item.value" >{{ item.text }}</option>
                        </select>
                      </div>
                    </div>
                    <button :class="`btn btn-primary btn--apply-filter ${disableApplyFilter ? 'btn--disable':''}`" @click="applyFilter">Apply</button>
                  </div>
                </template>
              </dropdown>
            </div>
            <a class="text-primary" @click="notification.notify(store.state.notification.noFitur)">Lihat Semua</a>
          </div>
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
@import '@/assets/css/module/variable';
.section--products-popular{
  margin-bottom: 40px;
}
.title--product-popular{
  margin-bottom: 16px;
  justify-content: center;
  a:hover{ text-decoration: underline; display: none; }
}
@media screen and (min-width: $md-screen) {
  .title--product-popular{
    justify-content: space-between;
    margin-bottom: 24px;
    a{ display: block; }
  }
}
.filter--label{
  display: none;
}
.filter--product-popular{
  margin: 0 16px;
  .material-symbols-outlined{
    font-size: 24px;
    margin-left: 0;
  }
}
@media screen and (min-width: $md-screen) {
  .filter--label{
    display: block;
  }
  .filter--product-popular{
  .material-symbols-outlined{
    font-size: 28px;
    margin-left: 12px;
  }
}
}
.filter--product-popular{
  position: relative;
}
.content--dropdown{
  select{
    width: 100%;
  }
  p{ 
    margin-bottom: 4px;
  }
}
.list--filter{
  padding: 8px 0;
}
.btn--apply-filter{
  width: 100%;
  margin-top: 16px;
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
    width: 50.0%;
  }
}
@media screen and (min-width: $md-screen) {
  .product--grid{
  margin: 0 -8px;
  row-gap: 12px;
    .item--grid{
      padding-left: 8px;
      padding-right: 8px;
      width: 25.0%;
    }
  }
}
@media screen and (min-width: $lg-screen) {
  .product--grid{
  margin: 0 -15px;
  row-gap: 24px;
    .item--grid{
      padding-left: 15px;
      padding-right: 15px;
      width: 20.0%;
    }
  }
}

</style>
