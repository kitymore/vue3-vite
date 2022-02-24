
<template>
 <div class="eagleSelect">
  <el-select
    v-model="modelValue"
    @change="selfSubmit"
    v-bind="{...attrs}"
  >
    <el-option
      v-for="item in optionLists"
      :key="'select' + controlId + item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

 </div>
</template>
<script setup lang="ts">
import { useAttrs, ref, computed } from 'vue';
// 'change',  TODO
const emit = defineEmits(['update:value', 'myChange', 'change', 'input']);
const props = defineProps({
    modelValue: {
      type:  [String, Number, Array],
    },
});
const modelValue = ref(props.modelValue)
const attrs = useAttrs()
const {optionList, controlId} = attrs
const optionLists:any = ref(optionList)
const selfSubmit = (e:any)=>{
    // myValue = e
    emit('myChange', e);
}
// 双向数据修改推荐使用
const myValue = computed({
  get: () => {
    return props.modelValue
  },
  set: (val) => {
    emit('update:value', val)
  }
})



</script>
<style lang="scss" scoped>
.eagleSelect{
  
  .crumbs{
    margin-bottom: 10px;
    display: flex;
    align-content: center;
  }
  .titleWrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>