<script setup lang="ts">
  import {computed, ref} from "vue";

  const firstName = ref('张')
  const lastName = ref('三')

  // 只读计算属性
  // 页面上展示了2次，有缓存，只会调用1次
  const fullName = computed(() => {
    console.log("fullName1")
    return firstName.value + '-' + lastName.value
  })

  // 页面上展示了2次，没有缓存会调用2次
  function fullName2() {
    console.log("fullName2")
    return firstName.value + '-' + lastName.value
  }

  // 可写计算属性
  const fullName3 = computed({
    get() {
      console.log("fullName3")
      return firstName.value + '-' + lastName.value
    },
    set(value) {
      console.log('有人修改了fullName',value)
      const arr = value.split('-');
      firstName.value = arr[0]
      lastName.value = arr[1]
    }
  })

  function changeFullName() {
    firstName.value = '李'
    lastName.value = '四'
  }

  function changeFullName3() {
    fullName3.value = '李-四'
  }

</script>

<template>
  <div>
    <h2>computed计算属性</h2>
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName"> <br>
    全名：<span>{{fullName}}</span> <br>
    全名：<span>{{fullName}}</span> <br>
    全名2：<span>{{fullName2()}}</span> <br>
    全名2：<span>{{fullName2()}}</span> <br>
    全名3：<span>{{fullName3}}</span> <br>
    全名3：<span>{{fullName3}}</span> <br>
    <button @click="changeFullName">全名改为：li-si</button>
    <button @click="changeFullName3">全名3改为：li-si</button>
  </div>
</template>

<style scoped>

</style>