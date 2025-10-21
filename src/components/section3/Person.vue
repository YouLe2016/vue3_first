<script setup lang="ts">
import {Persons} from '@/bean/Person'
// 第一种写法：仅接收
// defineProps(['a', 'list'])

// 第二种写法：接收+限制类型
// a?：非必须
// defineProps<{ list: Persons, a?: string }>()

// 第三种写法：接收+限制类型+指定默认值
withDefaults(defineProps<{ list?: Persons, a?: string }>(), {
  a: '默认值',
  list: () => [{id: '-1', name: '默认值', age: 0}]
})

// 接收并赋值
// const props = defineProps(['a', 'list'])
// console.log(props.a)
// console.log(props.list)
</script>

<template>
  <div>
    <p>{{ a }}</p>
    <p>{{ list }}</p>
    <ul>
      <li v-for="person in list" :key="person.id">{{ person.name }} -- {{ person.age }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>