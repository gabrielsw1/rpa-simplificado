<template>
  <section id="contato" class="py-20 bg-light">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <h2 class="section-title text-center">Fale com um Especialista</h2>
        <p class="section-subtitle text-center">
          Preencha o formulário abaixo e nossa equipe entrará em contato para entender suas
          necessidades
        </p>

        <form @submit.prevent="sendEmail" class="bg-white p-8 rounded-lg shadow-sm">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-1">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                v-model="formData.company"
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
                v-model="formData.phone"
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
              v-model="formData.message"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div class="mt-6">
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="isLoading"
            >
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
  import { ref, onMounted } from 'vue'
  import emailjs from '@emailjs/browser'
  import { emailConfig } from '../config/email'

  onMounted(() => {
    emailjs.init(emailConfig.publicKey)
  })

  const formData = ref({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const isLoading = ref(false)
  const successMessage = ref('')
  const errorMessage = ref('')

  const sendEmail = async () => {
    isLoading.value = true
    successMessage.value = ''
    errorMessage.value = ''

    try {
      const templateParams = {
        from_name: formData.value.name,
        from_email: formData.value.email,
        company: formData.value.company,
        phone: formData.value.phone,
        message: formData.value.message,
        to_email: emailConfig.toEmail,
        reply_to: formData.value.email
      }

      console.log('Enviando email com os seguintes parâmetros:', templateParams)
      console.log('Configuração do EmailJS:', emailConfig)

      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams
      )

      console.log('Resposta do EmailJS:', response)

      if (response.status === 200) {
        successMessage.value = 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        formData.value = {
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        }
      } else {
        throw new Error('Erro no envio do email')
      }
    } catch (error) {
      console.error('Erro detalhado ao enviar email:', error)
      errorMessage.value = `Erro ao enviar mensagem: ${error.message}. Por favor, tente novamente mais tarde.`
    } finally {
      isLoading.value = false
    }
  }
</script>
