import { defineStore } from 'pinia'

export const useLanguageStore = defineStore({
  id: 'language',
  state: () => ({
    local: 'zhCn'
  }),
  getters: {
    getLanguage: (state) => state.local
  },
  actions: {
    setLanguage(lag:string) {
      this.local = lag
    }
  }
})
