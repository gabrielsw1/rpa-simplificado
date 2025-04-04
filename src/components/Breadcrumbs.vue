<template>
  <nav class="bg-gray-50" aria-label="Breadcrumb">
    <ol class="max-w-screen-xl mx-auto px-4 py-3 flex space-x-2 text-sm">
      <li class="flex items-center">
        <router-link to="/" class="text-gray-500 hover:text-primary">Home</router-link>
      </li>
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <svg class="flex-shrink-0 h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <router-link
          v-if="index < items.length - 1"
          :to="item.to"
          class="ml-2 text-gray-500 hover:text-primary"
        >
          {{ item.text }}
        </router-link>
        <span v-else class="ml-2 text-gray-700">
          {{ item.text }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const items = computed(() => {
    const path = route.path
    const parts = path.split('/').filter(Boolean)

    return parts.map((part, index) => {
      const path = '/' + parts.slice(0, index + 1).join('/')
      return {
        text: formatText(part),
        to: path
      }
    })
  })

  function formatText(text) {
    return text
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
</script>
