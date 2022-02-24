
<template>
 <div class="govhisrecord">
     <EagleSearch :title="'类型'" :columns="searchList" ></EagleSearch>
      <EagleSearch :title="'状态'" :columns="searchStateList"></EagleSearch>
     <!-- <el-divider></el-divider> -->
     <EagleTable :columns="tableState.columns" :tableData="tableState.tableData" :pageTotal="tableState.total" @select="chooseCurrent" @size-change="sizeChanges" @current-change="currentChanges">
      <template #operation>
        <el-table-column label="操作" fixed="right" :width="150">
          <template v-slot="scope">
             
            <div class="table-operation">
             
              <el-button @click="getDetail(scope.row.id)">详情</el-button>
            </div>
          </template>
        </el-table-column>
      </template>
    </EagleTable>
 </div>
 <EagleModel v-model:visible="dialogVisible"  @close="closeModel" :top="'20vh'">
    <template #title>
       益戈风险管控平台-政府信息详情
    </template>
     <template #body>
         <EagleDesc :columns="detailList"></EagleDesc>
    </template>
    <template #footer>
        <el-button @click="dialogVisible = false">关闭</el-button>
       
    </template>
  </EagleModel>
</template>
<script setup lang="ts">
import EagleTable from '@/components/eagle-table.vue';
import EagleModel from '@/components/eagle-model.vue'
import EagleDesc from '@/components/eagle-desc.vue';
import EagleSearch from '@/components/eagle-search.vue';

import {ref,  reactive} from 'vue'
const dialogVisible = ref(false)
const closeModel = ()=>{
  dialogVisible.value= false
}
const searchList = reactive([
     {value: '', label: '全部'},
     {value: 'type', label: '类别'},
    {value: '百度', label: '网站名称'},
    {value: 'http://22333222', label: '网址'},
    {value: '网红', label: '用户名'},
    {value: '123456', label: '密码'},
    {value: '网', label: '修改人'},
    {value: '编辑', label: '操作', },
    
])
const searchStateList = reactive([
     {value: '', label: '全部'},
     {value: 'type', label: '类别'},
  
    {value: '网', label: '修改人'},
    {value: '编辑', label: '操作', }
])
const detailList = reactive([
    {value: 'type', label: '类别'},
    {value: '百度', label: '网站名称'},
    {value: 'http://22333222', label: '网址'},
    {value: '网红', label: '用户名'},
    {value: '123456', label: '密码'},
    {value: '网', label: '修改人'},
    {value: '编辑', label: '操作', },
    
])
const tableState = reactive({
    searchParams: {
        typeName: '',
        typeCode:''
    },
    columns: [
       
        {prop: 'type', label: '类别',width:180, sortable: true},
        {prop: 'netname', label: '网站名称'},
        {prop: 'network', label: '网址'},
        {prop: 'username', label: '用户名'},
        {prop: 'pwd', label: '密码'},
        {prop: 'user', label: '修改人'},
        {label: '操作', slot:'operate'}
    ],
    tableData:[
        {
            type: '环保',
            netname:'23',
            network:'http://22333222',
            username:'',
            pwd:'',
            user:''
        },
        {
            type: '消防',
            netname:'我的',
            network:'http://22333222',
            username:'',
            pwd:'',
            user:''
        },
         {
            type: '安全',
            netname:'23',
            network:'http://22333222',
            username:'	AA333',
            pwd:'',
            user:''
        },
         {
            type: '环保',
            netname:'23',
            network:'http://22333222',
            username:'',
            pwd:'',
            user:''
        },
        {
            type: '消防',
            netname:'我的',
            network:'http://22333222',
            username:'',
            pwd:'',
            user:''
        },
         {
            type: '环保',
            netname:'23',
            network:'http://22333222',
            username:'',
            pwd:'',
            user:''
        },
        {
            type: '消防',
            netname:'我的',
            network:'http://22333222',
            username:'',
            pwd:'',
            user:''
        },
         {
            type: '安全',
            netname:'23',
            network:'http://22333222',
            username:'	AA333',
            pwd:'',
            user:''
        },
         {
            type: '安全',
            netname:'23',
            network:'http://22333222',
            username:'	AA333',
            pwd:'',
            user:''
        },
        {
            type: 'kity1',
            netname:'我的',
            network:'http://22333222',
            username:'AA333',
            pwd:'AA333',
            user:''
        }
    ],
    total: 30   
})
const sizeChanges = (e:any)=>{
    console.log('分页', e)
    // sizeChange(e)
}
const currentChanges  = (e:number)=>{
    console.log('当前页数分页', e)
    // currentChange(e)
}
const deleteData = (id:number)=>{
    console.log(id)
}
const chooseCurrent = (selection:any)=>{
    if(selection&&selection.length>0){
        console.log(selection[0].value)
    }
 
}
const getDetail = (id:number)=>{
    dialogVisible.value = true
    console.log(id)
}
const getCurren = (item:any) =>{
    console.log(item)
}
</script>
<style lang="scss" scoped>
.gov-hisrecord{
 
}
</style>