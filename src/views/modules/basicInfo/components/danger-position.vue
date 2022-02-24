
<template>
 <div class="dangerPosition">
  <EagleTree :colums="dataSource" @choose="getCurrentItem"></EagleTree>
 </div>
</template>
<script setup lang="ts">
import EagleTree from '@/components/eagle-tree.vue';
import {ref} from 'vue'
const dataSource = ref([
  {
    id: 1,
    label: '开发部',
    children: [
      {
        id: 4,
        label: '后端开发',
        children: [
          {
            id: 9,
            label: '前端开发',
          },
          {
            id: 10,
            label: '前端开发1',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: '销售部门',
    children: [
      {
        id: 5,
        label: '售前销售',
      },
      {
        id: 6,
        label: '售后销售',
      },
    ],
  },
  {
    id: 3,
    label: '咨询部',
    children: [
      {
        id: 7,
        label: '咨询部1',
      },
      {
        id: 8,
        label: '售前咨询',
      },
    ],
  },
])
const getCurrentItem = (e:any)=>{
 console.log(e)
}
</script>
<style lang="scss" scoped>
.dangerPosition{
    width: 200px;
    border-right: 1px solid #ccc;
    font-size: 14px;
    color: #333;
}
</style>