
<template>
 <div class="eagleContent">
  <div class="crumbs">
      <EagleTitle :title="props.title">
        <template #btns>
           <slot name="btns"></slot>
        </template>
      </EagleTitle>
    </div>
    <div class="bodyConteing">
       <slot ></slot>
    </div>
 </div>
</template>
<script setup lang="ts">
import EagleTitle from '@/components/eagle-title.vue'
const props = defineProps({
    title: {
      type: String,
      default: '标题',
    },
  });
</script>
<style lang="scss" scoped>
.eagleContent{
  padding: 10px;
  height: 100%;
  background: #fff;
  margin-bottom: 10px;
}
</style>