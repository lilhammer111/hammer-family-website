import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/button'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, { ripple: true })
app.use(createPinia())
app.use(router)

app.mount('#app')
