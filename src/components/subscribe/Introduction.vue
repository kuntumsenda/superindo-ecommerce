<script setup>
import kInput from '../input/Input.vue'
import { ref } from 'vue'
const emailSubscibe = ref('')
</script>
<template>
  <section>
    <div class="subs-text--wrapper">
      <h2>Stay home & get your daily needs from our shop</h2>
      <p class="text-subtitle-2 text-secondary">Start Your Daily Shopping with <span class="text-primary">Super Indo</span></p>
      <kInput v-model="emailSubscibe" type="text" color="white" class="input--email--subs" placeholder="Your email address">
        <template #prepend-inner>
          <span class="material-symbols-outlined">send</span>
        </template>
        <template #append-outer>
          <button class="bg-primary text-white btn--subs">Subscribe</button>
        </template>
      </kInput>
    </div>
  </section>  
</template>
<style lang="scss" scoped>
section{
  background-image: url('@/assets/background/bg-subs.jpg');
  background-repeat: no-repeat;
  border-radius: 20px;
  background-position-x: -160px;
}
.subs-text--wrapper{
  padding: 90px 60px;
  max-width: 650px;
  h2{
    margin-bottom: 20px;
    line-height: 1.5;
  }
  p{
    margin-bottom: 40px;
  }
}
.btn--subs{
  padding: 20px 40px;
  border-radius: 40px;
}
</style>
