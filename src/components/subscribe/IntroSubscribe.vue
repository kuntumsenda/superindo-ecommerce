<script setup>
import kInput from '../input/Input.vue'
import { ref } from 'vue'
import { useNotification } from "@kyvg/vue3-notification";

const notification = useNotification()
const emailSubscibe = ref('')
function subscribeOnClick () {
  notification.notify({
    title: `News Letter telah dikirim ke emailmu`,
    type: 'success'
  });
}
</script>
<template>
  <section>
    <div class="subs-text--wrapper">
      <h1>Stay home & get your daily needs from our shop</h1>
      <p class="text-subtitle-2 text-secondary">Start Your Daily Shopping with <span class="text-primary">Super Indo</span></p>
      <kInput v-model="emailSubscibe" type="text" color="white" variant="plain" class="input--email--subs" placeholder="example@mail.com">
        <template #prepend-inner>
          <span class="material-symbols-outlined">send</span>
        </template>
        <template #append-outer>
          <button class="btn-primary text-white btn--subs" @click="subscribeOnClick">Subscribe</button>
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
