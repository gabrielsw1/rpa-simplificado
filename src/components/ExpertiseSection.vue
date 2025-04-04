<template>
  <section id="expertise" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-secondary mb-4">Por que Automatizar?</h2>
          <p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra como a automação de processos pode transformar sua empresa, aumentar a
            eficiência e reduzir custos operacionais
          </p>
        </div>

        <!-- Benefícios em Números -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          <div class="text-center p-4 md:p-6 bg-light rounded-xl">
            <div class="text-3xl md:text-4xl font-bold text-primary mb-2">85%</div>
            <div class="text-sm md:text-base text-gray-600">Redução média de tempo</div>
          </div>
          <div class="text-center p-4 md:p-6 bg-light rounded-xl">
            <div class="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div class="text-sm md:text-base text-gray-600">Precisão nas tarefas</div>
          </div>
          <div class="text-center p-4 md:p-6 bg-light rounded-xl">
            <div class="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div class="text-sm md:text-base text-gray-600">Disponibilidade</div>
          </div>
          <div class="text-center p-4 md:p-6 bg-light rounded-xl">
            <div class="text-3xl md:text-4xl font-bold text-primary mb-2">3-6x</div>
            <div class="text-sm md:text-base text-gray-600">Retorno sobre investimento</div>
          </div>
        </div>

        <!-- Áreas de Atuação e Tecnologias -->
        <div class="space-y-12 mb-16">
          <!-- Áreas de Atuação -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-secondary mb-6">Áreas de Atuação</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 bg-light rounded-lg">
                <div class="flex items-start gap-3">
                  <div class="text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900">Recursos Humanos</h4>
                    <p class="text-sm text-gray-600">
                      Folha de pagamento, onboarding, controle de ponto e gestão de benefícios
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 bg-light rounded-lg">
                <div class="flex items-start gap-3">
                  <div class="text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900">Financeiro</h4>
                    <p class="text-sm text-gray-600">
                      Contas a pagar/receber, conciliação bancária e faturamento
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4 bg-light rounded-lg">
                <div class="flex items-start gap-3">
                  <div class="text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900">Vendas e Marketing</h4>
                    <p class="text-sm text-gray-600">
                      Pedidos, CRM, geração de propostas e relatórios
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tecnologias -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-secondary mb-6">Tecnologias</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-light rounded-lg">
                <h4 class="font-bold text-gray-900 mb-2">UiPath Studio</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• Automação Desktop</li>
                  <li>• Web Automation</li>
                  <li>• Citrix Automation</li>
                </ul>
              </div>
              <div class="p-4 bg-light rounded-lg">
                <h4 class="font-bold text-gray-900 mb-2">Integrações</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• SAP</li>
                  <li>• Excel/Office</li>
                  <li>• APIs REST</li>
                </ul>
              </div>
              <div class="p-4 bg-light rounded-lg">
                <h4 class="font-bold text-gray-900 mb-2">IA & Machine Learning</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• ChatGPT</li>
                  <li>• OCR</li>
                  <li>• Computer Vision</li>
                </ul>
              </div>
              <div class="p-4 bg-light rounded-lg">
                <h4 class="font-bold text-gray-900 mb-2">Orquestração</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>• UiPath Orchestrator</li>
                  <li>• Agendamentos</li>
                  <li>• Monitoramento</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Benefícios da Automação -->
        <div class="bg-light rounded-2xl p-6 md:p-8">
          <h3 class="text-2xl font-bold text-secondary mb-6 text-center">Principais Benefícios</h3>

          <!-- Desktop Grid -->
          <div class="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(benefit, index) in benefits"
              :key="index"
              class="text-center p-4 bg-white rounded-lg"
            >
              <div
                class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6 text-primary"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="benefit.icon"
                  />
                </svg>
              </div>
              <h4 class="font-bold text-gray-900 mb-2">{{ benefit.title }}</h4>
              <p class="text-sm text-gray-600">
                {{ benefit.description }}
              </p>
            </div>
          </div>

          <!-- Mobile Flip Cards -->
          <div class="md:hidden">
            <p class="text-sm text-gray-500 text-center mb-4">
              Toque nos cards para ver mais detalhes
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="(benefit, index) in benefits"
                :key="index"
                class="flip-card"
                :class="{ 'is-flipped': isFlipped[index] }"
                @click="toggleFlip(index)"
              >
                <div class="flip-card-inner">
                  <!-- Frente do Card -->
                  <div
                    class="flip-card-front p-4 bg-white rounded-lg flex flex-col items-center justify-center h-full"
                  >
                    <div
                      class="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-primary/10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6 text-primary"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          :d="benefit.icon"
                        />
                      </svg>
                    </div>
                    <h4 class="font-bold text-gray-900 text-center">{{ benefit.title }}</h4>
                    <div class="mt-2 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 animate-bounce"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  <!-- Verso do Card -->
                  <div
                    class="flip-card-back p-4 bg-white rounded-lg flex flex-col items-center justify-center h-full"
                  >
                    <p class="text-sm text-gray-600 text-center mb-4">
                      {{ benefit.description }}
                    </p>
                    <div class="text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 animate-bounce"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const isFlipped = ref([false, false, false, false, false, false])

  const toggleFlip = index => {
    isFlipped.value[index] = !isFlipped.value[index]
  }

  const benefits = [
    {
      title: 'Aumento de Produtividade',
      description:
        'Processos mais rápidos e eficientes, liberando sua equipe para tarefas estratégicas',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Redução de Erros',
      description: 'Eliminação de erros humanos e maior precisão na execução das tarefas',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Escalabilidade',
      description: 'Capacidade de crescer sem aumentar custos operacionais proporcionalmente',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
    },
    {
      title: 'Análise de Dados',
      description: 'Geração automática de relatórios e insights para tomada de decisões',
      icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      title: 'Conformidade',
      description: 'Processos padronizados e auditáveis, garantindo compliance e segurança',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    },
    {
      title: 'Satisfação da Equipe',
      description: 'Colaboradores mais engajados focando em atividades estratégicas e criativas',
      icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ]
</script>

<style scoped>
  .flip-card {
    perspective: 1000px;
    height: 200px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flip-card.is-flipped .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }
</style>
