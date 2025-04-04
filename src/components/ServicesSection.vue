<template>
  <section id="servicos" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="section-title text-center">Nossos Serviços</h2>
      <p class="section-subtitle text-center">
        Soluções completas em automação de processos para sua empresa
      </p>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.title" 
             class="bg-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
            <component :is="service.icon" class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl font-bold text-secondary mb-4">{{ service.title }}</h3>
          <p class="text-gray-600 mb-4">{{ service.description }}</p>
          <ul class="space-y-2">
            <li v-for="feature in service.features" :key="feature" 
                class="flex items-center text-gray-600">
              <svg class="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChartBarIcon, CodeBracketIcon, AcademicCapIcon } from '@heroicons/vue/24/outline'

const services = [
  {
    title: 'Mapeamento de Processos',
    description: 'Análise detalhada e otimização dos seus processos para identificar oportunidades de automação.',
    icon: ChartBarIcon,
    features: [
      'Análise de processos existentes',
      'Identificação de gargalos',
      'Proposta de otimização',
      'Documentação completa'
    ]
  },
  {
    title: 'Desenvolvimento RPA',
    description: 'Criação de robôs personalizados com UiPath para automatizar suas tarefas repetitivas.',
    icon: CodeBracketIcon,
    features: [
      'Desenvolvimento de robôs',
      'Integração com sistemas',
      'Testes e validação',
      'Manutenção contínua'
    ]
  },
  {
    title: 'Treinamentos',
    description: 'Capacitação da sua equipe em RPA e UiPath para manter a automação sustentável.',
    icon: AcademicCapIcon,
    features: [
      'Treinamentos personalizados',
      'Certificação UiPath',
      'Suporte técnico',
      'Materiais didáticos'
    ]
  }
]
</script> 