<template>
  <div class="curriculo bg-gray-50 min-h-screen">
    <div class="container mx-auto px-3 sm:px-4 py-6 sm:py-12 max-w-4xl">
      <!-- Cabeçalho -->
      <header class="mb-6 sm:mb-12 bg-white p-4 sm:p-8 rounded-lg shadow">
        <div class="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-8">
          <div class="flex-shrink-0">
            <img
              src="@/assets/perfil.jpg"
              alt="Gabriel Moreno da Luz"
              class="w-24 sm:w-40 h-24 sm:h-40 rounded-full object-cover border-4 border-orange-500 shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="flex-1 text-left">
            <h1 class="text-2xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
              Gabriel Moreno da Luz
            </h1>
            <p class="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
              Desenvolvedor RPA Sênior | UiPath
            </p>
            <div class="flex flex-wrap gap-3 sm:gap-6 text-gray-600">
              <div class="flex items-center text-sm sm:text-base">
                <i class="fas fa-map-marker-alt text-orange-500 mr-2" />
                <span>Porto Alegre, RS – Brasil</span>
              </div>
              <a
                href="mailto:gabrielmluz@hotmail.com"
                class="flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-200 text-xl sm:text-2xl"
                title="Enviar email"
              >
                <i class="fas fa-envelope" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabrieldaluz23"
                target="_blank"
                class="flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-200 text-xl sm:text-2xl"
                title="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </a>
              <a
                href="https://www.youtube.com/@RPA_Simplificado"
                target="_blank"
                class="flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-200 text-xl sm:text-2xl"
                title="YouTube"
              >
                <i class="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <!-- Objetivo -->
      <section class="mb-6 sm:mb-12 bg-white p-4 sm:p-6 rounded-lg shadow">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 flex items-center">
          <i class="fas fa-bullseye text-orange-500 mr-2" />
          Objetivo Profissional
        </h2>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed text-left">
          Atuar como Desenvolvedor RPA Sênior, Líder de COE ou Especialista em Automação, aplicando
          minha expertise em soluções inteligentes com UiPath para transformar processos e
          impulsionar resultados.
        </p>
      </section>

      <!-- Resumo -->
      <section class="mb-6 sm:mb-12 bg-white p-4 sm:p-6 rounded-lg shadow">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 flex items-center">
          <i class="fas fa-brain text-orange-500 mr-2" />
          Resumo Profissional
        </h2>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed text-left">
          Profissional com mais de 10 anos de experiência em TI, certificado UiPath Advanced RPA
          Developer (UiARD), com forte atuação em automações complexas usando UiPath Studio,
          Orchestrator e Document Understanding. Experiência sólida com integração de APIs,
          automações financeiras, extração de dados estruturados e não estruturados, e liderança de
          iniciativas de automação. Fundador do canal RPA Simplificado no YouTube, onde compartilho
          conhecimento técnico e estratégico para desenvolvedores e iniciantes.
        </p>
      </section>

      <!-- Experiência -->
      <section class="mb-6 sm:mb-12 bg-white p-4 sm:p-6 rounded-lg shadow">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 flex items-center">
          <i class="fas fa-briefcase text-orange-500 mr-2" />
          Experiência Profissional
        </h2>
        <div class="space-y-6 sm:space-y-8 text-left">
          <!-- Experiências visíveis inicialmente -->
          <div class="border-l-4 border-orange-500 pl-4">
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900">
              StartaIdeia – Senior RPA Developer
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Fev/2025 – Atual · Porto Alegre, RS (Remoto)
            </p>
            <ul
              class="mt-3 sm:mt-4 list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2"
            >
              <li>
                Desenvolvimento e implementação de soluções RPA com UiPath para automação de
                processos empresariais
              </li>
              <li>
                Análise de requisitos e mapeamento de processos para identificar oportunidades de
                automação
              </li>
              <li>Criação e manutenção de robôs eficientes e escaláveis</li>
              <li>Integração de RPA com APIs, bancos de dados e sistemas corporativos</li>
              <li>
                Treinamento e suporte a equipes internas para adoção de soluções automatizadas
              </li>
            </ul>
          </div>

          <div class="border-l-4 border-orange-500 pl-4">
            <h3 class="text-xl font-semibold text-gray-900">
              RPA Simplificado (YouTube) – Fundador e Criador de Conteúdo
            </h3>
            <p class="text-gray-600">Jan/2025 – Atual · Remoto</p>
            <ul class="mt-4 list-disc list-inside text-gray-600 space-y-2">
              <li>
                Produção de vídeos educativos sobre UiPath, desde conceitos básicos até automações
                avançadas
              </li>
              <li>Criação de roteiros, edição e otimização de vídeos para engajamento</li>
              <li>Compartilhamento de boas práticas e tendências do mercado de automação</li>
              <li>Desenvolvimento de cursos para certificação UiPath e automação empresarial</li>
            </ul>
          </div>

          <div class="border-l-4 border-orange-500 pl-4">
            <h3 class="text-xl font-semibold text-gray-900">PUCRS – Analista de Sistemas</h3>
            <p class="text-gray-600">Out/2021 – Fev/2025 · Porto Alegre, RS</p>
            <ul class="mt-4 list-disc list-inside text-gray-600 space-y-2">
              <li>Desenvolvimento e implementação de soluções RPA com UiPath</li>
              <li>Automatização de processos financeiros (redução de 70% no tempo)</li>
              <li>Projeto com Document Understanding para NFSe</li>
              <li>Condução de levantamentos de requisitos e design de bancos de dados</li>
              <li>Aplicação de metodologias ágeis (SCRUM) em projetos de TI</li>
            </ul>
          </div>

          <!-- Experiências ocultas inicialmente -->
          <div v-show="showMoreExperiences || isPrinting" class="space-y-8">
            <div class="border-l-4 border-orange-500 pl-4">
              <h3 class="text-xl font-semibold text-gray-900">
                Brasil TecPar – Analista de Sistemas
              </h3>
              <p class="text-gray-600">Set/2021 – Out/2021 · Porto Alegre, RS</p>
              <ul class="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Documentação técnica e implementação de soluções</li>
                <li>Manipulação e análise de dados</li>
              </ul>
            </div>

            <div class="border-l-4 border-orange-500 pl-4">
              <h3 class="text-xl font-semibold text-gray-900">MV – Analista de Sistemas JR</h3>
              <p class="text-gray-600">Nov/2020 – Ago/2021 · Porto Alegre, RS</p>
              <ul class="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Desenvolvimento de aplicações em JavaScript com Vue.js</li>
                <li>Desenvolvimento de APIs com Node.js, Express e Sequelize</li>
                <li>Manutenção e criação de objetos de banco de dados</li>
              </ul>
            </div>

            <div class="border-l-4 border-orange-500 pl-4">
              <h3 class="text-xl font-semibold text-gray-900">MV – Analista de Negócio Pleno</h3>
              <p class="text-gray-600">Jan/2020 – Nov/2020 · Porto Alegre, RS</p>
              <ul class="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Análise de processos e requisitos para sistemas hospitalares</li>
                <li>Facilitação da comunicação entre profissionais de saúde e equipes de TI</li>
                <li>Otimização de soluções de TI para ambientes de saúde</li>
              </ul>
            </div>

            <div class="border-l-4 border-orange-500 pl-4">
              <h3 class="text-xl font-semibold text-gray-900">MV – Analista de Negócios Júnior</h3>
              <p class="text-gray-600">Jul/2019 – Jan/2020 · Porto Alegre, RS</p>
              <ul class="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Documentação técnica e implementação de soluções</li>
                <li>Análise de processos e requisitos</li>
              </ul>
            </div>
          </div>

          <!-- Botão para mostrar mais experiências -->
          <div class="mt-8 pt-4 border-t border-gray-100 print:hidden">
            <button
              @click="showMoreExperiences = !showMoreExperiences"
              class="flex items-center justify-center w-full text-orange-600 hover:text-orange-700 transition-colors duration-200"
            >
              <span class="text-sm font-medium mr-2">
                {{ showMoreExperiences ? 'Mostrar menos' : 'Mais experiências disponíveis' }}
              </span>
              <i
                :class="[
                  'fas',
                  showMoreExperiences ? 'fa-chevron-up' : 'fa-chevron-down',
                  'text-sm'
                ]"
              />
            </button>
          </div>
        </div>
      </section>

      <!-- Certificações UiPath -->
      <section class="mb-6 sm:mb-12 bg-white p-4 sm:p-6 rounded-lg shadow">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
          <i class="fas fa-certificate text-orange-500 mr-2" />
          Certificações UiPath
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <!-- Badge 1 -->
          <div
            class="bg-gradient-to-br from-orange-50 to-orange-100 p-4 sm:p-6 rounded-lg border border-orange-200 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex flex-col items-center text-center">
              <div class="relative mb-4">
                <div class="absolute inset-0 bg-orange-200 rounded-full blur-lg opacity-50" />
                <img
                  src="@/assets/badge 1.png"
                  alt="UiPath Certified Professional"
                  class="w-20 sm:w-24 h-20 sm:h-24 object-contain relative z-10"
                />
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Automation Developer Professional
              </h3>
              <p class="text-sm sm:text-base text-orange-600 font-medium mb-1">UiPath (UiARD)</p>
              <p class="text-xs sm:text-sm text-gray-500 mb-2">Validade: Abril/2025 - Abril/2028</p>
              <p class="text-sm text-gray-600">
                Certificação avançada que comprova expertise em desenvolvimento de automações
                complexas, incluindo Document Understanding, AI Center e integrações avançadas.
              </p>
            </div>
          </div>

          <!-- Badge 2 -->
          <div
            class="bg-gradient-to-br from-orange-50 to-orange-100 p-4 sm:p-6 rounded-lg border border-orange-200 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex flex-col items-center text-center">
              <div class="relative mb-4">
                <div class="absolute inset-0 bg-orange-200 rounded-full blur-lg opacity-50" />
                <img
                  src="@/assets/badge 2.png"
                  alt="UiPath Certified Professional"
                  class="w-20 sm:w-24 h-20 sm:h-24 object-contain relative z-10"
                />
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Automation Developer Associate
              </h3>
              <p class="text-sm sm:text-base text-orange-600 font-medium mb-1">UiPath (UiRPA)</p>
              <p class="text-xs sm:text-sm text-gray-500 mb-2">Validade: Julho/2024 - Julho/2027</p>
              <p class="text-sm text-gray-600">
                Certificação que valida conhecimentos fundamentais em desenvolvimento de automações
                com UiPath, incluindo boas práticas e padrões de desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Outras Certificações -->
      <section class="mb-12 bg-white p-6 rounded-lg shadow">
        <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <i class="fas fa-certificate text-orange-500 mr-2" />
          Outras Certificações
        </h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <i class="fas fa-certificate text-orange-500 text-xl mt-1" />
            <div class="text-left">
              <h3 class="text-base font-semibold text-gray-900">
                Primeiros Passos com Power Automate Desktop
              </h3>
              <p class="text-sm text-gray-600">iProcess – Maio/2024</p>
              <p class="text-xs text-gray-500 mt-1">
                Fundamentos de automação com Power Automate Desktop, incluindo gravação de fluxos,
                manipulação de dados e integração com aplicações.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <i class="fas fa-certificate text-orange-500 text-xl mt-1" />
            <div class="text-left">
              <h3 class="text-base font-semibold text-gray-900">RPA Fundamental & RPA Design</h3>
              <p class="text-sm text-gray-600">iProcess – Dezembro/2023</p>
              <p class="text-xs text-gray-500 mt-1">
                Conceitos fundamentais de RPA, metodologias de design de automações e boas práticas
                para desenvolvimento de bots eficientes.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <i class="fas fa-certificate text-orange-500 text-xl mt-1" />
            <div class="text-left">
              <h3 class="text-base font-semibold text-gray-900">Profissional Adaptável</h3>
              <p class="text-sm text-gray-600">PUCRS – Agosto/2022</p>
              <p class="text-xs text-gray-500 mt-1">
                Desenvolvimento de habilidades em inteligência emocional, gestão financeira pessoal
                e liderança para adaptação em ambientes dinâmicos.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <i class="fas fa-certificate text-orange-500 text-xl mt-1" />
            <div class="text-left">
              <h3 class="text-base font-semibold text-gray-900">
                Scrum Foundation Professional Certificate
              </h3>
              <p class="text-sm text-gray-600">CertiProf – Julho/2020</p>
              <p class="text-xs text-gray-500 mt-1">
                Fundamentos da metodologia ágil Scrum, incluindo papéis, eventos, artefatos e
                práticas para gestão eficiente de projetos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Habilidades -->
      <section class="mb-6 sm:mb-12 bg-white p-4 sm:p-6 rounded-lg shadow">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 flex items-center">
          <i class="fas fa-tools text-orange-500 mr-2" />
          Habilidades Técnicas
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <!-- RPA & Automação -->
          <div class="bg-gray-50 p-3 sm:p-4 rounded-lg">
            <div class="flex items-center mb-2 sm:mb-3">
              <i class="fas fa-robot text-orange-500 text-lg sm:text-xl mr-2" />
              <h3 class="text-base sm:text-lg font-semibold text-gray-900">RPA & Automação</h3>
            </div>
            <div class="flex flex-col gap-1 sm:gap-2 text-left">
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 text-sm sm:text-base">
                  UiPath (Studio, Orchestrator, StudioX)
                </span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 text-sm sm:text-base">
                  Document Understanding & AI Center
                </span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 text-sm sm:text-base">
                  Automações Financeiras e Contábeis
                </span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 text-sm sm:text-base">
                  Integração com APIs e Bancos de Dados
                </span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 text-sm sm:text-base">
                  Automações Atendidas e Não Atendidas
                </span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 text-sm sm:text-base">
                  Extração de Dados (Estruturados e Não Estruturados)
                </span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 text-sm sm:text-base">
                  Processamento de Documentos e OCR
                </span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 text-sm sm:text-base">Automações com Excel e PDF</span>
              </div>
            </div>
          </div>

          <!-- Desenvolvimento -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="flex items-center mb-3">
              <i class="fas fa-code text-orange-500 text-xl mr-2" />
              <h3 class="text-lg font-semibold text-gray-900">Desenvolvimento</h3>
            </div>
            <div class="flex flex-col gap-2 text-left">
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2" />
                <span class="text-gray-700">JavaScript, Node.js, Vue.js</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2" />
                <span class="text-gray-700">SQL (Oracle, Postgres)</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2" />
                <span class="text-gray-700">Python (Automações e Scripts)</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2" />
                <span class="text-gray-700">APIs REST e Integrações</span>
              </div>
            </div>
          </div>

          <!-- Metodologias -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="flex items-center mb-3">
              <i class="fas fa-project-diagram text-orange-500 text-xl mr-2" />
              <h3 class="text-lg font-semibold text-gray-900">Metodologias</h3>
            </div>
            <div class="flex flex-col gap-2 text-left">
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2" />
                <span class="text-gray-700">SCRUM e Metodologias Ágeis</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2" />
                <span class="text-gray-700">Desenvolvimento de Cursos e Treinamentos</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2" />
                <span class="text-gray-700">Documentação Técnica</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2" />
                <span class="text-gray-700">Gestão de Projetos</span>
              </div>
            </div>
          </div>

          <!-- Soft Skills -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="flex items-center mb-3">
              <i class="fas fa-users text-orange-500 text-xl mr-2" />
              <h3 class="text-lg font-semibold text-gray-900">Soft Skills</h3>
            </div>
            <div class="flex flex-col gap-2 text-left">
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2" />
                <span class="text-gray-700">Liderança Técnica</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2" />
                <span class="text-gray-700">Comunicação Clara e Efetiva</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2" />
                <span class="text-gray-700">Resolução de Problemas</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check text-green-500 mt-1 mr-2" />
                <span class="text-gray-700">Trabalho em Equipe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Formação -->
      <section class="bg-white p-4 sm:p-6 rounded-lg shadow">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <i class="fas fa-graduation-cap text-orange-500 mr-2" />
          Formação Acadêmica
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <!-- Bacharelado -->
          <div
            class="bg-gray-50 p-3 sm:p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <div class="flex items-center mb-2 sm:mb-3">
              <i class="fas fa-university text-orange-500 text-lg sm:text-xl mr-2" />
              <h3 class="text-base sm:text-lg font-semibold text-gray-900">
                Bacharelado em Sistemas de Informação
              </h3>
            </div>
            <div class="flex flex-col gap-1 sm:gap-2 text-left">
              <div class="flex items-start">
                <i class="fas fa-building text-gray-400 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 text-sm sm:text-base">URCAMP</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-calendar text-gray-400 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 text-sm sm:text-base">2013 – 2017</span>
              </div>
            </div>
          </div>

          <!-- Segurança da Informação -->
          <div
            class="bg-gray-50 p-3 sm:p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <div class="flex items-center mb-2 sm:mb-3">
              <i class="fas fa-shield-alt text-orange-500 text-lg sm:text-xl mr-2" />
              <h3 class="text-base sm:text-lg font-semibold text-gray-900">
                Formação em Segurança da Informação
              </h3>
            </div>
            <div class="flex flex-col gap-1 sm:gap-2 text-left">
              <div class="flex items-start">
                <i class="fas fa-building text-gray-400 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 text-sm sm:text-base">eSecurity</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-calendar text-gray-400 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 text-sm sm:text-base">2015 – 2016</span>
              </div>
            </div>
          </div>

          <!-- Inglês -->
          <div
            class="col-span-1 sm:col-span-2 bg-gradient-to-r from-orange-50 to-orange-100 p-3 sm:p-4 rounded-lg hover:shadow-md transition-shadow duration-300 border border-orange-200"
          >
            <div class="flex items-center mb-2 sm:mb-3">
              <i class="fas fa-language text-orange-500 text-lg sm:text-xl mr-2" />
              <h3 class="text-base sm:text-lg font-semibold text-gray-900">Curso de Inglês</h3>
            </div>
            <div class="flex flex-col gap-1 sm:gap-2 text-left">
              <div class="flex items-start">
                <i class="fas fa-building text-orange-400 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 font-medium text-sm sm:text-base">Uniway School</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-clock text-orange-400 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 font-medium text-sm sm:text-base">Em andamento</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-check-circle text-orange-400 mt-1 mr-2 text-sm" />
                <span class="text-gray-700 text-sm sm:text-base">
                  Foco em conversação e vocabulário técnico
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Botões flutuantes -->
    <div class="fixed bottom-6 right-6 flex flex-col gap-3">
      <button
        @click="exportToPDF"
        class="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-200 z-50"
        aria-label="Exportar para PDF"
        title="Exportar para PDF"
      >
        <i class="fas fa-file-pdf text-lg" />
      </button>
      <button
        @click="scrollToTop"
        class="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-200 z-50"
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        <i class="fas fa-arrow-up text-lg" />
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import html2pdf from 'html2pdf.js'

  const showMoreExperiences = ref(false)
  const isPrinting = ref(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const exportToPDF = () => {
    isPrinting.value = true
    showMoreExperiences.value = true

    setTimeout(() => {
      const element = document.querySelector('.curriculo')
      const opt = {
        margin: [10, 10, 10, 10],
        filename: 'Gabriel_Moreno_da_Luz_Curriculo.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          logging: false
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
          compress: true
        },
        pagebreak: {
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.page-break'
        }
      }
      html2pdf().set(opt).from(element).save()

      setTimeout(() => {
        showMoreExperiences.value = false
        isPrinting.value = false
      }, 1000)
    }, 500)
  }
</script>

<style scoped>
  .curriculo {
    padding-top: 4rem; /* Para compensar o navbar fixo */
  }

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .curriculo {
    font-family: 'Inter', sans-serif;
  }
</style>
