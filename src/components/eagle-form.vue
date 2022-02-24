
<template>
 <div class="eagleForm">
  <el-form  
      :model="formModel"
      :rules="fomrRules"
      ref="formControl"
      :inline="false"
      class="demo-form-inline"
      v-bind="{...attrs}"
      label-suffix="："
      label-width="130px"
      >
     <el-row>
        <!--不循环row，直接循环col，放不下会自动往下换行。-->
        <el-col
          v-for="(item, index) in formColSort"
          :key="'form_'+index"
        >
          <el-form-item
            :label="item.label"
            :prop="item.colName"
          >
            <!--判断要不要加载插槽-->
            <template v-if="item.isSlot">
               <div class="formChildInput" >
                  <slot :name="item.slotName">父组件没有设置插槽</slot>
               </div>
            </template>
            <!--表单item组件，采用动态组件的方式-->
            <div class="formChildInput" v-else>
               <component
                :is="item.controlType"
                v-model="formModel[item.colName]"
                v-bind="{...item}"
               >
              </component>
            </div>
          </el-form-item>
        </el-col>
        <el-form-item>
            <el-button type="primary" @click="submitForm(formControl)">提交</el-button>
            <el-button @click="resetForm(formControl)">重置</el-button>
        </el-form-item>
      </el-row>
   
  </el-form>
 </div>
</template>
<script setup lang="ts">
import {ref, reactive, useAttrs} from 'vue'
//import formJson from '@/assets/json/meta-form.json'
// import EagleCard  from '@/components/eagle-card.vue'
const emit = defineEmits(['save', 'reset']);
const attrs = useAttrs()

const props = defineProps({
    formModel: {
      type: Object,
      default: ()=>{ return {}},
    },
    rules: {
      type: Array,
      default: ()=> [],
    },
    jsonForm:{
      type: Array,
      default: ()=> [],
    },
  });
const formModel:any = ref(props.formModel)
const fomrRules:any = ref(props.rules)
const formColSort:any = reactive(props.jsonForm)
const formControl = ref(null)
const resetForm = (formEl:any)=>{
  if (!formEl) return
  formEl.resetFields()
}
const submitForm = (formEl:any)=>{
  if (!formEl) return
  formEl.validate((valid:any) => {
    if (valid) {
      console.log('submit!')
       emit('save', true);
    } else {
      console.log('error submit!')
       emit('save', false);
      return false
    }
  })
}
</script>
<style lang="scss" scoped>
.eagleForm{
  padding: 10px;
  height: 100%;
  .crumbs{
    margin-bottom: 10px;
    display: flex;
    align-content: center;
  }
  .bodyConteing{
  }
  .titleWrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>