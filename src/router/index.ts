import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/Lay-Out.vue'
import {useInfoStore} from '@/stores/user'
import { navStore  } from '@/stores/system'
// const whiteList = ['Login', 'Init']
// let asyncRouterFlag = 0
import staticModules from './staticModules'
const route = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [...staticModules]
},
{
    path: "/login",
    name: "Login",
    meta: {
        title: '登录'
    },
    component: () => import ( /* webpackChunkName: "login" */ "@/views/Login.vue")
 }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: route
})
router.beforeEach(async(to:any, from:any, next)=>{
  const userStore = useInfoStore()
  const userNavStore = navStore()
  const token:string  = userStore.token
  userNavStore.setPath([to.meta.title])
  console.log(888, to, from, next)
  next()
  // 在白名单中的判断情况
  // if (whiteList.indexOf(to.name) > -1) {
  //     if (token) {
  //         if (!asyncRouterFlag && whiteList.indexOf(from.name) < 0) {
  //           asyncRouterFlag++
  //          // await getRouter(userStore)
  //         }
  //        // next({ name: userStore.userInfo.authority.defaultRouter })
  //       } else {
  //         next()
  //       }
  // } else {
  //      // 不在白名单中并且已经登陆的时候
  //     if (token) {
  //     // 添加flag防止多次获取动态路由和栈溢出
  //     if (!asyncRouterFlag && whiteList.indexOf(from.name) < 0) {
  //         asyncRouterFlag++
  //         // await getRouter(userStore)
  //         next({ ...to, replace: true })
  //     } else {
  //         if (to.matched.length) {
  //         next()
  //         } else {
  //         next({ path: '/404' })
  //         }
  //     }
  // }
  //     // 不在白名单中并且未登陆的时候
  //  if (!token) {
  //     next({
  //       name: 'Login',
  //       query: {
  //         redirect: document.location.hash
  //       }
  //     })
  //   }
  // }

})
export default router
