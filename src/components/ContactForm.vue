<template>
  <section id="contato" class="py-20 bg-light">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <h2 class="section-title text-center">Fale com um Especialista</h2>
        <p class="section-subtitle text-center">
          Preencha o formulário abaixo e nossa equipe entrará em contato para entender suas
          necessidades
        </p>

        <form @submit.prevent="sendEmail" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white text-gray-900"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white text-gray-900"
            />
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">Telefone</label>
            <input
              type="tel"
              id="phone"
              v-model="formData.phone"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white text-gray-900"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Mensagem</label>
            <textarea
              id="message"
              v-model="formData.message"
              required
              rows="4"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white text-gray-900"
            />
          </div>

          <div>
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isLoading">Enviando...</span>
              <span v-else>Enviar Mensagem</span>
            </button>
          </div>

          <div v-if="successMessage" class="text-green-600 text-sm text-center">
            {{ successMessage }}
          </div>
          <div v-if="errorMessage" class="text-red-600 text-sm text-center">
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
  import { ref } from 'vue'
  import emailjs from '@emailjs/browser'

  const formData = ref({
    name: '',
    email: '',
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
      await emailjs.send('service_8g4q0q8', 'template_8g4q0q8', formData.value, '8g4q0q8')
      successMessage.value = 'Mensagem enviada com sucesso!'
      formData.value = {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    } catch (error) {
      errorMessage.value = 'Erro ao enviar mensagem. Tente novamente.'
      console.error('Erro ao enviar email:', error)
    } finally {
      isLoading.value = false
    }
  }
</script>

<style scoped>
  input,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: white;
    color: #1a1a1a;
  }

  input:focus,
  textarea:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.5);
  }
</style>
