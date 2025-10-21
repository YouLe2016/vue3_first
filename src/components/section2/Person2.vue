<script setup lang="ts">
import {ref, watch} from "vue";
import {Person} from "@/bean/Person";

const person = ref(new Person('张三', 18))

function changeName() {
  person.value.name += '~'
}

function changeAge() {
  person.value.age += 1
}

function changePerson() {
  person.value = new Person('王五', 20)
}

/*
监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
watch的第一个参数是：被监视的数据
watch的第二个参数是：监视的回调
  newValue, oldValue：deep的情况下，如果没有修改地址的话。这两个值是同一个，都是修改之后的值
watch的第三个参数是：配置对象（deep、immediate等等.....）
  deep(深度)：
  immediate(立即)：第一次就触发
*/
watch(person, (newValue, oldValue) => {
  console.log('person变化了', newValue, oldValue)
}, {deep: true, immediate: true})

</script>

<template>
  <div>
    <h2>Watch ref对象类型</h2>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<style scoped>
</style>