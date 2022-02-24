import router from '@/router'
import {useInfoStore} from '@/stores/user'
const whiteList = ['Login', 'Init']
let asyncRouterFlag = 0

const getRouter = async(userStore:any) => {
    // const routerStore = useRouterStore()
    // await routerStore.SetAsyncRouter()
    // await userStore.GetUserInfo()
    // const asyncRouters = routerStore.asyncRouters
    // asyncRouters.forEach(asyncRouter => {
    //   router.addRoute(asyncRouter)
    // })
  }

router.beforeEach(async(to:any, from:any, next)=>{
    const userStore = useInfoStore()
    const token:string  = userStore.token
    console.log(888, to, from, next)
    // 在白名单中的判断情况
    if (whiteList.indexOf(to.name) > -1) {
        if (token) {
            if (!asyncRouterFlag && whiteList.indexOf(from.name) < 0) {
              asyncRouterFlag++
              await getRouter(userStore)
            }
           // next({ name: userStore.userInfo.authority.defaultRouter })
          } else {
            next()
          }
    } else {
         // 不在白名单中并且已经登陆的时候
        if (token) {
        // 添加flag防止多次获取动态路由和栈溢出
        if (!asyncRouterFlag && whiteList.indexOf(from.name) < 0) {
            asyncRouterFlag++
            // await getRouter(userStore)
            next({ ...to, replace: true })
        } else {
            if (to.matched.length) {
            next()
            } else {
            next({ path: '/404' })
            }
        }
    }
        // 不在白名单中并且未登陆的时候
     if (!token) {
        next({
          name: 'Login',
          query: {
            redirect: document.location.hash
          }
        })
      }
    }

})
  