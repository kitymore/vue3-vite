

<template>
   <div class="eagleTabs" >
       <el-tabs v-model="propsMessage" v-bind="{...attrs}" class="demo-tabs" @tabclick="handleClick">
        <template v-for="item in componentsList" :key="item.name">
          <el-tab-pane :label="item.label" :name="item.name">
             <component
                :is="item.componentType"
                v-bind="{...item}"
               >
              </component>
          </el-tab-pane>   
        </template>
    </el-tabs>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, useAttrs  } from "vue";
const attrs = useAttrs()
const props = defineProps({
    columns:{
        type:Array,
        default:()=>[]//表格列
    },
    modelValue:{
        type:[String, Number]
    }
});
const componentsList:any = ref(props.columns)
const emit = defineEmits(['update:modelValue']);

const handleClick = (tab: string, event: Event) => {
  console.log(tab, event)
}
const propsMessage = computed({
  get: () => {
    return props.modelValue
  },
  set: (val) => {
    emit('update:modelValue', val)
  }
})

</script>
<style scoped lang="scss">
.eagleTabs {
   
}



</style>
