<script setup lang="ts">
import MySalary from "@/presenter/MySalary";

const { username, salary, addSalary } = MySalary()
</script>

<template>
  <div>
    <div>姓名：<input v-model="username"/> {{ username }}</div>
    <div>薪水：<input type="number" v-model="salary"/> {{ salary }}</div>
    <button @click="addSalary">增加薪水</button>
  </div>
</template>

<style scoped>
</style>
