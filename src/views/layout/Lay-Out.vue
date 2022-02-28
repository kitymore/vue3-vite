<template>
<div class="common-layout">
  <!-- 布局一 -->
<el-container v-if="layout==='defaults'">
    <el-header>
      <DarkHeader></DarkHeader>
    </el-header>
    <el-container  style="height: 50vh; width:100%;">
      <el-aside width="200px">
        <el-scrollbar>
            <EagleMenu></EagleMenu>
        </el-scrollbar>
      </el-aside>
      <el-main>
          <el-scrollbar >
            <!-- <EagleTags></EagleTags> -->
            <el-config-provider :locale="localLanguage">
              <router-view ></router-view>
          </el-config-provider>
          </el-scrollbar>
      </el-main>
    </el-container>
</el-container>


<el-container v-else>
  <el-container  >
    <el-aside width="200px">
      <el-scrollbar>
          <EagleMenu></EagleMenu>
      </el-scrollbar>
    </el-aside>
      <el-container>
      <el-header> <SlideHeader></SlideHeader></el-header>
      <el-main>
          <el-scrollbar >
          <!-- <EagleTags></EagleTags> -->
          <el-config-provider :locale="localLanguage">
            <router-view ></router-view>
        </el-config-provider>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</el-container>
<EagleSeeting></EagleSeeting>
</div>
 
</template>
<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import SlideHeader from '@/components/slide-header.vue';
import DarkHeader from '@/components/dark-header.vue'
import EagleMenu from '@/components/eagle-menu.vue'
// import EagleTags from '@/components/eagle-tags.vue'
import EagleSeeting from '@/components/eagle-seting.vue';
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import {useLanguageStore} from '@/stores/language'
import {ref, computed} from 'vue'
import {themeStore } from '@/stores/theme'
const themestores = themeStore()
const store = useLanguageStore()
// eslint-disable-next-line vue/return-in-computed-property
const localLanguage = computed(() => {
      switch (store.getLanguage) {
        case 'en':
          return en
        case 'zhCn':
          return zhCn
      }
})
const layout:any =  computed(()=>{
  return themestores.getLayout
})
</script>

<style>

.common-layout{
  height: 100%;
  height: 100vh;
}
.common-layout .el-header {
  /* background-color: #242f42; */
  background: #fff;
  line-height: 60px;
}
.common-layout .el-aside {
 background-color: rgb(50, 65, 87);
}

.common-layout .el-main {
  background-color: #e9eef3;
  padding: 0px;
  width: calc(100vw - 200px);
}

.common-layout > .el-container {
 height: 100%;
}


</style>
