<script setup lang="ts">
import MySalary from "@/presenter/MySalary";

const {
  username,
  salary
} = MySalary()

defineExpose({
  username,
  salary
})
</script>

<script lang="ts">
// 不写也可以，默认文件名
export default {
  name: "MySalaryInfo"
}
</script>

<template>
  <div>姓名：<input v-model="username"/> {{ username }}</div>
  <div>薪水：<input type="number" v-model="salary"/> {{ salary }}</div>
</template>

<style scoped>

</style>