import { onMounted, reactive } from 'vue'
import {getTableLists, deleteItem} from '@/api/system/common'
/**
export interface HttpListQuery {
  pageNo: number
  pageSize: number
  [key: string]: any
}
export interface IdParam {
  id: number
}
export interface HttpResponse {
  code: number
  status: number
  statusText: string
  result: any
}
**/
 //这几个是统一封装的方法

//import { successMessage } from "@/utils/message";//消息提示
interface Params{
  searchUrl: string //搜索api地址
  deleteUrl: string //删除的api地址
  searchData: any //搜索的数据
}
const useTable = (options:Params) => {
  const {searchUrl, deleteUrl, searchData} = options

 //搜索数据滴响应
  const searchState = reactive({ 
    ...searchData,
    pageNo: 1,
    pageSize: 10,
  })
 //返回表格列表数据滴响应
  const dataState = reactive({
    tableData: [],
    total:0
  })

//获取表格数据
  const getTableList = async (Params:any) => { 
      console.log(Params)
     const result:any = await getTableLists(searchUrl, Params)
      if(result.code === 200) {
        dataState.tableData = result.records
        dataState.total = result.total
      }
  }
//引入生命周期，执行搜索
  onMounted(()=>{
    getTableList({...searchState})
  })

  //删除某一行数据
  const deletaItem = async (deleteId:any) => {
    const result:any = await deleteItem(deleteUrl,deleteId)
    if(result.code === 200) {
     // successMessage('删除成功')
      getTableList(searchState)
    }
  }
//调整每一页多少行数据
  const sizeChange = (val:number) => {
    console.log('hook 调用')
    searchState.pageNo = 1;
    searchState.pageSize = val;
    getTableList(searchState)
  }
//翻页的
  const currentChange = (val:number) =>{
    searchState.pageNo = val;
    getTableList(searchState)
  }


  return {
    searchState,
    dataState,
    getTableList,
    deletaItem,
    sizeChange,
    currentChange
  }


}

export default useTable;
