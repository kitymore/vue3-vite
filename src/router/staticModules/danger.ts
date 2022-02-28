
export const dangerRoute =[
    {
        path: '/dangerHome',
        name: 'dangerHome',
        meta: {
            title: '隐患首页'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/index.vue')
    },
    {
        path: '/dangerPlan',
        name: 'dangerPlan',
        meta: {
            title: '检查计划'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/danger-plan.vue')
    },
    {
        path: '/dangerTask',
        name: 'dangerTask',
        meta: {
            title: '任务清单'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/task-list.vue')
    },
    {
        path: '/InspectionRecord',
        name: 'InspectionRecord',
        meta: {
            title: '检查记录'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/Inspection-record.vue')
    },
    {
        path: '/hazardConfirmation',
        name: 'hazardConfirmation',
        meta: {
            title: '隐患确认'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/hazard-confirmation.vue')
    },
    {
        path: '/rectification',
        name: 'rectification',
        meta: {
            title: '整改'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/rectification.vue')
    },
    {
        path: '/superviseRectification',
        name: 'superviseRectification',
        meta: {
            title: '监督整改'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/supervise-rectification.vue')
    },
    {
        path: '/dangerCheck',
        name: 'dangerCheck',
        meta: {
            title: '验收'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/check.vue')
    },
    {
        path: '/Inspectionreport',
        name: 'Inspectionreport',
        meta: {
            title: '检查报告'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/Inspection-report.vue')
    },
    {
        path: '/statisticalanalysis',
        name: 'statisticalanalysis',
        meta: {
            title: '统计分析'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/statistical-analysis.vue')
    },
    {
        path: '/hiddenDangerTracing',
        name: 'hiddenDangerTracing',
        meta: {
            title: '隐患追溯'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/hiddenDanger-tracing.vue')
    },
  
    {
        path: '/expectlist',
        name: 'expectlist',
        meta: {
            title: '逾期隐患清单'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/expect-list.vue')
    },
    {
        path: '/checklist',
        name: 'checklist',
        meta: {
            title: '检查表'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/checklist.vue')
    },
    {
        path: '/InspectionBasis',
        name: 'InspectionBasis',
        meta: {
            title: '检查依据'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/Inspection-basis.vue')
    },
    {
        path: '/paramsSetting',
        name: 'paramsSetting',
        meta: {
            title: '参数设置'
        },
        component: () => import (/* webpackChunkName: "403" */ '@/views/modules/danger/parameter-setting.vue')
    },
   
    
] 
  
export default dangerRoute;