<script>
import { ref } from 'vue'
export default {
  setup() {
    const footer = ref([
      {
        title: 'super indo',
        list: [
          {
            text: 'sejarah',
            link: 'https://www.superindo.co.id/korporasi-keberlanjutan/',
          },
          {
            text: 'berita korporasi',
            link: 'https://www.superindo.co.id/korporasi-keberlanjutan/corporate/news',
          },
          {
            text: 'private brand',
            link: 'https://www.superindo.co.id/private-brand/#indoculinaire',
          },
          {
            text: 'super indo berkebun',
            link: 'https://www.superindo.co.id/korporasi-keberlanjutan/superindoberkebun',
          },
        ]
      },
      {
        title: 'promosi',
        list: [
          {
            text: 'Katalog Super Hemat',
            link: 'https://www.superindo.co.id/promosi/katalog-super-hemat',
          },
          {
            text: 'Promo Partner',
            link: 'https://www.superindo.co.id/promosi/promo-partner',
          },
          {
            text: 'Promo Koran',
            link: 'https://www.superindo.co.id/promosi/promo-koran',
          },
          {
            text: 'Event Mendatang',
            link: 'https://www.superindo.co.id/super-event/event-mendatang',
          },
          {
            text: 'Fashion Reusable Bag',
            link: 'https://www.superindo.co.id/private-brand/fashion-reusable-bag',
          },
        ]
      },
      {
        title: 'artikel',
        list: [
          {
            text: 'info sehat',
            link: 'https://www.superindo.co.id/artikel/info-sehat',
          },
          {
            text: 'info resep',
            link: 'https://www.superindo.co.id/artikel/info-resep',
          },
          {
            text: 'pengetahuan produk',
            link: 'https://www.superindo.co.id/artikel/pengetahuan-produk',
          },
          {
            text: 'tips & trik',
            link: 'https://www.superindo.co.id/artikel/tips-dan-trik',
          },
        ]
      },
      {
        title: 'hubungi kami',
        list: [
          {
            text: 'customer service',
            link: 'https://www.superindo.co.id/hubungi-kami/customer-service',
          },
          {
            text: 'lokasi super indo',
            link: 'https://www.superindo.co.id/hubungi-kami/lokasi-superindo',
          },
          {
            text: 'karir',
            link: 'https://karir.superindo.co.id/',
          },
          {
            text: 'kerjasama',
            link: 'https://eregistration.superindo.co.id/',
          },
        ]
      }
    ])
    const sosmed = ref([
      {
        text: 'facebook',
        icon: 'facebook-f.svg',
        link: 'https://facebook.com/superindosupermarket'
      },
      {
        text: 'twitter',
        icon: 'fa-brands fa-twitter',
        link: 'https://twitter.com/InfoSuperIndo'
      },
      {
        text: 'instagram',
        icon: 'fa-brands fa-intagram',
        link: 'https://instagram.com/InfoSuperIndo'
      },
      {
        text: 'youtube',
        icon: 'fa-brands fa-youtube',
        link: 'https://youtube.com/superindosupermarket'
      },
      {
        text: 'pinterest',
        icon: 'fa-brands fa-pinterest-p',
        link: 'https://pinterest.com/InfoSuperIndo'
      },
    ])
    return {
      footer,
      sosmed
    }
  },
}
</script>
<template>
  <footer class="footer--container">
    <div class="container flex wrap justify-between">
      <section v-for="item in footer" :key="item.title">
        <h3 class="text-capitalize">{{item.title}}</h3>
        <ul>
          <li v-for="child in item.list" :key="child.text" class="text-capitalize"><a :href="child.link" target="_blank">{{child.text}}</a></li>
        </ul>
      </section>
    </div>
    <div class="container flex wrap items-center justify-between">
      <div class="text-body-2">
        <span>&copy;</span> <span>2023 kuntumse. All Rigths Reserved</span>
      </div>
      <div class="flex nowrap items-center sosmed--wrapper">
        <h4>Follow Us</h4>
        <a v-for="item in sosmed" :href="item.link" target="_blank" :key="item.text" class="sosmed-icon--container tooltip--wrapper flex items-center justify-center">
          <img v-if="item.text=='facebook'" src="@/assets/icon/facebook-f.svg" :alt="item.text" style="width: 6px">
          <img v-if="item.text=='twitter'" src="@/assets/icon/twitter.svg" :alt="item.text" style="width: 12px;">
          <img v-if="item.text=='instagram'" src="@/assets/icon/instagram.svg" :alt="item.text" style="width: 12px;">
          <img v-if="item.text=='youtube'" src="@/assets/icon/youtube.svg" :alt="item.text" style="width: 14px;">
          <img v-if="item.text=='pinterest'" src="@/assets/icon/pinterest-p.svg" :alt="item.text" style="width: 9px">
          <span class="tooltip text-capitalize">{{ item.text }}</span>
        </a>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import './../../assets/css/module/variable';

h3{
  margin-bottom: 16px;
}
li{
  list-style: none;
  margin-bottom: 12px;
  a:hover{
    text-decoration: underline;
    color: $primary;
  }
}
.container{
  padding: 20px;
  padding-bottom: 20px;
}
.sosmed--wrapper{
  gap: 8px;
  h4{ margin-right: 4px; }
}
.sosmed-icon--container{
  background-color: $primary;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: all .3s;
  position: relative;
  &:hover{
    background-color: $black;
  }
}

</style>