import {onMounted, reactive} from "vue";

export default function () {
  const salaryInfo = reactive({
    username: "王天一",
    salary: 15000
  })

  function addSalary() {
    salaryInfo.salary += 3000
    console.log(`salary: ${salaryInfo.salary}`)
  }

  onMounted(() => {
    console.log("加载了外部脚本2")
  });

  return {
    salaryInfo,
    addSalary
  }
}