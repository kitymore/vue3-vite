
<template>
 <EagleContainer>
   <!-- type="border-card" -->
      <EagleTabs  :columns="col" v-model="activeName"  @update:model-value="updateCurrent"></EagleTabs>
 </EagleContainer>
</template>
<script setup lang="ts">
import EagleContainer from '@/components/eagle-container.vue';
import EagleTabs from '@/components/eagle-tabs.vue';
import EagleTree from '@/components/eagle-tree.vue';
import GovHisrecord from './components/gov-hisrecord.vue';
import DangerPosition from './components/danger-position.vue';
import {ref, shallowRef} from 'vue'

const col = [
    {
    label:'企业政府信息申报网站',
    name:'1',
     componentType:shallowRef(GovHisrecord)
   
  },
   {
    label:'公共网站',
    name:'2',
    componentType:shallowRef(DangerPosition)
  },
   {
    label:'历史记录',
    name:'3',
    componentType:shallowRef(GovHisrecord)
  }
]
const activeName = ref('1')
const updateCurrent = (val: any)=>{
  activeName.value = val
  console.log(val)
}
</script>
<style lang="scss" scoped>
.basicGovernment{
  padding: 10px;
  height: 100%;
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