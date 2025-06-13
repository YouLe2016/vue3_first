<script setup lang="ts">
import {SalaryInfoBean} from "@/bean/SalaryInfoBean";

// defineProps([
//     "salaryInfo"
// ])
defineProps<{salaryInfo: SalaryInfoBean}>()
</script>

<script lang="ts">
// 不写也可以，默认文件名
export default {
  name: "MySalaryInfo"
}
</script>

<template>
  <div>姓名：<input v-model="salaryInfo.username"/> {{ salaryInfo.username }}</div>
  <div>薪水：<input type="number" v-model="salaryInfo.salary"/> {{ salaryInfo.salary }}</div>
</template>

<style scoped>
</style>