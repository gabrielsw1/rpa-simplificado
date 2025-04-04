<template>
  <section id="contato" class="py-20 bg-light">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <h2 class="section-title text-center">Fale com um Especialista</h2>
        <p class="section-subtitle text-center">
          Preencha o formulário abaixo e nossa equipe entrará em contato para entender suas
          necessidades
        </p>

        <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg shadow-sm">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                :class="{ 'border-red-500': errors.name }"
                required
              />
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                :class="{ 'border-red-500': errors.email }"
                required
              />
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
            </div>

            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-1">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                v-model="form.company"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
          </div>

          <div class="mt-6">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div class="mt-6">
            <button type="submit" class="btn-primary w-full" :disabled="isLoading">
              <span v-if="isLoading">Enviando...</span>
              <span v-else>Enviar Mensagem</span>
            </button>
          </div>

          <div
            v-if="successMessage"
            class="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center"
          >
            {{ successMessage }}
          </div>

          <div v-if="errorMessage" class="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            {{ errorMessage }}
          </div>

          <div class="mt-4 text-center">
            <p class="text-sm text-gray-600">
              Ou entre em contato pelo WhatsApp:
              <a
                href="https://wa.me/5551994533154"
                class="text-primary hover:text-primary-hover font-medium"
              >
                (51) 99453-3154
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  import emailjs from '@emailjs/browser'

  const form = reactive({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const errors = reactive({
    name: '',
    email: ''
  })

  const isLoading = ref(false)
  const successMessage = ref('')
  const errorMessage = ref('')

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async () => {
    // Reset messages and errors
    successMessage.value = ''
    errorMessage.value = ''
    errors.name = ''
    errors.email = ''

    // Validate form
    if (form.name.length < 3) {
      errors.name = 'Nome deve ter pelo menos 3 caracteres'
      return
    }

    if (!validateEmail(form.email)) {
      errors.email = 'E-mail inválido'
      return
    }

    try {
      isLoading.value = true

      // Configuração do EmailJS
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        company: form.company,
        phone: form.phone,
        message: form.message
      }

      // Enviar email
      await emailjs.send(
        'YOUR_SERVICE_ID', // Substitua pelo seu Service ID
        'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Substitua pela sua Public Key
      )

      // Reset form
      Object.keys(form).forEach(key => {
        form[key] = ''
      })

      successMessage.value = 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      errorMessage.value = 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.'
    } finally {
      isLoading.value = false
    }
  }
</script>
