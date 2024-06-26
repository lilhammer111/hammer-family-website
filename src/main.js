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
import { usePassThrough } from 'primevue/passthrough'
import 'highlight.js/styles/atom-one-dark.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import piniaPersistedState from 'pinia-plugin-persistedstate'

const CustomPreset = usePassThrough(
    {
        card: {
            root: {
                style: 'border-radius: 5px;'
            }
        },
        button: {
            root: {
                style: 'margin:0'
            }
        }
    }
)

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersistedState)

app.use(PrimeVue, {
    ripple: true,
    outline: true,
    pt: CustomPreset
})
app.directive('tooltip', Tooltip)
app.directive('focustrap', FocusTrap)
app.use(ToastService)
app.use(DialogService)
app.use(pinia)
app.use(router)
app.mount('#app')

