
<template>
 <div class="eagleinputbtn">
    <el-input v-model="searchVlue" :placeholder="props.placeholder" class="inputWrap"/>
    <el-button type="primary" :icon="Search" @click="search">{{props.text}}</el-button>
 </div>
</template>
<script setup lang="ts">
import {Search} from '@element-plus/icons-vue'
import { ref } from 'vue';
const emit = defineEmits(['search', ]);
const searchVlue = ref('')
const props = defineProps({
    placeholder: {
      type: String,
      default: '请输入',
    },
    text: {
      type: String,
      default: '搜索',
    }
  });
const search = ()=>{
 emit('search', searchVlue.value)
}
</script>
<style lang="scss" scoped>
.eagleinputbtn{
  display: flex;
  align-items: center;
  justify-content: start;
  .inputWrap{
    margin-right: 10px;
  }
  
}
</style>