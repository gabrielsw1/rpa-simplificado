<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <img src="../assets/logo.png" alt="RPA Simplificado" class="h-8 w-auto" />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            to="/"
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Início
          </router-link>
          <router-link
            to="/curriculo"
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Currículo
          </router-link>
          <a
            href="/#videos"
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Vídeos
          </a>
          <a
            href="/#contato"
            class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Fale Conosco
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary focus:outline-none"
          >
            <span class="sr-only">Abrir menu principal</span>
            <svg
              class="h-6 w-6"
              :class="{ hidden: isOpen, block: !isOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{ hidden: !isOpen, block: isOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="md:hidden" :class="{ block: isOpen, hidden: !isOpen }">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
        <router-link
          to="/"
          class="text-secondary hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
        >
          Início
        </router-link>
        <router-link
          to="/curriculo"
          class="text-secondary hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
        >
          Currículo
        </router-link>
        <a
          href="/#videos"
          class="text-secondary hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
        >
          Vídeos
        </a>
        <a
          href="/#contato"
          class="bg-orange-500 hover:bg-orange-600 text-white block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Fale Conosco
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'

  const isOpen = ref(false)
</script>
