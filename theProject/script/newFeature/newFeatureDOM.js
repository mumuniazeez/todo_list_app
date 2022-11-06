const doneCountTask = document.querySelector(".done-count-task")
const doneClearAllBtn = document.querySelector(".done-clear-all-btn")
const doneList = document.querySelector("#done-list")

const doneTasksFromLocalStorage = JSON.parse(localStorage.getItem("doneTask"))