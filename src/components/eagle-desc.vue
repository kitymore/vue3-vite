

<template>
   <div class="eagleDesc" >
        <el-descriptions
        v-bind="{...attrs}"
           
             border
        >
            <template #extra>
                 <slot name="extra"></slot>
            </template>
            <template #title>
                 <slot name="title"></slot>
            </template>
            <template  v-for="(item, index) in columns" :key="'desc'+index">
                <el-descriptions-item :label="item.label" v-if="!item.isSlot">{{item.value}}</el-descriptions-item>
                <el-descriptions-item :label="item.label" v-else> <slot></slot></el-descriptions-item>
            </template>
        </el-descriptions>
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

const columns:any = ref(props.columns)
</script>
<style scoped lang="scss">
.eagleDesc {
   
}



</style>
