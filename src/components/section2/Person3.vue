<script setup lang="ts">
import {reactive, watch} from "vue";
import {Person} from "@/bean/Person";

const person = reactive(new Person('张三', 18))

function changeName() {
  person.name += '~'
}

function changeAge() {
  person.age += 1
}

// 监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的
function changePerson() {
  // Object.assign(person, new Person('王五', 20))
  // 应该是上面的写法，这样写IDEA不报错
  (Object as any).assign(person, new Person('王五', 20))
}

watch(person, (newValue, oldValue) => {
  console.log('person变化了', newValue, oldValue)
})

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