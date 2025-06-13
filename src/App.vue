<script setup lang="ts">
import MySalaryInfo from "@/components/MySalaryInfo.vue";
import {ref} from "vue";

const mySalaryInfo = ref()

function showRes() {
  console.log(mySalaryInfo)
  console.log(mySalaryInfo.value)
  console.log(mySalaryInfo.value.username)
  console.log(mySalaryInfo.value.salary)
}

</script>

<template>
  <div>
    <MySalaryInfo ref="mySalaryInfo"/>
<!--    <button @click="addSalary">增加薪水</button>-->
    <button @click="showRes">查看薪水</button> {{ mySalaryInfo?.username }}
  </div>
</template>

<style scoped>
</style>
