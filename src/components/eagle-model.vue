

<template>
<div class="draggerModel">
  <el-dialog
    :model-value="visible"
    v-bind="{ ...attr, ...props }"
    title="Tips"
   
    draggable
    :show-close="false"
    :fullscreen= isfullScreen
    :before-close="handleClose"
  >
    <template #title>
      <div class="titleWrap">
         <slot name="title">{{ $attrs.title || '标题' }}</slot>
        <div class="title">
          <el-icon  :size="20" @click="fullScreenFun"><full-screen /></el-icon>&nbsp;&nbsp;
          <el-icon  :size="20" @click="closeModel"><close /></el-icon>
        </div>
      </div>
      
    </template>
    <el-scrollbar :max-height="'70vh'">
      <slot name="body"></slot>
    </el-scrollbar>
   
    <template #footer>
      <span class="dialog-footer">
         <slot name="footer"></slot>
      </span>
    </template>
  </el-dialog>
</div>
</template>
<script setup lang="ts">
import { ref, useAttrs,} from 'vue'
// import { useVModel } from '@vueuse/core';
import { FullScreen, Close} from '@element-plus/icons-vue'
const emit = defineEmits(['update:visible', 'update:fullscreen', 'ok', 'cancel']);
const attr = useAttrs()
const isfullScreen = ref(false)

//const visibleModel = useVModel(props, 'visible');

const props = defineProps({
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: 520,
    }
  });
const fullScreenFun = ()=>{
  isfullScreen.value = !isfullScreen.value
}
const visibleModel = ref(props.visible)
const closeModel = ()=>{
   visibleModel.value = true;
   emit('update:visible', false);
   console.log( visibleModel.value )
}
const handleClose = ()=>{
  console.log('关闭触发函数')
}
</script>
<style lang="scss" scoped>
.draggerModel{
  .titleWrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title{
      cursor: pointer;
    }
  }
}
</style>