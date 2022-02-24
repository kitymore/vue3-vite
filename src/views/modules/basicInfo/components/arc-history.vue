
<template>
 <div class="dangerPosition">
  历史记录
 </div>
</template>
<script setup lang="ts">

import {ref} from 'vue'
const record = ref(null)
console.log(record.value)
const getCurrentItem = (e:any)=>{
 console.log(e)
}
</script>
<style lang="scss" scoped>

</style>