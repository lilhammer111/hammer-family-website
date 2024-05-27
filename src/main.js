import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
// 导入其他css样式
import 'primevue/resources/themes/aura-light-noir/theme.css'
// 导入基础css样式
import '@/styles/base.scss'
import FocusTrap from 'primevue/focustrap'
import ToastService from 'primevue/toastservice'
import DialogService from 'primevue/dialogservice'
import Tooltip from 'primevue/tooltip'


const app = createApp(App)
app.use(PrimeVue, {
  ripple: true,
  outline:true,
})
app.directive('tooltip', Tooltip)
app.directive('focustrap', FocusTrap)
app.use(ToastService)
app.use(DialogService)
app.use(createPinia())
app.use(router)
app.mount('#app')
