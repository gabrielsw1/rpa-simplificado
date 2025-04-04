<template>
  <section id="casos" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="section-title text-center">Casos de Sucesso</h2>
      <p class="section-subtitle text-center">
        Conheça algumas histórias de transformação digital com nossas soluções
      </p>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div v-for="story in successStories" :key="story.company" 
             class="bg-light p-8 rounded-lg">
          <div class="flex items-start mb-6">
            <img :src="story.logo" :alt="story.company" class="w-16 h-16 object-contain" />
            <div class="ml-4">
              <h3 class="text-xl font-bold text-secondary">{{ story.company }}</h3>
              <p class="text-gray-600">{{ story.industry }}</p>
            </div>
          </div>
          
          <div class="space-y-4">
            <p class="text-gray-700">{{ story.description }}</p>
            <div class="border-t pt-4">
              <h4 class="font-semibold text-secondary mb-2">Resultados:</h4>
              <ul class="space-y-2">
                <li v-for="result in story.results" :key="result" 
                    class="flex items-center text-gray-600">
                  <svg class="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ result }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const successStories = [
  {
    company: 'Empresa ABC',
    industry: 'Setor Financeiro',
    logo: '/img/cases/company1.png',
    description: 'Automatizamos o processo de conciliação bancária, reduzindo o tempo de processamento e eliminando erros manuais.',
    results: [
      'Redução de 85% no tempo de processamento',
      'Economia de 120 horas/mês',
      'ROI positivo em 3 meses'
    ]
  },
  {
    company: 'Grupo XYZ',
    industry: 'Varejo',
    logo: '/img/cases/company2.png',
    description: 'Implementamos automação no processo de faturamento e notas fiscais, integrando diferentes sistemas.',
    results: [
      'Processamento de 1000+ notas/dia',
      'Redução de 95% em erros',
      'Economia de R$ 50mil/mês'
    ]
  },
  {
    company: 'Indústria 123',
    industry: 'Manufatura',
    logo: '/img/cases/company3.png',
    description: 'Automatizamos o processo de compras e aprovações, desde a requisição até o pagamento.',
    results: [
      'Ciclo de aprovação reduzido em 70%',
      'Transparência no processo',
      'Economia de 200 horas/mês'
    ]
  }
]
</script> 