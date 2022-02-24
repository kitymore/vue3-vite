
<template>
 <div class="eaglePDF">
 <!-- '/《安全生产法》修正案全面解读.pdf' -->
  <el-icon v-bind="{...attrs}"><tickets /></el-icon>&nbsp;
  <a :href="'/pdf/web/viewer.html?file='+ props.url" target="_black"> {{props.name}}</a>
 </div>
</template>
<script setup lang="ts">
import { Tickets } from '@element-plus/icons-vue'
import { useAttrs } from 'vue';
const attrs = useAttrs()
const props = defineProps({
  name: {
    type: String,
    default: 'pdf',
  },
  url: {
    type: String,
    default: '',
  }
});
</script>
<style lang="scss" scoped>
.eaglePDF{
 display: inline-block;
 display: flex;
 align-items: center;
 justify-content: start;
}
</style>