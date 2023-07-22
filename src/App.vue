<script setup>
import Header from './components/headers/Header.vue'
import Footer from './components/footers/Footer.vue'
// export default {
//   setup() {
    
//     },
// }
</script>
<template>
  <Header />
  <main class="container">
    <router-view />
    <Footer />
  </main>
</template>