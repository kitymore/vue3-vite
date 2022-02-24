import { defineStore } from 'pinia'

export const navStore = defineStore({
  id: 'navgation',
  state: () => ({
    currentPath: []
  }),
  getters: {
    doubleCount: (state) => state.currentPath
  },
  actions: {
    setPath(path:any){
      this.currentPath = path
    }
  }
})
