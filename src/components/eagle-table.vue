<template>
 <div class="eagleTable">
   <el-table ref="TableComponents"
      :header-cell-style="{background:'#F7F7F7',color:'#333'}"
      :size="size" :border="border" :data="props.tableData"
      :tree-props="props.treeProps"
       v-bind="{ ...attr }"
      :fit="props.fit"
      :max-height="maxHeight"
      :row-key="rowKey"
      :highlight-current-row="true"
      :automatic-dropdown="false"
      @selection-change="handleSelectionChange"
      >
        <template v-for="item in columns" :key="item.prop">
          <slot :name="item.slot" v-if="item.slot&&item[dataKey.label]"></slot>
          <el-table-column  :prop="item[dataKey.prop]" :sortable="item.sortable?item.sortable: false " show-overflow-tooltip :label="item[dataKey.label]" v-if="item[dataKey.label]&&!item.slot" :formatter="item.formatter" :min-width="item.width"></el-table-column>
          <el-table-column  type="selection" width="50" v-if="!item[dataKey.label]&&!item.slot" :selectable="checkSelectable"></el-table-column>
        </template>
        <slot name="operation"></slot>
    </el-table>
    <el-pagination
      v-if="pageIsShow&&pageTotal>10" class="pagination"
       background
      :size="size" :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next,"
      :total="pageTotal" :current-page="currentPage"
      @size-change="handleSizeChange" @current-change="handleCurrentChange"
    >
    </el-pagination>
 </div>
</template>
<script setup lang="ts">
import {useAttrs, ref} from 'vue'
const attr = useAttrs()
const currentPage = ref(1)
const emit = defineEmits(['selection-change', 'size-change', 'current-change', 'get-row-info']);
const props = defineProps({
    loading:{
      type:Boolean,
      default:true
    },
    tableData:{
      type:Array,
      default:()=>[] //表格数据
    },
    columns:{
      type:Array,
      default:()=>[]//表格列
    },
    pageIsShow:{
      type:Boolean,
      default:true //是否显示分页
    },
  
    pageSize:{
        type:Number,
        default:()=>10 //默认每页条数
    },
    pageTotal:{
        type:Number,
        default:()=>0 //总条数
    },
    border:{
        type:Boolean,
        default:true //默认有边框
    },
    stripe:{
        type:Boolean,
        default:true //是否为斑马纹 table(默认有)
    },
    fit:{
        type:Boolean,
        default:true //默认自动撑开
    },
    size:{
        type:String,
        default:'small'
    },
    treeProps:{
        type:Object,
        default:()=> {return {}}
    },
    rowKey:{
        type:String||Function,default:()=>''
    },
    dataKey:{
        type:Object,
        default:()=>{
            return {label:'label',prop:'prop'}
        }
    },
    // currentPage:{
    //     type:Number,
    //     default:()=>1 //当前页码
    // },
    height:{
        type:String,
        default:'55px' 
    },
    maxHeight:{
      type:Number,
      default:()=> {
        return document.body.offsetHeight-210
      }
    }
  });
const columns:any = ref(props.columns)
const  pageSizes = ref<number[]>([10, 15, 20,30,50,100]) 
const handleSelectionChange = (val: any) => emit('selection-change', val);
const handleSizeChange = (val: number) => emit('size-change', val);
const handleCurrentChange = (val: number) => {
  currentPage.value = val
  emit('current-change', val)
};
const handleClickActiveLink = ($event: MouseEvent, row: any) => emit('get-row-info', $event, row);
const checkSelectable = (row: any) => row.name !== 'None';

</script>
<style lang="scss" scoped>
.eagleTable{
 
  .pagination{
    margin-top: 10px;
  }
  .crumbs{
    margin-bottom: 10px;
    display: flex;
    align-content: center;
  }
  .bodyConteing{
  }
  .titleWrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
