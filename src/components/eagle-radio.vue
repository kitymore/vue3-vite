
<template>
 <div class="eagleRadio">
   <el-radio-group v-model="myValue" v-bind="{...attrs}">
    <el-radio  v-for="item in optionLists" :key="item.key" :name="item.name" :label="item.label">{{item.label}}</el-radio>
  </el-radio-group>
 </div>
</template>
<script setup lang="ts">
import { useAttrs, ref, computed } from 'vue';
// 'change',  TODO
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    modelValue: {
      type:  [String],
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
.eagleRadio{
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