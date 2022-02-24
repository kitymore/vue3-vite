<script setup lang="ts">
//import LayOut from '@/views/layout/Lay-Out.vue';
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
