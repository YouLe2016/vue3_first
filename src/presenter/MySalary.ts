import {
  onMounted,
  reactive,
  ref,
  toRefs
} from "vue";

export default function () {
  const salaryInfo = reactive({
    username: "王天一",
    salary: 15000
  })

  // 方式一：toRef
  // const username = toRef(salaryInfo, "username")
  // const salary = toRef(salaryInfo, "salary")

  // 方式二：toRefs
  const {username, salary} = toRefs(salaryInfo)

  function addSalary() {
    salary.value += 3000
    console.log(`salaryInfo.salary: ${salaryInfo.salary}`)
    console.log(`username: ${username.value}`)
    console.log(`salary: ${salary.value}`)
  }

  onMounted(() => {
    console.log("加载了外部脚本4")
  });

  const test = ref()
  function showRes(){
    console.log(test) //RefImpl ref对象
    console.log(test.value) //<input> dom元素
    console.log(test.value.value) //输⼊框的值
    console.log(test.value.getAttribute("abc")) //⾃定义属性的值

    test.value.value = 100
  }

  return {
    username,
    salary,
    addSalary,
    showRes,
    test
  }
}