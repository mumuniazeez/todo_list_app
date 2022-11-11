// DOM is been manipulation in /*DOM.js*/
let myToDo = []
if (tasksFromLocalStorage) {
    myToDo = tasksFromLocalStorage
    add(myToDo)
}
myToDo.length == 0 ? listRender.innerHTML = `<h1 id="check-todo">No Todo available.</h1>`: null
   const result = (eventResult) => {
       resultEl.innerHTML = eventResult
    }
const countTheTodo = (itemToCount) => {
    const taskCounted = (noOfTask) =>  {
        taskCounter.textContent = noOfTask
    }
    itemToCount.length == 0 ? taskCounted("No Todo")
	: itemToCount.length == 1 ? taskCounted("Undone(1)")
    : taskCounted(`Undone(${itemToCount.length})`)
    
}
countTheTodo(myToDo)

const undoClearAll = () => {
    let tasksFromSessionStorage = JSON.parse(sessionStorage.getItem("recentClearedTodo"))
    myToDo = tasksFromSessionStorage
    localStorage.setItem("myToDo", JSON.stringify(myToDo))
    tasksFromLocalStorage = JSON.parse(localStorage.getItem("myToDo"))
    myToDo = tasksFromLocalStorage
    add(myToDo)
    countTheTodo(myToDo)
    countDoneTheTodo(doneTask);
    result(`Todos has been recovered. <button onclick="result('')" id="okay-btn">OK</button>`)
    sessionStorage.removeItem("recentClearedTodo")
    sessionStorage.removeItem("recentToDoDeleted")
}

const undoDelete = () => {
    let recentToDoDeleted = sessionStorage.getItem("recentToDoDeleted")
    myToDo.push(recentToDoDeleted)
    localStorage.setItem("myToDo", JSON.stringify(myToDo))
    let tasksFromLocalStorage = JSON.parse(localStorage.getItem("myToDo"))
    myToDo = tasksFromLocalStorage
    add(myToDo)
    countTheTodo(myToDo)
    result(`A Todo has been recovered. <button onclick="result('')" id="okay-btn">OK</button>`)
    sessionStorage.removeItem("recentToDoDeleted")
    sessionStorage.removeItem("recentClearedTodo")
}


function loadDeleteBtn() {
	let motherContainer = document.querySelectorAll(".task")
	let  currentTodo = document.querySelectorAll(".delete-btn")
	for (let i = 0; i < currentTodo.length; i++) {
	    currentTodo[i].onclick = () => {
	        if (myToDo.length == 1) {
	            let theTask = motherContainer[i].firstElementChild.outerHTML
	            let templateTOdo = (`\n        ${theTask}\n        `)
	            sessionStorage.setItem("recentToDoDeleted", templateTOdo)
	            localStorage.removeItem("myToDo")
	            myToDo = []
	            add(myToDo);
	            countTheTodo(myToDo);
	            result(`A Todo as been deleted. <button onclick="result('')" id="okay-btn">OK</button> <button onclick="undoDelete()" id="okay-btn">Undo Delete</button>`)
	            sessionStorage.removeItem("recentClearedTodo")
	            listRender.innerHTML = `<h1 id="check-todo">No Todo available.</h1>`        
	        } else {
	            let theTask = motherContainer[i].firstElementChild.outerHTML
	            let todoToDelete = myToDo.indexOf(`\n        ${theTask}\n        `)
	            let templateTOdo = (`\n        ${theTask}\n        `)
	            sessionStorage.setItem("recentToDoDeleted", templateTOdo)
	            myToDo.splice(todoToDelete, 1)
	            localStorage.setItem("myToDo", JSON.stringify(myToDo))
	            let tasksFromLocalStorage = JSON.parse(localStorage.getItem("myToDo"))
	            myToDo = tasksFromLocalStorage
	            add(myToDo)
	            countTheTodo(myToDo)
	            result(`A Todo as been deleted. <button onclick="result('')" id="okay-btn">OK</button> <button onclick="undoDelete()" id="okay-btn">Undo Delete</button>`)
	            sessionStorage.removeItem("recentClearedTodo")
	            if (myToDo.length == 0) {
	                listRender.innerHTML = `<h1 id="check-todo">No Todo available.</h1>`
	            }    
	        }
	
	
	    }
	}
}
addBtn.addEventListener("click", () => {
    if (input.value == ""||input.value == " ") {
        result(`No Todo added, fill in your Todo above. <button onclick="result('')" id="okay-btn">OK</button>`)
    }
    else{
        myToDo.push(`
        <div><p>${input.value}</p></div>
        `)
        input.value = ""
        add(myToDo)
        localStorage.setItem("myToDo", JSON.stringify(myToDo))
        result(`Your Todo have been added below. <button onclick="result('')" id="okay-btn">OK</button>`)
        countTheTodo(myToDo);
    }
})

function add(theTodo) {
    let task = ""
    for (let i = 0; i < theTodo.length; i++) {
        task += `
        <ul class="task-container">
        <li class="task">
                <input type="checkbox" id="add-to-done">
                ${theTodo[i]}
                <button class="delete-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </li>
        </ul>
        `
    }
    listRender.innerHTML = task
    loadDeleteBtn();
    loadCheckbox();
    doneLoadDeleteBtn();
}

clearBtn.addEventListener("dblclick", () => {
    if (myToDo.length == 0) {
        result(`No Todo to clear. <button onclick="result('')" id="okay-btn">OK</button>`)
    } else if (myToDo.length !== 0) {
        sessionStorage.setItem("recentClearedTodo", JSON.stringify(myToDo))
        localStorage.removeItem("myToDo")
        myToDo = []
        add(myToDo);
        countTheTodo(myToDo);
        result(`Your Todo has been cleared. <button onclick="result('')" id="okay-btn">OK</button> <button onclick="undoClearAll()" id="okay-btn">Undo Clear all</button>`)
        sessionStorage.removeItem("recentToDoDeleted")
        listRender.innerHTML = `<h1 id="check-todo">No Todo available.</h1>`
    }
})
clearBtn.addEventListener("click", () => {
    if (myToDo.length == 0) {
        result(`No Todo to clear. <button onclick="result('')" id="okay-btn">OK</button>`)
    } else if (myToDo.length !== 0) {
        result(`Double-click to clear all Todos. <button onclick="result('')" id="okay-btn">OK</button>`)
    }
})
input.addEventListener("input", () => {
    input.value == "" || input.value == " " 
    ? result(`Type in your Todo. <button onclick="result('')" id="okay-btn">OK</button>`)
    : result("")
})
loadDeleteBtn();