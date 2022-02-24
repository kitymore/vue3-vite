
<template>
 <div class="eagleTitle">
   <div class="title">
    <span>{{props.title}}</span>
   </div>
    <div class="btns">
       <slot name="btns"></slot>
    </div>
 </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: {
      type: String,
      default: '标题',
    },
  });
</script>
<style lang="scss" scoped>
.eagleTitle{
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 10px 0;
  .title:before {
    content: '';
    width: 5px;
    height: 15px;
    display: inline-block;
    background-color: #2b89ff;
    margin-right: 6px;
    margin-bottom: -2px;
  }
}
</style>