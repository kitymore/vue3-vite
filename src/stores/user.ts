import { defineStore } from 'pinia'

export const useInfoStore = defineStore({
  id: 'user',
  state: () => ({
    token: '',
    name:'admin',
    menus:[],
    userInfo:{}
  }),
  getters: {
    getToken: (state) => state.token,
    getName: (state)=> state.name,
    getMenus:(state)=> state.menus,
    getUserInfo:(state)=> state.userInfo   
  },
  actions: {
    setToken(token:string) {
      this.token = token
    },
    setName(name:string){
        this.name = name
    },
    setMenus(menus:any){
      this.menus = menus
    },
    setUserInfo(userinfo:any){
      this.userInfo = userinfo
    }
  }
})
