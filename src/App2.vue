<script setup lang="ts">
import Person from "@/components/section1/Person.vue";
import Person2 from "@/components/section1/Person2.vue";
import Car from "@/components/section1/Car.vue";
import Person3 from "@/components/section1/Person3.vue";
import PersonSection2 from "@/components/section2/Person.vue";
import Person1Section2 from "@/components/section2/Person1.vue";
import Person2Section2 from "@/components/section2/Person2.vue";
import Person3Section2 from "@/components/section2/Person3.vue";
import {onMounted, ref} from "vue";

const isShow = ref(true)

onMounted(() => {
  console.log('App2 挂载完毕')
})

</script>

<template>
  <div class="app">
    <h2>Hello World</h2>
    <Person1Section2 class="item item-style" v-if="isShow"/>
    <button @click="isShow = !isShow">切换</button>
    <Person3Section2 class="item item-style"/>
    <Person2Section2 class="item item-style"/>
    <PersonSection2 class="item item-style"/>
    <Person3 class="item item-style"/>
    <Car class="item"/>
    <Person2 class="item"/>
    <Person class="item"/>
  </div>
</template>

<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.item-style {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.item {
  margin: 20px 0;
}
</style>