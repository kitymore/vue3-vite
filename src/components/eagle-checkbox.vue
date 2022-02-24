
<template>
 <div class="eagleCheckbox">
   <el-checkbox-group v-model="myValue" v-bind="{...attrs}" >
    <el-checkbox v-for="item in optionLists" :key="item.key" :name="item.name" :label="item.label">
     {{item.label}}
    </el-checkbox>
  </el-checkbox-group>

 </div>
</template>
<script setup lang="ts">
import { useAttrs, ref, computed } from 'vue';
// 'change',  TODO
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
      type:  [ Array],
    },
});

const attrs = useAttrs()
const {optionList} = attrs
const optionLists:any = ref(optionList)

// 双向数据修改推荐使用
const myValue = computed({
  get: () => {
    return props.modelValue
  },
  set: (val) => {
    emit('update:modelValue', val)
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