<template>
  <nav class="bg-white shadow-lg fixed w-full top-0 left-0 right-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Mobile menu button -->
        <button @click="isOpen = !isOpen" class="md:hidden text-secondary">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Logo -->
        <div class="flex items-center">
          <img src="../assets/logo.png" alt="RPA Simplificado" class="h-12" />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-secondary hover:text-primary transition-colors font-medium"
          >
            {{ item.name }}
          </a>
        </div>

        <a
          href="#contato"
          class="bg-primary text-white hover:bg-primary/90 transition-colors px-6 py-2 rounded-lg font-medium hidden md:block"
        >
          Fale Conosco
        </a>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isOpen" class="md:hidden mt-4">
        <div class="flex flex-col space-y-4">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-secondary hover:text-primary transition-colors font-medium"
          >
            {{ item.name }}
          </a>
          <a
            href="#contato"
            class="bg-primary text-white hover:bg-primary/90 transition-colors px-6 py-2 rounded-lg font-medium w-full text-center"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'

  const isOpen = ref(false)

  const navigation = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'YouTube', href: '#youtube' },
    { name: 'Contato', href: '#contato' }
  ]
</script>
