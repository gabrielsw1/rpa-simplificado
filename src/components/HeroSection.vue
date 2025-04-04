<template>
  <section class="relative">
    <!-- Imagem de fundo -->
    <div class="w-full">
      <img src="@/assets/herosection.png" alt="Automação de Processos" class="w-full" />
    </div>

    <!-- Conteúdo abaixo da imagem -->
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Botões de ação -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Fale Conosco
          </a>
          <a
            href="#expertise"
            class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-secondary hover:bg-secondary/90 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Conheça Nossas Soluções
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  // Component logic can be added here
</script>

<style scoped>
  /* Adiciona uma animação sutil ao fundo */
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
</style>
