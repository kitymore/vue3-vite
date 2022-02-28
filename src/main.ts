import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import '@/theme/index.scss';
import '@/assets/css/icon.css';
import {registerGlobComp } from '@/utils/registerGlobComp'
 //import '@/assets/css/common.css'
import i18n from "@/i18n";
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
 // Register global components
registerGlobComp(app);
//app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
