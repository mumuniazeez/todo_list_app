const input = document.querySelector("#script")
const addBtn = document.querySelector("#add-btn")
const listRender = document.querySelector("#list")
const resultEl = document.querySelector("#result-container")
const clearBtn = document.querySelector(".clear-all-btn")
// deleteBtn is Decleared in /* main_script.js */
let deleteBtn 
const taskCounter = document.querySelector(".count-task")
const bodyEl = document.querySelector("body")
const rootEl = document.querySelector("#root")
const page2 = document.querySelector(".page-2")
const darkModeBtn = document.querySelector("#dark-mode")
const lightModeBtn = document.querySelector("#light-mode")
// currentTask is Decleared in /* main_script.js */
let currentTask
const okBtn = document.querySelector("#okay-btn")
const checkEl = document.querySelector("#check-todo")
let link = document.querySelectorAll("link")
let realLink = link.length - 1
let linkEl = link[realLink]

const darkColor = localStorage.getItem("darkColor")
const lightColor = localStorage.getItem("lightColor")
const savedDocument = localStorage.getItem("savedPage")
let tasksFromLocalStorage = JSON.parse(localStorage.getItem("myToDo"))
 