<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from "vue-router";

 const route = useRoute();

const onRoutes = computed(() => {
    return route.path;
});
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
 const items = [
            {
                icon: "el-icon-lx-home",
                index: "/dashboard",
                title: "首页",
            },
             {
                icon: "el-icon-lx-calendar",
                index: "1",
                title: "基本信息",
                subs: [
                    {
                        index: "/entbasicinfo",
                        title: "企业基本信息",
                    },
                    {
                        index: "/government",
                        title: "政府信息审核网站",
                    },
                    {
                        index: "/archives",
                        title: "基本档案管理",
                    },
                    {
                        index: "/out",
                        title: "外连相关方备忘录",
                    },
                    {
                        index: "build",
                        title: "建筑物信息",
                    },
                     {
                        index: "/eve",
                        title: "企业周边环境",
                    },
                    {
                        index: "danger",
                        title: "风险位置",
                    },
                ],
            },
            {
                icon: "el-icon-lx-cascades",
                index: "/2",
                title: "信息管理",
                 subs: [
                    {
                        index: "/entbaskinfo",
                        title: "信息中心",
                    },
                    {
                        index: "/entnetwork",
                        title: "事故案例",
                    },
                    {
                        index: "basicmanage",
                        title: "文档中心",
                    },
                    {
                        index: "/out",
                        title: "预警",
                    },
                    {
                        index: "build",
                        title: "审批",
                    }
                ],
            },
             {
                icon: "el-icon-lx-cascades",
                index: "/3",
                title: "目标职责",
                 subs: [
                    {
                        index: "/entbaskinfo",
                        title: "安全管理机构人员任命",
                    },
                    {
                        index: "/entnetwork",
                        title: "主要负责人安全生产承诺",
                    },
                    {
                        index: "basicmanage",
                        title: "岗位安全责任书",
                    },
                    {
                        index: "/out",
                        title: "子公司安全目标责任书",
                    },
                    {
                        index: "build",
                        title: "安全生产考核记录",
                    },
                    {
                        index: "/out",
                        title: "会议纪要",
                    },
                    {
                        index: "build",
                        title: "安全管理网络",
                    },
                    {
                        index: "/out",
                        title: "安全生产投入计划",
                    },
                    {
                        index: "build",
                        title: "安全费用记录",
                    },
                    {
                        index: "build",
                        title: "安全生产投入统计",
                    },
                    {
                        index: "/out",
                        title: "安全生产投入明细",
                    },
                    {
                        index: "build",
                        title: "安全生产投入年度统计",
                    }
                ],
            },
             {
                icon: "el-icon-lx-calendar",
                index: "4",
                title: "制度化管理",
                subs: [
                    {
                        index: "/form",
                        title: "法规标准清单",
                    },
                    {
                        index: "/upload",
                        title: "管理手册",
                    },
                    {
                        index: "4",
                        title: "规章制度程序",
                        subs: [
                            {
                                index: "/editor",
                                title: "富文本编辑器",
                            },
                        ],
                    },
                     {
                        index: "/upload",
                        title: "操作流程",
                    },
                ],
            },
             {
                icon: "el-icon-lx-cascades",
                index: "/5",
                title: "教育培训",
                 subs: [
                    {
                        index: "/entbaskinfo",
                        title: "教育首页",
                    },
                    {
                        index: "/entnetwork",
                        title: "我的任务",
                    },
                    {
                        index: "basicmanage",
                        title: "年度培训计划",
                    },
                    {
                        index: "/out",
                        title: "年度培训计划统计",
                    },
                    {
                        index: "build",
                        title: "指定培训计划",
                    },
                    {
                        index: "/out",
                        title: "三级安全培训",
                    },
                    {
                        index: "build",
                        title: "四新培训",
                    },
                    {
                        index: "/out",
                        title: "复工培训",
                    },
                    {
                        index: "build",
                        title: "课件中心",
                    },
                    {
                        index: "build",
                        title: "考试中心",
                    },
                    {
                        index: "/out",
                        title: "试卷中心",
                    },
                    {
                        index: "build",
                        title: "培训跟踪",
                    }
                ],
            },
              {
                icon: "el-icon-lx-calendar",
                index: "6",
                title: "现场基本管理",
                subs: [
                    {
                        index: "/form",
                        title: "设备管理",
                    },
                    {
                        index: "/upload",
                        title: "危险化学品清单",
                    },
                    {
                        index: "4",
                        title: "消防器材清单",
                    },
                     {
                        index: "/upload",
                        title: "防雷，消防检测记录",
                    },
                ],
            },
             {
                icon: "el-icon-lx-calendar",
                index: "7",
                title: "危险作业管理",
                subs: [
                    {
                        index: "/form",
                        title: "危险作业申请",
                    },
                    {
                        index: "/upload",
                        title: "危险作业实施",
                    },
                    {
                        index: "4",
                        title: "危险作业延期",
                    },
                     {
                        index: "/upload",
                        title: "有限空间管理",
                    },
                     {
                        index: "/upload",
                        title: "书面审批记录",
                    },
                    {
                        index: "4",
                        title: "危险作业一览表",
                    },
                     {
                        index: "/upload",
                        title: "危险作业参数设定",
                    },
                ],
            },
             {
                icon: "el-icon-lx-calendar",
                index: "8",
                title: "施工安全管理",
                subs: [
                    {
                        index: "/form",
                        title: "施工单位管理",
                    },
                    {
                        index: "/upload",
                        title: "施工申请",
                    },
                    {
                        index: "4",
                        title: "进场管理",
                    },
                     {
                        index: "/upload",
                        title: "施工过程管理",
                    },
                     {
                        index: "/upload",
                        title: "施工退场",
                    },
                    {
                        index: "4",
                        title: "处罚记录",
                    },
                     {
                        index: "/upload",
                        title: "事故记录",
                    },
                    
                     {
                        index: "/upload",
                        title: "施工项目一览表",
                    },
                    {
                        index: "/upload",
                        title: "课件库管理",
                    },
                    
                     {
                        index: "/upload",
                        title: "试卷中心",
                    },
                    
                     {
                        index: "/upload",
                        title: "参数定义",
                    },
                ],
            },
             {
                icon: "el-icon-lx-calendar",
                index: "9",
                title: "出租安全管理",
                subs: [
                    {
                        index: "/form",
                        title: "出租场所管理",
                    },
                    {
                        index: "/upload",
                        title: "承租单位管理",
                    },
                    {
                        index: "4",
                        title: "招租管理",
                    },
                     {
                        index: "/upload",
                        title: "装修施工管理",
                    },
                     {
                        index: "/upload",
                        title: "开业管理",
                    },
                    {
                        index: "4",
                        title: "闭店管理",
                    },
                     {
                        index: "/upload",
                        title: "日常管理",
                    },
                    
                     {
                        index: "/upload",
                        title: "退租管理",
                    },
                    {
                        index: "/upload",
                        title: "处罚记录",
                    },
                    
                     {
                        index: "/upload",
                        title: "事故记录",
                    },
                    
                     {
                        index: "/upload",
                        title: "项目管理",
                    },
                      {
                        index: "/upload",
                        title: "参数定义",
                    },
                     {
                        index: "/upload",
                        title: "证件照统计",
                    },
                ],
            },
             {
                icon: "el-icon-lx-calendar",
                index: "10",
                title: "风险分级管控",
                subs: [
                    {
                        index: "/form",
                        title: "风险分级管控首页",
                    },
                    {
                        index: "/upload",
                        title: "项目策划",
                    },
                    {
                        index: "upload",
                        title: "分线点（单元）划分",
                    },
                     {
                        index: "/upload",
                        title: "分线辨识管控",
                    },
                     {
                        index: "/upload",
                        title: "安全作业规程编制",
                    },
                    {
                        index: "4",
                        title: "分线分布图绘制",
                    },
                     {
                        index: "/upload",
                        title: "检查表编制",
                    },
                    
                     {
                        index: "/upload",
                        title: "较大以上风险管控",
                    },
                    {
                        index: "/upload",
                        title: "风险管控成果报告",
                    },
                    
                     {
                        index: "/upload",
                        title: "风险辨识库",
                    },
                      {
                        index: "/upload",
                        title: "参数设定",
                    },
                     {
                        index: "/upload",
                        title: "统计分析",
                    },
                ],
            },
             {
                icon: "el-icon-lx-calendar",
                index: "11",
                title: "隐患排查治理",
                subs: [
                    {
                        index: "/form",
                        title: "检查记录",
                    },
                    {
                        index: "/upload",
                        title: "隐患确认",
                    },
                    {
                        index: "upload",
                        title: "整改",
                    },
                     {
                        index: "/upload",
                        title: "监督整改",
                    },
                     {
                        index: "/upload",
                        title: "验收",
                    },
                    {
                        index: "4",
                        title: "检查报告",
                    },
                     {
                        index: "/upload",
                        title: "统计分析",
                    },
                    
                     {
                        index: "/upload",
                        title: "隐患追述",
                    },
                    {
                        index: "/upload",
                        title: "预期隐患清单",
                    },
                    
                     {
                        index: "/upload",
                        title: "检查表",
                    },
                      {
                        index: "/upload",
                        title: "检查依据",
                    },
                     {
                        index: "/upload",
                        title: "参数设置",
                    },
                ],
            },
             {
                icon: "el-icon-lx-calendar",
                index: "11",
                title: "监督检查",
                subs: [
                    {
                        index: "/form",
                        title: "监督检查计划",
                    },
                    {
                        index: "/upload",
                        title: "监督检查任务",
                    },
                    {
                        index: "upload",
                        title: "提交监督隐患",
                    },
                     {
                        index: "/upload",
                        title: "验收监督隐患",
                    },
                     {
                        index: "/upload",
                        title: "监督检查报告",
                    },
                    {
                        index: "4",
                        title: "监督隐患跟踪",
                    },
                     {
                        index: "/upload",
                        title: "监督任务跟踪",
                    },
                ],
            },
            {
                icon: "el-icon-lx-copy",
                index: "/tabs",
                title: "tab选项卡",
            },
           
            {
                icon: "el-icon-lx-emoji",
                index: "/icon",
                title: "自定义图标",
            },
            {
                icon: "el-icon-pie-chart",
                index: "/charts",
                title: "schart图表",
            },
            {
                icon: "el-icon-lx-global",
                index: "/19",
                title: "目视化管理",
                 subs: [
                    {
                        index: "/permission",
                        title: "员工中心",
                    },
                ]
            },
            {
                icon: "el-icon-lx-warn",
                index: "20",
                title: "系统管理",
                subs: [
                    {
                        index: "/permission",
                        title: "员工中心",
                    },
                    {
                        index: "/404",
                        title: "部门管理",
                    },
                     {
                        index: "/permission",
                        title: "岗位管理",
                    },
                    {
                        index: "/404",
                        title: "角色管理",
                    },
                     {
                        index: "/404",
                        title: "下级单位管理",
                    },
                     {
                        index: "/404",
                        title: "审批流程管理",
                    },
                     {
                        index: "/permission",
                        title: "系统设置",
                    },
                    {
                        index: "/404",
                        title: "预警消息订阅",
                    },
                     {
                        index: "/404",
                        title: "登录设备绑定",
                    },
                ],
            },
           
];

</script>

<template>
  <div class="slide-menu">
    <el-menu
    :default-active="onRoutes"
    class="sidebar-el-menu"
     background-color="#324157"
      text-color="#bfcbd9" active-text-color="#20a0ff"
    @select="handleSelect"
     unique-opened
    router
  >
   <template v-for="item in items">
     <template v-if="item.subs">
                    <el-sub-menu :index="item.index" :key="item.index">
                        <template #title>
                            <i :class="item.icon"></i>&nbsp;&nbsp;
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}</el-menu-item>
                            </el-sub-menu>
                            <template  v-else>
                              <el-menu-item :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
                            </template>    
                        </template>
                    </el-sub-menu>
        </template>
        <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
                <i :class="item.icon"></i>&nbsp;&nbsp;
                <template #title>{{ item.title }}</template>
            </el-menu-item>
        </template>
   </template>
  
  </el-menu>
  
  </div>
</template>
<style scoped lang="scss">

</style>
