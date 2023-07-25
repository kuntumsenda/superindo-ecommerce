<script setup>
import Header from './components/headers/Header.vue'
import Footer from './components/footers/Footer.vue'
</script>
<template>
  <Header />
  <main class="main--container">
    <router-view />
    <notifications position="top right" classes="notif__component shadow" :max="3" :duration="500" />
  </main>
  <Footer />
</template>