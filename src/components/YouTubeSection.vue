<template>
  <section id="youtube" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-secondary mb-4">Conteúdo no YouTube</h2>
          <p class="text-lg text-gray-600">
            Confira meus últimos vídeos sobre RPA e automação de processos
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="video in videos" :key="video.id" class="group">
            <a
              :href="'https://www.youtube.com/watch?v=' + video.id"
              target="_blank"
              rel="noopener noreferrer"
              class="block relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                :src="'https://img.youtube.com/vi/' + video.id + '/maxresdefault.jpg'"
                :alt="video.title"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <div
                  class="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
            <div class="mt-4">
              <h3
                class="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-primary transition-colors"
              >
                {{ video.title }}
              </h3>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a
            href="https://www.youtube.com/@RPA_Simplificado"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              />
            </svg>
            Inscreva-se no Canal
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  const videos = ref([
    {
      id: '5oh5SgTRFqE',
      title: 'Como AUTOMATIZAR postagens no LINKEDIN com CHATGPT + UiPath! (Passo a Passo)'
    },
    {
      id: 'jhKMUOuWLAo',
      title: 'UiPath - Movimentar, Renomear e Deletar Arquivos | Passo a Passo'
    },
    {
      id: '3rsUGsLgxjY',
      title: 'UiPath: Tudo sobre Variáveis, Constantes e Argumentos!'
    }
  ])
</script>
