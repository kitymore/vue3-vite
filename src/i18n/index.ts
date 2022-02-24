// src/i18n/index.js
import { createI18n,   } from "vue-i18n";
//这里不可以使用pinina, 会报错
// import {useLanguageStore} from '@/stores/language' 
import zh from '@/i18n/zh'
import en from '@/i18n/en'

// zhCn
// src/i18n/index.js
const messages = {
    en: en,
    zh: zh
  };
// const lag = useLanguageStore()
//const locale = lag.getLanguage==='zhCn'? 'zh':'en'
const locale = 'zh'
const i18n = createI18n({
   // 使用 Composition API 模式，则需要将其设置为false
   legacy: false,
   // 全局注入 $t 函数
   globalInjection: true,
   locale,
   messages,
 });

export default i18n
