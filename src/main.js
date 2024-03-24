import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'

// 导入其他css样式
import 'primevue/resources/themes/aura-light-green/theme.css'
// 导入基础css样式
import '@/styles/base.scss'
import FocusTrap from 'primevue/focustrap'

const app = createApp(App)
app.use(PrimeVue, {
  ripple: true
})
app.directive('focustrap', FocusTrap)

app.use(createPinia())
app.use(router)
app.mount('#app')
