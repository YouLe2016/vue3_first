<script setup lang="ts">
import {reactive} from "vue";

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
<!--  <div>-->
<!--    <MySalaryInfo :salary-info="salaryInfo"/>-->
<!--    <button @click="addSalary">增加薪水</button>-->
<!--    <button @click="showRes">查看薪水</button> {{ salaryInfo }}-->
<!--  </div>-->
  <div>
    <h2>1</h2>
    <p>
      <!-- 直接跳转 -->
      <RouterLink to="/home">⾸⻚</RouterLink>
      <!-- 命名跳转 -->
      <RouterLink :to="{ name:'about'}">关于</RouterLink>
      <!-- 路径跳转 -->
      <RouterLink replace :to="{ path:'/news'}">新闻</RouterLink>
    </p>
    <div class="content">
      <!-- 路由出⼝ -->
      <!-- 路由匹配到的组件将渲染在这⾥ -->
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
a {
  margin: 10px;
}

.content {
  background: yellowgreen;
  height: 400px;
  width: 400px;
  border-radius: 10px;
}
</style>
