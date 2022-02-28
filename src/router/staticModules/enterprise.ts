
export const dashboardRoute =[
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            title: '首页'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/dashboard/index.vue')
    },
    {
        path: '/404',
        name: '404',
        meta: {
            title: '找不到页面'
        },
        component: () => import (/* webpackChunkName: "404" */ '@/views/404.vue')
    }, 
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/403.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
          title: '首页'
      },
      component: () => import (/* webpackChunkName: "403" */ '@/views/modules/dashboard/index.vue')
    },
    {
        path: '/entbasicinfo',
        name: 'entbasicinfo',
        meta: {
            title: '企业基本信息'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/basicInfo/enterprise.vue')
    },
    {
        path: '/government',
        name: 'government',
        meta: {
            title: '政府信息审核网站'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/basicInfo/government.vue')
    },
    {
        path: '/archives',
        name: 'archives',
        meta: {
            title: '基本档案管理'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/basicInfo/archives.vue')
    },
    {
        path: '/iconlist',
        name: 'iconlist',
        meta: {
            title: '第三方图标展示'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/icon/icon.vue')
    },
] 
  
export default dashboardRoute;