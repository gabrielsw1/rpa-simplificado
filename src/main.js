import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

app.use(router)

// Meta tags para SEO
app.mixin({
  created() {
    document.title = 'RPA Simplificado - Consultoria em Automação de Processos'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'Consultoria especializada em RPA com UiPath para otimizar seus processos e aumentar a produtividade da sua empresa.'
    )
  }
})

app.mount('#app')
