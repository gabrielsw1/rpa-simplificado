<template>
  <section id="sobre" class="py-16 bg-light">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Coluna da Esquerda - Foto e Badges -->
          <div class="lg:w-1/3">
            <div class="sticky top-24">
              <img
                src="../assets/perfil.jpg"
                alt="Gabriel - Especialista em RPA"
                class="w-full max-w-sm rounded-full shadow-xl mb-6 aspect-square object-cover border-4 border-white"
              />
              <div class="flex justify-center gap-4 mt-6">
                <img
                  src="../assets/badge 1.png"
                  alt="Certificação UiPath 1"
                  class="w-28 h-28 transition-transform hover:scale-110"
                  title="Certificação UiPath Advanced RPA Developer"
                />
                <img
                  src="../assets/badge 2.png"
                  alt="Certificação UiPath 2"
                  class="w-28 h-28 transition-transform hover:scale-110"
                  title="Certificação UiPath Solution Architect"
                />
              </div>
            </div>
          </div>

          <!-- Coluna da Direita - Texto -->
          <div class="lg:w-2/3">
            <h2 class="text-4xl font-bold text-secondary mb-8">Sobre Mim</h2>
            <div class="space-y-6 text-lg">
              <p class="leading-relaxed">
                Olá! Me chamo Gabriel e sou
                <span class="font-bold text-primary">especialista em automação de processos</span>
                com
                <span class="font-bold text-primary">mais de 10 anos de experiência</span>
                em Análise de Sistemas. Ao longo da minha trajetória, ajudei empresas de diversos
                setores a ganharem tempo, eficiência e escalabilidade através da
                <span class="font-bold text-primary">automação inteligente com UiPath</span>
                .
              </p>

              <p class="leading-relaxed">
                Criei a
                <span class="font-bold text-primary">RPA Simplificado</span>
                com o objetivo de tornar a automação acessível, prática e estratégica para negócios
                que desejam crescer com tecnologia. Aqui, minha missão é entender os processos da
                sua empresa, propor soluções reais e entregar resultados concretos, sempre com
                transparência e comprometimento.
              </p>

              <p class="leading-relaxed">
                Sou apaixonado por inovação, otimização de tempo e por mostrar como o
                <span class="font-bold text-primary">
                  RPA pode transformar o dia a dia de uma empresa
                </span>
                — eliminando tarefas repetitivas e liberando tempo para o que realmente importa.
              </p>

              <p class="leading-relaxed">
                Se você busca consultoria especializada, soluções eficientes e acompanhamento de
                verdade, está no lugar certo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
