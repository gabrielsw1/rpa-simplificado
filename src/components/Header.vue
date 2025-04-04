<template>
  <header class="bg-primary shadow-lg fixed w-full top-0 left-0 right-0 z-50">
    <nav class="px-4 py-4">
      <div class="container mx-auto">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img src="../assets/logo.png" alt="RPA Simplificado" class="h-12" />
            <span class="ml-2 text-2xl font-bold text-white">RPA Simplificado</span>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-white hover:text-primary-hover transition-colors font-medium"
            >
              {{ item.name }}
            </a>
          </div>

          <button
            class="bg-white text-primary hover:bg-primary-hover hover:text-white transition-colors px-6 py-2 rounded-lg font-medium hidden md:block"
          >
            Fale Conosco
          </button>

          <!-- Mobile menu button -->
          <button @click="isOpen = !isOpen" class="md:hidden text-white">
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
        </div>

        <!-- Mobile Navigation -->
        <div v-if="isOpen" class="md:hidden mt-4">
          <div class="flex flex-col space-y-4">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-white hover:text-primary-hover transition-colors font-medium"
            >
              {{ item.name }}
            </a>
            <button
              class="bg-white text-primary hover:bg-primary-hover hover:text-white transition-colors px-6 py-2 rounded-lg font-medium w-full"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
  import { ref } from 'vue'

  const isOpen = ref(false)

  const navigation = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Vantagens', href: '#vantagens' },
    { name: 'Casos de Sucesso', href: '#casos' },
    { name: 'Contato', href: '#contato' }
  ]
</script>
