<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from "vue-router";
import {themeStore } from '@/stores/theme'
import { menus} from '@/config/menus'
const store = themeStore()
 const route = useRoute();
const bgcolor = computed(() => {
    return store.getMenuBar;
});
const textColor = computed(() => {
    return store.getMenuBarColor;
});
const isUniqueOpened = computed(() => {
    return store.getIsUniqueOpened;
});
const onRoutes = computed(() => {
    return route.path;
});
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
 const items:any = menus.menus

</script>

<template>
  <div class="slide-menu">
    <el-menu
    :default-active="onRoutes"
    class="sidebar-el-menu"
     :background-color="bgcolor"
      :text-color="textColor" active-text-color="#20a0ff"
    @select="handleSelect"
    :unique-opened="isUniqueOpened"
    router
  >
   <template v-for="item in items">
     <template v-if="item.subs">
                    <el-sub-menu :index="item.index" :key="item.index">
                        <template #title>
                            <i :class="item.icon" ></i>&nbsp;&nbsp;
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-sub-menu>
                            <template  v-else>
                              <el-menu-item :index="subItem.index" :key="subItem.index">
                                    <i :class="subItem.icon" ></i>&nbsp;&nbsp;
                                    <span> {{ subItem.title }}</span>
                                 <!-- {{ subItem.title }} -->
                                </el-menu-item>
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
