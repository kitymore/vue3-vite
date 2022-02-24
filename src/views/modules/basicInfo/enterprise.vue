<template>
<EagleContainer>
  <EagleContent :title="'单独使用表单组件测试'">
    <div class="chinese">中文国家化测试： {{ $t("msg") }} </div>
     <EagleSelect :optionList="selectList" @myChange="getChooseItem"></EagleSelect>
     <EagleCheckbox v-model="checkboxList" :optionList="selectList"></EagleCheckbox>
  </EagleContent>
  <!-- 最新使用 -->
  <EagleContent :title="'根据json文件动态生成表单控件测试'">
     <EagleForm ref="formControl" :formModel="form" :jsonForm="formColSort" v-model="form" :rules="ruleslist" @save="saveData">
         <template #areachoost>
          <el-input v-model="form.test" placeholder="请输入内容"></el-input>
        </template>
     </EagleForm> 
  </EagleContent>
  <EagleContent :title="'PDF集成测试'">
     <EaglePdf color="#409EFC" :name="'安全检测pdf预览测试'" :url="'/《安全生产法》修正案全面解读.pdf'"></EaglePdf>
     
  </EagleContent>
  <EagleContent :title="'时间处理库测试'">
    <div class="dateTest">时间插件函数封装测试&nbsp;&nbsp; {{dateTest}}</div>
  </EagleContent>
  <EagleContent :title="'table+page集成组件测试'">
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
  </EagleContent>


  
</EagleContainer>
  
</template>
<script setup lang="ts">
// ref声明响应式数据，用于声明基本数据类型
 // reactive声明响应式数据，用于声明引用数据类型
 // 使用toRefs解构
import {ref, reactive, shallowRef, computed,  onMounted, onActivated, onUpdated, onErrorCaptured} from 'vue';
import EagleContainer from '@/components/eagle-container.vue';
import EagleTable from '@/components/eagle-table.vue';
import EaglePdf from '@/components/eagle-pdf.vue';
import EagleContent from '@/components/eagle-content.vue';
import EagleForm from '@/components/eagle-form.vue';
import EagleSelect from '@/components/eagle-select.vue';
import EagleCheckbox from '@/components/eagle-checkbox.vue';
import EagleRadio from '@/components/eagle-radio.vue';
import { dateUtil } from '@/utils/dateUtil';
import { ElInput, ElDatePicker} from 'element-plus'
import useTable from '@/hooks/table'
import {editUser, deleteUrl, searchUrl} from '@/api/index'
const formControl:any = ref(null)
const checkboxList = ref(['男'])
const getChooseItem = (e:any)=>{
  console.log(e)
}
const formColSort = reactive([
   {  
        "controlId": 120,
        "colName": "time",
        "label": "时间",
         "placeholder": "请选择时间",
        "controlType": shallowRef(ElDatePicker),
        "defaultValue": true,
        "isClear": false,
        "clearable": true,
        "title": "",
        "format":'YYYY-MM-DD',
        "value-format":'YYYY-MM-DD',
        "colCount": 1
  },
   {  
        "controlId": 107,
        "colName": "city",
        "label": "城市",
         "placeholder": "请选择城市",
        "controlType": shallowRef(EagleSelect),
        "defaultValue": true,
        "isClear": false,
        "clearable": true,
        "title": "",
        "optionList": [
          {
          "value": 1,
          "label": "北京"
          },
           {
          "value": 2,
          "label": "上海"
          },
        ],
        "colCount": 1
  },
   {  
        "controlId": 107,
        "colName": "gender",
        "label": "性别",
         "placeholder": "请选择性别",
        "controlType": shallowRef(EagleRadio),
        "defaultValue": true,
        "isClear": false,
        "clearable": true,
        "title": "",
        "optionList": [
          {
          "value": 1,
          "label": "男"
          },
           {
          "value": 2,
          "label": "女"
          },
        ],
        "colCount": 1
  },
   {  
        "controlId": 107,
        "colName": "like",
        "label": "爱好",
         "placeholder": "请勾选爱好",
        "controlType": shallowRef(EagleCheckbox) ,
        "defaultValue": true,
        "isClear": false,
        "clearable": true,
        "title": "",
        "optionList": [
          {
          "value": 1,
          "label": "篮球"
          },
           {
          "value": 2,
          "label": "足球"
          },
           {
          "value": 2,
          "label": "羽毛球"
          },
        ],
        "colCount": 1
  },
  {
     "controlId": 116,
     "isSlot":true,
     "slotName":'areachoost',
      "colName": "test",
      "label": "input输入表单",
      "controlType": shallowRef(ElInput) ,
      "isClear": true,
      "defaultValue": "",
      "disabled": true,
      "required": true,
      "readonly": false,
      "class": "",
      "min": 1,
      "max": 100,
      "step": 1,
      "placeholder": "请输入最大字符数",
      "title": "最大字符数",
      "autocomplete": "on"
  },
  {
     "controlId": 117,
      "colName": 'desc',
      "label": "描述",
      "controlType":shallowRef(ElInput),
      "isClear": false,
      "defaultValue": "",
      "disabled": false,
      "required": true,
      "readonly": false,
      "type":'textarea',
      "class": "",
      "min": 1,
      "max": 100,
      "step": 1,
      "placeholder": "请输入描述信息",
      "title": "最大字符数",
      "autocomplete": "on"
  },
 
])
const form = reactive({ 
  test: '',
  desc: '',
  gender: '',
  city:''
})
const ruleslist:any = reactive({
  test:[
     {
      required: true,
      message: '请输入',
      trigger: 'blur',
    }
  ],
  gender:[
     {
      required: true,
      message: '请选择',
      trigger: 'blur',
    }
  ]
})
const editableInfo = (id: number)=>{
  console.log(id)
}
const saveData = (e:any)=>{
console.log(e, form)
}
const dateTest = dateUtil(new Date()).format('YYYY-MM-DD')
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
const selectList = [
  {
    "value": 1,
    "label": "男"
    },
    {
    "value": 2,
    "label": "女"
  },
]
const params = {
    searchUrl: searchUrl,
    deleteUrl:deleteUrl,
    searchData: tableState.searchParams
}
const {searchState, dataState, getTableList,sizeChange, currentChange, deletaItem, } = useTable({...params})
const chooseCurrent = (selection:any)=>{
    if(selection&&selection.length>0){
        console.log(selection[0].value)
    }
 
}
const sizeChanges = (e:any)=>{
    console.log('分页', e)
    sizeChange(e)
}
const currentChanges  = (e:number)=>{
    console.log('当前页数分页', e)
    currentChange(e)
}
const deleteData = (id:number)=>{
    console.log(id)
}
</script>
<style scoped lang="scss">
.show-certificat-img{
}
.table-operation{
  .btns{
     cursor: pointer;
  }
}
</style>