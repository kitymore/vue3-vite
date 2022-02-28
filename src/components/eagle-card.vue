
<template>
 <div class="eagleCard">
   <div class="item" v-for="item in columns" :key="item.key">
    <div class="icon">图标</div>
    <div class="name">{{item.name}}</div>
    <div class="value">{{item.value}}</div>
   </div>
 </div>
</template>
<script setup lang="ts">
import { ref, reactive, useAttrs } from 'vue';
const attrs = useAttrs()
const emit = defineEmits(['choose'])
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
<style lang="scss" scoped>
.eagleCard{
  display: flex;
  align-items: center;
  justify-content: space-between;
   .item{
     border: 1px solid #ccc;
   text-align: center;
  padding: 20px;
   border-radius: 10px;
   display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
    color: #333;
     .value{
       font-size: 30px;
     }

   }
}
</style>