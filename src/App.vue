<script setup>
import Header from './components/headers/Header.vue'
import Footer from './components/footers/Footer.vue'
</script>
<template>
  <Header />
  <main class="main--container">
    <router-view />
    <notifications position="bottom right" />
  </main>
  <Footer />
</template>