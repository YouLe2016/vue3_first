<script setup lang="ts">
import {reactive} from "vue";

const car = reactive({brand: '比亚迪', name: '巡航舰', price: 88000})
const games = reactive([
  {id: '001', name: '王者荣耀'},
  {id: '002', name: '原神'},
  {id: '003', name: '三国志'},
])

function changeGames(id: string) {
  // 1、直接改对象的属性，这个写法也行
  // const game = games.find(it => it.id == id)
  // game.name = '模拟小汽车'

  // 2、数组中重新赋值对象，这个写法也行
  const index = games.findIndex(it => it.id == id)
  // 2.1、给数组赋值。这个写法也行
  // games.splice(index, 1, {id: '004', name: '模拟小汽车'})
  games[index] = {id: '004', name: '模拟小汽车'}
}

</script>

<template>
  <div class="car">
    <h2>{{ car.brand }} {{ car.name }}</h2>
    <p>价格: ¥{{ car.price }}</p>
    <button @click="car.price += 1000">修改汽车价格</button>
    <h2>游戏列表:</h2>
    <ul>
      <li v-for="game in games" :key='game.id' @click="changeGames(game.id)">ID: {{ game.id }}, 名称: {{ game.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
.car {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>