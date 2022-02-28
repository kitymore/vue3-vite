import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import '@/theme/index.scss';
import '@/assets/css/icon.css';
 //import '@/assets/css/common.css'
import i18n from "@/i18n";
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
//app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
