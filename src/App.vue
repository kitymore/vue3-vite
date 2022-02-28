<script setup lang="ts">
//import LayOut from '@/views/layout/Lay-Out.vue';
import { computed, ref, getCurrentInstance, onBeforeMount, onMounted, onUnmounted, nextTick, defineComponent, watch, reactive, toRefs } from 'vue';
import setIntroduction from '@/utils/setIconfont'
// 设置初始化，防止刷新时恢复默认
		onBeforeMount(() => { 
			// 设置批量第三方 icon 图标
			setIntroduction.cssCdn();
			// 设置批量第三方 js
			setIntroduction.jsCdn();
		});
</script>
<template>
<router-view v-slot="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
    <!-- <router-view /> -->
</template>

<style scoped lang="scss"> 

// @import '@/assets/base.css';
@import "@/assets/css/common.css";
#app {
  max-width: 1280px;
  height: 100vh;
  overflow: hidden;
  font-weight: normal;
}


</style>
