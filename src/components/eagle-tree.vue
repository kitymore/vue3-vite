
<template>
 <div class="eagleTree">
     <!-- :icon="'Delete'" -->
      <el-tree
      :data="dataSource"
      :icon="FolderOpened"
      node-key="id"
      v-bind="{...attrs}"
      default-expand-all
      :highlight-current = "true"
      :expand-on-click-node="true"
      @node-click="handleNodeClick"
    >
    <!-- data TODO-->
      <template #default="{ node,  }"> 
        <span class="custom-tree-node">
          <el-icon  color="#409eff"><user /></el-icon>&nbsp;&nbsp;
          <span>{{ node.label }}</span>
        </span>
      </template>
    </el-tree>
 </div>
</template>
<script setup lang="ts">

import { User , FolderOpened} from '@element-plus/icons-vue'
import {ref, useAttrs} from 'vue'
const emit = defineEmits([ 'choose']);
const attrs = useAttrs()
const props = defineProps({
    colums: {
      type: Array,
      default: ()=>{
          return []
      },
    },
    width: {
      type: [Number, String],
      default: 520,
    }
});
interface Tree {
  id: number
  label: string
  children?: Tree[]
}
const dataSource = ref(props.colums)
const append = (e:any)=>{
    console.log(e)
}
const remove  = (node: Node, data: Tree)=>{
    console.log(node)
}
const handleNodeClick = (data: Tree) => {
    emit('choose', data)
}
</script>
<style lang="scss" scoped>
.eagleTree{
  height: 100%;
}
</style>