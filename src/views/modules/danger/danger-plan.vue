<template>
<EagleContainer bg>
  <EagleTabs  :columns="col" v-model="activeName"></EagleTabs>
  <template v-for="item in pages.searchList.btns" :key="item.id">
    <EagleSearch :title="item.title" :columns="item.data"></EagleSearch>
  </template>
  
  <EagleSearch :title="'筛选条件'" >
    <div class="searchCon">
        <EagleInputBtn @search="searchList"></EagleInputBtn>
    </div>
  </EagleSearch>
    <el-divider></el-divider>
  <EagleTable :columns="pages.Tcoloums" :tableData="table.data" :pageTotal="table.total" @select="chooseCurrent" @size-change="sizeChanges" @current-change="currentChanges">
      <template #operation>
        <el-table-column label="操作" fixed="right" :width="150">
          <template v-slot="scope">
             
            <div class="table-operation">
              <span class="edit btns" @click="editableInfo(scope.row.id)">编辑</span>&nbsp;&nbsp;
              <span type="text" class="text-btn btns" >
                <el-popconfirm
                  confirmButtonText='好的'
                  cancelButtonText='不用了'
                  icon="el-icon-info"
                  iconColor="red"
                  title="确定删除选中项吗？"
                  @confirm="deleteData(scope.row.id)"
                >
                <template #reference>
                  <span>删除</span>
                  </template>
                </el-popconfirm>
              </span>
            </div>
          </template>
        </el-table-column>
      </template>
    </EagleTable>
</EagleContainer>
  
</template>
<script setup lang="ts">
// ref声明响应式数据，用于声明基本数据类型
 // reactive声明响应式数据，用于声明引用数据类型
 // 使用toRefs解构
import {ref, reactive, shallowRef, computed,  onMounted, onActivated, onUpdated, onErrorCaptured,onBeforeMount,  onBeforeUpdate,
onBeforeUnmount, onUnmounted, onRenderTracked,
onRenderTriggered 
} from 'vue'
import { useInfoStore } from '@/stores/user'
import EagleContainer from '@/components/eagle-container.vue'
import EagleTable from '@/components/eagle-table.vue'
import EagleTabs from '@/components/eagle-tabs.vue'
import EagleSearch from '@/components/eagle-search.vue'
import EagleInputBtn from '@/components/eagle-input-btn.vue'
import { table }from '@/mock/table'
import { pages } from '@/config/danger'
import useTable from '@/hooks/table'
const dialogVisible = ref(false)
const store = useInfoStore()
const col = reactive([
  {
    label:'检查计划列表',
    name:'1',
     componentType:shallowRef()
   
  },
])
const searchList = (e:any)=>{
 console.log(e)
}
const editableInfo = (e:any)=>{
  console.log(e)
}
const chooseCurrent = ()=>{
  console.log()
}
const sizeChanges  = ()=>{
  console.log()
}
const currentChanges  = ()=>{
  console.log()
}
const deleteData  = (e: any)=>{
  console.log(e)
}
const activeName = ref('1')
const tableState = reactive({
        searchParams: {
          typeName: '',
          typeCode:''
        },
        columns: [
            {prop: 'XXX', label: 'XXX',width:180},
            {prop: 'XXX', label: 'XXX'},
            {label: '操作', slot:'operate'}
        ],
        total: 30,
        tableData: [
          {

          }
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