<script setup>
defineProps({
  id: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  modelValue: String,
  variant: {
    type: String,
    default: 'standart'
  },
  placeholder: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  disable: {
    type: Boolean,
    default: false
  }
})
defineEmits(['blur', 'keyup.enter', 'update:modelValue'])
</script>
<template>
  <div :class="`input--wrapper ${variant===undefined?'input-standart':'input-'+variant} ${color? `bg-${color}`: ''} ${disable? 'input--disable':''}`">
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
        @blur="$emit('blur', $event.target.value)"
        @keyup.enter="$emit('keyup.enter')"        
      />
      <div class="append-inner--wrapper"><slot name="append-inner"></slot></div>
    </div>
    <div class="append-outer--wrapper"><slot name="append-outer"></slot></div>
  </div>
</template>