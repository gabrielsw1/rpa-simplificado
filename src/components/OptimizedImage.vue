<template>
  <img
    :src="src"
    :alt="alt"
    :class="['transition-opacity duration-300', isLoaded ? 'opacity-100' : 'opacity-0', className]"
    @load="handleLoad"
    loading="lazy"
    :width="width"
    :height="height"
  />
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number],
      default: null
    },
    height: {
      type: [String, Number],
      default: null
    },
    className: {
      type: String,
      default: ''
    }
  })

  const isLoaded = ref(false)

  const handleLoad = () => {
    isLoaded.value = true
  }
</script>
