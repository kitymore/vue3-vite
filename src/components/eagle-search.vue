
<template>
 <div class="eagleSearch">
    <div class="title">{{title}}&nbsp;: </div>
    <div class="list" v-if="columns&& columns.length>0">
        <div class="item"  v-for="(item, index) in columns" :key="'form_'+index" :class="{ active: isActive===item.value }" @click="chooseItem(item)">{{item.label}}</div>
    </div>
    <div class="soltCon" v-else>
        <slot></slot>
    </div>
 </div>
</template>
<script setup lang="ts">
import { useAttrs, ref, computed } from 'vue';
// 'change',  TODO
const emit = defineEmits(['update:modelValue', 'choose']);

const props = defineProps({
    columns:{
        type:Array,
        default:()=>[]//表格列
    },
    title:{
        type:String,

    },
    modelValue: {
      type:  [ Array],
    },
});
const columns:any = ref(props.columns)
const attrs = useAttrs()
const isActive = ref('')
const chooseItem = (item:any)=>{
    console.log(item)
    isActive.value = item.value
    emit('choose', item)
}
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
.eagleSearch{
    display: flex;
    align-items: baseline;
    .title{
        color: #333;
        font-weight: bold;
        margin-right: 20px;
        font-size: 14px;
       white-space:nowrap;
        
    }
    .list{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        color: #333;
        font-size: 12px;
       .item{
           margin: 10px;
           cursor: pointer;
           padding: 4px 6px;
       }
    }
    .active{
        background: #20A0FF;
        color: #fff;
    }
  
}
</style>