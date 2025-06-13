<script setup lang="ts">
import MySalaryInfo from "@/components/MySalaryInfo.vue";
import {reactive, ref} from "vue";

const salaryInfo = reactive({
  username: "张三",
  salary: 1000
})

function showRes() {
  console.log(salaryInfo)
  console.log(salaryInfo.username)
  console.log(salaryInfo.salary)
}

function addSalary() {
  salaryInfo.salary += 1000
}

</script>

<template>
  <div>
    <MySalaryInfo :salary-info="salaryInfo"/>
    <button @click="addSalary">增加薪水</button>
    <button @click="showRes">查看薪水</button> {{ salaryInfo }}
  </div>
</template>

<style scoped>
</style>
