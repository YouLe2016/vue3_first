<script setup lang="ts">
import {ref, watch} from "vue";

const count = ref(0)
const question = ref('')
const answer = ref('问题通常包含一个问号？;-)')
const imgUrl = ref('')
const isLoading = ref(false)

function increase() {
  count.value += 1
}

const stopWatch = watch(count, (newValue, oldValue) => {
  console.log("count变化了", newValue, oldValue)
  if (newValue >= 5) {
    stopWatch()
  }
})

watch(question, async (newValue, oldValue) => {
  if (newValue.includes('?') || newValue.includes('？')) {
    isLoading.value = true
    answer.value = '思考中...'
    try {
      const response = await fetch('https://yesno.wtf/api')
      const res = await response.json()
      if (res.forced) {
        answer.value = '是'
      } else {
        answer.value = '否'
      }
      imgUrl.value = res.image
    } catch (e) {
      answer.value = 'Error! Could not reach the API. ' + e
    } finally {
      isLoading.value = false
    }
  } else {
    answer.value = '等待问题...'
    imgUrl.value = ''
  }
})

</script>

<template>
  <div>
    <h2>Watch 基本类型</h2>
    <h2>当前数量为 {{ count }}</h2>
    <button @click="increase">点我++</button>

    <h2>官网的一个小游戏</h2>
    <p>
      <div>请问一个是/否的问题</div>
      <input type="text" v-model="question" :disabled="isLoading">
    </p>
    <p> {{ answer }}</p>
    <img :src="imgUrl" alt="">
  </div>
</template>

<style scoped>
  img {
    width: 350px;
  }
</style>