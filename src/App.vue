<script setup lang="ts">
import MySalary from "@/presenter/MySalary";

const { salaryInfo, addSalary } = MySalary()
</script>

<template>
  <div>
    <div>姓名：<input v-model="salaryInfo.username"/> {{ salaryInfo.username }}</div>
    <div>薪水：<input type="number" v-model="salaryInfo.salary"/> {{ salaryInfo.salary }}</div>
    <button @click="addSalary">增加薪水</button>
  </div>
</template>

<style scoped>
</style>
