<script setup>
defineProps({
  id: String,
  type: String,
  modelValue: String,
  variant: String,
  placeholder: String,
  color: String
})
defineEmits(['update:modelValue'])
</script>
<template>
  <div :class="`input--wrapper ${variant===undefined?'':'input-'+variant} bg-${color}`">
    <div class="prepend-outer--wrapper"><slot name="prepend-outer"></slot></div>
    <div class="input--control">
      <div class="prepend-inner--wrapper"><slot name="prepend-inner"></slot></div>
      <input
        :id="id"
        :value="modelValue"
        :type="type"
        :variant="variant"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div class="append-inner--wrapper"><slot name="append-inner"></slot></div>
    </div>
    <div class="append-outer--wrapper"><slot name="append-outer"></slot></div>
  </div>
</template>