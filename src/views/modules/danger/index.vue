<template>
<EagleContainer class="dangerHome">
    <el-row :gutter="20" class="rowBottom">
      <el-col  :span="16">
         <div class="item">
           <EagleCard :columns="totalLists"></EagleCard>
         </div>
      </el-col>
      <el-col :span="8">
         <div class="item">
            <EagleTitle title="个人隐患数据分析"></EagleTitle>
         </div>
      </el-col>
   </el-row>
   <el-row :gutter="20" class="rowBottom">
      <el-col  :span="16">
         <div class="item">
            <EagleTitle title="我的任务"></EagleTitle>
         </div>
      </el-col>
      <el-col :span="8">
         <div class="item">
            <EagleTitle title="隐患整改超期预警"></EagleTitle>
         </div>
      </el-col>
   </el-row>
   <el-row :gutter="20" class="rowBottom">
   <el-col :span="8">
         <div class="item">
            <EagleTitle title="我常用的依据库"></EagleTitle>
         </div>
      </el-col>
      <el-col :span="8">
         <div class="item">
            <EagleTitle title="热门依据库"></EagleTitle>
         </div>
      </el-col>
      <el-col  :span="8">
         <div class="item">
            <EagleTitle title="隐患排查之星"></EagleTitle>
         </div>
      </el-col>
   </el-row>

    <el-row :gutter="20" class="rowBottom">
   <el-col :span="8">
         <div class="item">
            <EagleTitle title="我的常用检查表"></EagleTitle>
         </div>
      </el-col>
      <el-col :span="8">
         <div class="item">
            <EagleTitle title="最新上传的检查表"></EagleTitle>
         </div>
      </el-col>
      <el-col  :span="8">
         <div class="item">
            <EagleTitle title="隐患整改之星"></EagleTitle>
         </div>
      </el-col>
   </el-row>
   <el-row :gutter="20" class="rowBottom">
   <el-col :span="8">
         <div class="item">
            <EagleTitle title="确认隐患总数"></EagleTitle>
         </div>
      </el-col>
      <el-col :span="16">
         <div class="item">
           部门整改
         </div>
      </el-col>
     
   </el-row>
    <el-row :gutter="20" class="rowBottom">
   <el-col :span="16">
         <div class="item">
            <EagleTitle title="各部门整改率排名">
              <template #btns>
                    <el-button type="text">更多</el-button>
              </template>
            
            </EagleTitle>
         </div>
      </el-col>
      <el-col :span="8">
         <div class="item">
           <EagleTitle title="隐患整改超期预警"></EagleTitle>
         </div>
      </el-col>
     
   </el-row>
  

</EagleContainer>
  
</template>
<script setup lang="ts">
// ref声明响应式数据，用于声明基本数据类型
 // reactive声明响应式数据，用于声明引用数据类型
 // 使用toRefs解构
import {ref, reactive,  computed,  onMounted, onActivated, onUpdated, onErrorCaptured,onBeforeMount,  onBeforeUpdate,
onBeforeUnmount, onUnmounted, onRenderTracked,
onRenderTriggered 
} from 'vue'
import { useInfoStore } from '@/stores/user'
import EagleContainer from '@/components/eagle-container.vue'
import EagleTitle from '@/components/eagle-title.vue'
import EagleCard from '@/components/eagle-card.vue';


const totalLists = reactive([
  {
    name:'发现隐患数',
    value:'23',
    icon:'xx-cion'
  },
   {
    name:'发现隐患数',
    value:'23',
    icon:'xx-cion'
  },
   {
    name:'发现隐患数',
    value:'23',
    icon:'xx-cion'
  },
   {
    name:'发现隐患数',
    value:'23',
    icon:'xx-cion'
  },
   {
    name:'发现隐患数',
    value:'23',
    icon:'xx-cion'
  },
   {
    name:'发现隐患数',
    value:'23',
    icon:'xx-cion'
  },
   {
    name:'发现隐患数',
    value:'23',
    icon:'xx-cion'
  },
   {
    name:'发现隐患数',
    value:'23',
    icon:'xx-cion'
  }
])
onMounted(() => {
 // 组件的第一次渲染后调用，该元素现在可用，允许直接DOM访问
  console.log('onMounted')
});
onUpdated(() => {
 // 组件的第一次渲染后调用，该元素现在可用，允许直接DOM访问
  console.log('onUpdated')
});
onErrorCaptured(() => {
 // 组件的第一次渲染后调用，该元素现在可用，允许直接DOM访问
  console.log('onErrorCaptured')
});
onActivated(() => {
  console.log('onActivated')
});


</script>
<style scoped lang="scss">
.dangerHome{
  .rowBottom{
    margin-bottom: 20px;
  }
  .item{
    background: #fff;
    padding: 0 10px;
    border-radius: 10px;
    min-height: 270px;
  }
  
}
</style>