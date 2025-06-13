import {onMounted, reactive, toRefs} from "vue";

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
    console.log("加载了外部脚本3")
  });

  return {
    username,
    salary,
    addSalary
  }
}