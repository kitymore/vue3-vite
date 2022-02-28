<template>
<EagleContainer>
  <div class="useMult wrapBg">
     <EagleTitle :title="'验收'"></EagleTitle>
     4343434
    
  </div>
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
import EagleTable from '@/components/eagle-table.vue'
import useTable from '@/hooks/table'
const dialogVisible = ref(false)
const store = useInfoStore()
const tableState = reactive({
        searchParams: {
          typeName: '',
          typeCode:''
        },
        columns: [
            {prop: 'XXX', label: 'XXX',width:180},
            {prop: 'XXX', label: 'XXX'},
            {label: '操作', slot:'operate'}
        ]
        
    })
    const params = {
      searchUrl: 'XXX',
      deleteUrl:'XXX',
      searchData: tableState.searchParams
    }

const {
      getTableList, 
      deletaItem,
      sizeChange,
      currentChange,
      searchState,
      dataState,
    } = useTable(params) //使用hooks
const closeModel = ()=>{
  dialogVisible.value= false
}
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

const settStore = ()=>{
 // store.$patch({ count: counter.count + 1 })
 store.setName('tick')
}
</script>
<style scoped lang="scss">
.wrapBg{
  background: #fff;
  margin-bottom: 10px;
  padding: 10px;
}
.main{
  background: #fff;
  padding: 10px;
}
.dashboard{
    background: #fff;
    height: 100vh;
    
}
</style>