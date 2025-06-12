<script lang="ts">
import {ref} from "vue";

export default {
  setup() {
    let username = ref("王天一")
    let salary = ref(15000)

    function addSalary() {
      salary.value += 1000
      console.log(`salary: ${salary.value}`)
    }

    return {
      username,
      salary,
      addSalary
    }
  }
}
</script>

<template>
  <div>
    <div>姓名：<input v-model="username"/> {{ username }}</div>
    <div>薪水：<input type="number" v-model="salary"/> {{ salary }}</div>
    <button @click="addSalary">增加薪水1000</button>
  </div>
</template>

<style scoped>
</style>
