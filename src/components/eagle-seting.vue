

<template>
   <div class="eaglesetting" >
       <el-drawer
        v-model="drawer"
        title="常用配置"
        direction="rtl"
        destroy-on-close
        size="260px"
       @close="onDrawerClose"
    >
         <el-scrollbar >
             <el-divider>界面显示</el-divider>
             <div class="settingItem">
                 <div class="settingText">水印开启</div>
                 <div class="settingContent">
                     <el-switch v-model="waterFlag" class="ml-2"  />
                 </div>
             </div>
             <div class="settingItem">
                 <div class="settingText">水印文案</div>
                 <div class="settingContent" style="width: 100px;">
                     <el-input v-model="waterText" :size="'small'"  placeholder="请输入水印文案" />
                 </div>
             </div>
              <el-divider>菜单设置</el-divider>
             <div class="settingItem">
                 <div class="settingText">菜单背景颜色</div>
                 <div class="settingContent">
                     <el-color-picker v-model="menubg" />
                 </div>
             </div>
             <div class="settingItem">
                 <div class="settingText">菜单字体</div>
                 <div class="settingContent" >
                    <el-color-picker v-model="menuFont" />
                 </div>
             </div>
             <div class="settingItem">
                 <div class="settingText">菜单手风琴</div>
                 <div class="settingContent" >
                    <el-switch v-model="isUniqueOpened" class="ml-2"  />
                 </div>
             </div>
              <el-divider>布局切换</el-divider>
              <div class="layoutContent" >
                   <div class="item" v-for="item in layouts" :key="item.type" @click="changeLayout(item)">
                      <img :src="item.src" alt="">
                   </div>
              </div>
        </el-scrollbar>
      
    </el-drawer>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, useAttrs  } from "vue";
import {themeStore } from '@/stores/theme'
import Watermark from '@/utils/wartermark';
import layout1 from '@/assets/img/layout_common.png'
import layout2 from '@/assets/img/layout_default.png'

const layouts:any = [
   {
    src:layout2,
    type:'defaults'
  },
  {
    src:layout1,
    type:'classic'
  },
 
]
const store = themeStore()
const drawer = computed(()=>{
    return store.getDrawer
})

const onDrawerClose = ()=>{
    console.log(222)
}
const waterFlag = computed({
  get: () => {
    return store.getWartermark
  },
  set: (val) => {
     store.setWartmarker(val)
      val? Watermark.set(waterText.value):Watermark.del()
  }
})
const attrs = useAttrs()
const changeLayout = (item:any)=>{
   store.setLoyout(item.type)
}
const waterText  = computed({
  get: () => {
    return store.getWartermarkText
  },
  set: (val) => {
     store.setWartermarkText(val)
  }
})

const menubg = computed({
  get: () => {
    return store.getMenuBar
  },
  set: (val) => {
     store.setMenuBar(val)
  }
})

const menuFont = computed({
  get: () => {
    return store.getMenuBarColor
  },
  set: (val) => {
     store.setMenuBarColor(val)
  }
})
const isUniqueOpened = computed({
  get: () => {
    return store.getIsUniqueOpened
  },
  set: (val) => {
     store.setIsUniqueOpened(val)
  }
})
const layout = computed({
  get: () => {
    return store.getLayout
  },
  set: (val) => {
     store.setLoyout(val)
  }
})
</script>
<style scoped lang="scss">
.eaglesetting {
    font-size: 14px;
    color: #333;
    .layoutContent{
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
   .settingItem{
       display: flex;
       align-items: center;
       justify-content: space-between;
       .settingText{
         white-space:nowrap;
       }
      
   }
}



</style>
