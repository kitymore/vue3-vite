<template>
<EagleContainer bg>
 <EagleTabs  :columns="col" v-model="activeName"  @update:model-value="updateCurrent"></EagleTabs>
</EagleContainer>
  
</template>
<script setup lang="ts">
// ref声明响应式数据，用于声明基本数据类型
 // reactive声明响应式数据，用于声明引用数据类型
 // 使用toRefs解构
import {ref, reactive, shallowRef,  computed,  onMounted, onActivated, onUpdated, onErrorCaptured,onBeforeMount,  onBeforeUpdate,
onBeforeUnmount, onUnmounted, onRenderTracked,
onRenderTriggered 
} from 'vue'

import EagleContainer from '@/components/eagle-container.vue'

import EagleTabs from '@/components/eagle-tabs.vue'
import ArcHistory from './components/arc-history.vue'
import ArcManage from './components/arc-manage.vue'
const col = [
    {
    label:'基本档案管理',
    name:'1',
     componentType:shallowRef(ArcManage)
   
  },
 
   {
    label:'历史记录',
    name:'2',
    componentType:shallowRef(ArcHistory)
  }
]
const activeName = ref('1')
const updateCurrent = (val: any)=>{
  activeName.value = val
  console.log(val)
}
// 生命周期钩子函数
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

</style>