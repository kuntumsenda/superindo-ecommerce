<script setup>
import Header from './components/headers/Header.vue'
import Footer from './components/footers/Footer.vue'
</script>
<template>
  <Header />
  <main class="main--container">
    <router-view />
  </main>
  <Footer />
</template>