<script setup lang="ts">
import Person from "@/components/section1/Person.vue";
import Person2 from "@/components/section1/Person2.vue";
import Car from "@/components/section1/Car.vue";
</script>

<template>
  <div class="app">
    <h2>Hello World</h2>
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

.item {
  margin: 20px 0;
}
</style>