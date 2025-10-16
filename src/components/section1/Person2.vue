<script setup lang="ts">
  import {ref} from "vue";

  const name = ref('小王')
  const age = ref(32)
  const tel: string = '138 8888 8888'

  function showTel() {
    alert(tel)
  }

  function changeName() {
    if (name.value == '小白') {
      name.value = '小王'
    } else {
      name.value  = '小白'
    }
  }

  function changeAge() {
    age.value += 1
  }
</script>

<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
</style>