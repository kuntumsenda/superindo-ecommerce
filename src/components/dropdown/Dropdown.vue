<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="`dropdown ${show?'open--dropdown':''}`">
    <slot name="content-dropdown"></slot>
  </div>
</template>

<style lang="scss" scoped>
.dropdown{
  visibility: hidden;
  position: absolute;
  right: 0;
  background: white;
  opacity: 0;
  transition: all 0.3s ease; 
  z-index: 5;
  min-width: 200px;
  padding: 16px;
}
.open--dropdown {
  visibility: visible;
  opacity: 1;
  display: block;
  min-width: 200px;
  text-align: left;
  box-shadow: 0px 3px 5px -1px #ccc;
}
</style>