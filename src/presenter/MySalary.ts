import {onMounted, ref} from "vue";

export default function () {
  const username = ref("王天一")
  const salary = ref(15000)

  function addSalary() {
    salary.value += 3000
    console.log(`salary: ${salary.value}`)
  }

  onMounted(() => {
    console.log("加载了外部脚本")
  });

  return {
    username,
    salary,
    addSalary
  }
}