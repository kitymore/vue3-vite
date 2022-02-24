
<template>
 <div class="arcmanage">
  <EagleSearch :title="'文件类型'" :columns="lists"></EagleSearch>
  <EagleSearch :title="'筛选条件'" >
    <div class="searchCon">
        <EagleInputBtn @search="searchList"></EagleInputBtn>
    </div>
  </EagleSearch>
    <el-divider></el-divider>
   <EagleTable :columns="tableState.columns" :tableData="tableState.tableData" :pageTotal="tableState.total" @select="chooseCurrent" @size-change="sizeChanges" @current-change="currentChanges">
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
 </div>
</template>
<script setup lang="ts">
import {ref, reactive} from 'vue'
import EagleSearch from '@/components/eagle-search.vue';
import EagleInputBtn from '@/components/eagle-input-btn.vue';
import EagleTable from '@/components/eagle-table.vue';
import useTable from '@/hooks/table'
import {editUser, deleteUrl, searchUrl} from '@/api/index'
const searchVlue = ref('')
const tableState = reactive({
    searchParams: {
        typeName: '',
        typeCode:''
    },
    columns: [
        {},
        {prop: 'name', label: 'name',width:180, sortable: true},
        {prop: 'value', label: 'value'},
        {prop: 'address', label: 'address'},
        {label: '操作', slot:'operate'}
    ],
    tableData:[
        {
            name: 'kity1',
            value:'23'
        },
        {
            name: 'kity2',
            value:'23'
        },
         {
            name: 'kity1',
            value:'23'
        },
        {
            name: 'kity2',
            value:'23'
        }
    ],
    total: 30   
})
const params = {
    searchUrl: searchUrl,
    deleteUrl:deleteUrl,
    searchData: tableState.searchParams
}
const {searchState, dataState, getTableList,sizeChange, currentChange, deletaItem, } = useTable({...params})
const sizeChanges = (e:any)=>{
    console.log('分页', e)
    sizeChange(e)
}
const chooseCurrent = (selection:any)=>{
    if(selection&&selection.length>0){
        console.log(selection[0].value)
    }
 
}
const editableInfo = (id: number)=>{
  console.log(id)
}
const currentChanges  = (e:number)=>{
    console.log('当前页数分页', e)
    currentChange(e)
}
const deleteData = (id:number)=>{
    console.log(id)
}
const lists = reactive([
     {value: '', label: '全部'},
     {value: 'type', label: '类别'},
    {value: '百度', label: '网站名称'},
    {value: 'http://22333222', label: '网址'},
    {value: '网红', label: '用户名'},
    {value: '123456', label: '密码'},
    {value: '网', label: '修改人'},
    {value: '编辑', label: '操作', },
])
const searchList = (e:any)=>{
 console.log(323)
}
</script>
<style lang="scss" scoped>
.arcmanage{
    .searchCon{
        display: flex;
        align-items: center;
        justify-content: start;
    }
}
</style>