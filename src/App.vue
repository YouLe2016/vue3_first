<script setup lang="ts">
import {ref} from "vue";

let username = ref("王天一")
let salary = ref(15000)

function addSalary() {
  salary.value += 2000
  console.log(`salary: ${salary.value}`)
}
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
