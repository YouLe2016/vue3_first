<script lang="ts">
export default {
  //数据
  data() {
    return {
      username: "王天一",
      salary: 15000
    }
  },
  //⽅法
  methods: {
    addSalary() {
      this.salary += 1000
    }
  }
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
