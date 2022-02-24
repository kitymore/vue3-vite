<template>
<EagleContainer>
 
  <section class="main">
    <EagleTitle :title="'测试标题组件'"></EagleTitle>
    
    <el-button @click="mockFunction">本地mock文件测试：</el-button>
       <el-button  @click="dialogVisible = true"
          >开启可拖拽模态窗测试
        </el-button>
        <div>store测试：{{store.getName}}</div>
        <div class="storeTest">
            <el-button type="text" @click="settStore">修改store里的值</el-button>
        </div>
        <el-button @click="increment">
            {{ state.count }}
        </el-button>
  <el-button>
    {{ publishedBooksMessage }}
  </el-button>
  <EagleModel v-model:visible="dialogVisible" @open="testOpen" @close="closeModel" :top="'20vh'">
    <template #title>
       测试可拖拽弹窗
    </template>
     <template #body>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
    </template>
    <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确定</el-button
        >
    </template>
  </EagleModel>
    </section>
  <!-- 最新使用 -->
  <EagleContent :title="'最近使用'">
    <el-descriptions
    title="Vertical list with border"
    direction="vertical"
    :column="4"
   
    border
  >
    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>
  </EagleContent>
   <EagleContent :title="'最近使用'">
    <el-descriptions
    title="Vertical list with border"
    direction="vertical"
    :column="4"
   
    border
  >
    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>
  </EagleContent>
   <EagleContent :title="'最近使用'">
    <el-descriptions
    title="Vertical list with border"
    direction="vertical"
    :column="4"
   
    border
  >
    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>
  </EagleContent>
  <EagleContent :title="'隐患数据统计'">
    <template #btns>
         <el-button type="text">按钮测试</el-button>
    </template>
    <el-descriptions title="Customized style list" :column="3" border>
    <el-descriptions-item
      label="Username"
      label-align="right"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      width="150px"
      >kooriookami</el-descriptions-item
    >
    <el-descriptions-item label="Telephone" label-align="right" align="center"
      >18100000000</el-descriptions-item
    >
    <el-descriptions-item label="Place" label-align="right" align="center"
      >Suzhou</el-descriptions-item
    >
    <el-descriptions-item label="Remarks" label-align="right" align="center">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address" label-align="right" align="center"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
      Province</el-descriptions-item
    >
  </el-descriptions>
  </EagleContent>
 
  
  
</EagleContainer>
  
</template>
<script setup lang="ts">
// ref声明响应式数据，用于声明基本数据类型
 // reactive声明响应式数据，用于声明引用数据类型
 // 使用toRefs解构
import {ref, reactive, shallowRef, computed,  onMounted, onActivated, onUpdated, onErrorCaptured} from 'vue'
import { useInfoStore,  } from '@/stores/user'
import {useLanguageStore} from '@/stores/language'
import EagleModel from '@/components/eagle-model.vue'
import EagleContainer from '@/components/eagle-container.vue'
import EagleTitle from '@/components/eagle-title.vue'
import EagleContent from '@/components/eagle-content.vue'

//import EagleTable from '@/components/eagle-table.vue'
// import EagleTabs from '@/components/eagle-tabs.vue'
// import LoginVue from '@/views/Login.vue'
import { mockrequest } from '@/api/login'
const local = useLanguageStore()
const activeName = ref('1')
const mockFunction = ()=>{
  mockrequest().then((res)=>{
    console.log('mock', res)
  })
}
const updateCurrent = (val: any)=>{
  activeName.value = val
  console.log(val)
}
const col = reactive([
  {
    label:'建筑物信息',
    name:'1',
    componentType:shallowRef() //LoginVue
  },
   {
    label:'历史记录',
    name:'2',
    componentType:shallowRef(EagleTitle)
  },
   {
    label:'测试3',
    name:'3',
    componentType:shallowRef(EagleContainer)
  }
])
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const dialogVisible = ref(false)
const store = useInfoStore()
const state = reactive({ 
count: 0,
name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
const publishedBooksMessage = computed(() => {
  return state.books.length > 0 ? 'Yes' : 'No'
})
console.log(publishedBooksMessage)
const increment=()=> {
  state.count++
}
const testOpen = ()=>{
  console.log('测试模态窗时间有没有特穿')
}
const closeModel = ()=>{
  dialogVisible.value= false
}
onMounted(() => {
 // 组件的第一次渲染后调用，该元素现在可用，允许直接DOM访问
  console.log('onMounted')
});
onUpdated(() => {
 // 组件的第一次渲染后调用，该元素现在可用，允许直接DOM访问
  console.log('onUpdated')
});
onErrorCaptured(() => {
 // 组件的第一次渲染后调用，该元素现在可用，允许直接DOM访问
  console.log('onErrorCaptured')
});
onActivated(() => {
  console.log('onActivated')
});

const settStore = ()=>{
 // store.$patch({ count: counter.count + 1 })
 store.setName('tick')
}
</script>
<style scoped lang="scss">
.wrapBg{
  background: #fff;
  margin-bottom: 10px;
  padding: 10px;
}
.main{
  background: #fff;
  padding: 10px;
  margin-top: 10px;
}
.dashboard{
    background: #fff;
    height: 100vh;
    
}
</style>