<script setup lang="ts">
import Person from "@/components/section3/Person.vue";
import {reactive} from "vue";
import {Persons} from '@/bean/Person'

const personList: Persons = reactive([
  {id: '001', name: '张三', age: 18},
  {id: '002', name: '李四', age: 19},
  {id: '003', name: '王五', age: 20},
  {id: '004', name: '赵六', age: 22}
])
</script>

<template>
  <Person :list="personList"/>
</template>

<style scoped>

</style>