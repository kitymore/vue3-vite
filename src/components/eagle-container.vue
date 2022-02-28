
<template>
 <div class="eagleContainer">
    <!-- <EagleTags></EagleTags> -->
  <div class="crumbs">
      <el-icon><scale-to-original /></el-icon>&nbsp;
      <el-breadcrumb separator="/">
        <template v-for="(item, index) in crumbs" :key="index">
          <el-breadcrumb-item><i class="el-icon-rank"></i> {{item}}</el-breadcrumb-item>
        </template>
         
          <!-- <el-breadcrumb-item>拖拽弹框</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <div class="bodyConteing" :style="{'background': props.bg? '#fff':''}">
       <slot ></slot>
    </div>
 </div>
</template>
<script setup lang="ts">
import {ScaleToOriginal} from '@element-plus/icons-vue'
import { navStore } from '@/stores/system';
//import EagleTags from '@/components/eagle-tags.vue'
import {ref} from 'vue'
const userNavStore = navStore() 
const crumbs:any = ref([...userNavStore.currentPath])
const props = defineProps({
    bg: {
      type: Boolean,
      default: false,
    },
});
</script>
<style lang="scss" scoped>
.eagleContainer{
  // padding: 10px;
  height: 100%;
  .crumbs{
   
    display: flex;
    align-content: center;
    padding-left: 10px;
    margin: 10px 0;
  }
  .bodyConteing{
    // background: #fff;
    // border: 1px solid #e1e1e1;
    // margin: 0 10px;
    padding: 0 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .bgColor{
    background: #fff;
    border: 1px solid #e1e1e1;
  }
  .titleWrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>