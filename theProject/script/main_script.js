// DOM is been manipulation in /*DOM.js*/
let myToDo = []
if (tasksFromLocalStorage) {
    myToDo = tasksFromLocalStorage
}
add(myToDo)
const countTheTodo = (itemToCount) => {
    const taskCounted = (noOfTask) =>  {
        taskCounter.textContent = noOfTask
    }
    itemToCount.length == 0 ? taskCounted("No Todo")
	: itemToCount.length == 1 ? taskCounted("Undone(1)")
    : taskCounted(`Undone(${itemToCount.length})`)
}
countTheTodo(myToDo)
function loadCheckbox() {
    let motherItemsToCheck = document.querySelectorAll(".task")
    let itemsToCheck = document.querySelectorAll("#check")
    for (let i = 0; i < itemsToCheck.length; i++) {
        itemsToCheck[i].onclick = () => {
            if (itemsToCheck[i].checked) {
                if (myToDo.length == 1) {
                    setTimeout(() => {
                        let index = motherItemsToCheck[i].childNodes[3].outerHTML
                        let doneTasktoDeleteFormMyToDo = `\n        ${index}\n        `
                        doneTask.push(doneTasktoDeleteFormMyToDo)
                        localStorage.setItem("doneTask", JSON.stringify(doneTask))
                        addDone(doneTask)
                        myToDo = []
                        localStorage.removeItem("myToDo")
                        add(myToDo)
                        countTheTodo(myToDo)
                        countDoneTheTodo(doneTask)
                    }, 2000)

                } else {
                    setTimeout(() => {
                        let index = motherItemsToCheck[i].childNodes[3].outerHTML
                        let doneTasktoDeleteFormMyToDo = `\n        ${index}\n        `
                        doneTask.push(doneTasktoDeleteFormMyToDo)
                        localStorage.setItem("doneTask", JSON.stringify(doneTask))
                        let doneTaskFromLocalStorage = JSON.parse(localStorage.getItem("doneTask"))
                        doneTask = doneTaskFromLocalStorage
                        addDone(doneTask)
                        let indexOfDoneTaskToRemoveFromMyToDo = myToDo.indexOf(doneTasktoDeleteFormMyToDo)
                        myToDo.splice(indexOfDoneTaskToRemoveFromMyToDo, 1)
                        localStorage.setItem("myToDo", JSON.stringify(myToDo))
                        tasksFromLocalStorage = JSON.parse(localStorage.getItem("myToDo"))
                        myToDo = tasksFromLocalStorage
                        add(myToDo)
                        countTheTodo(myToDo)
                        countDoneTheTodo(doneTask)    
                    }, 2000)
                }
            }
        }
    }
}
function loadDeleteBtn() {
	let motherContainer = document.querySelectorAll(".task")
	let  currentTodo = document.querySelectorAll(".delete-btn")
	for (let i = 0; i < currentTodo.length; i++) {
	    currentTodo[i].onclick = () => {
	        if (myToDo.length == 1) {
	            let theTask = motherContainer[i].childNodes[3].outerHTML
	            let templateTOdo = (`\n        ${theTask}\n        `)
	            sessionStorage.setItem("recentToDoDeleted", templateTOdo)
	            localStorage.removeItem("myToDo")
	            myToDo = []
	            add(myToDo);
	            countTheTodo(myToDo);
	            sessionStorage.removeItem("recentClearedTodo")
	        } else {
	            let theTask = motherContainer[i].childNodes[3].outerHTML
	            let todoToDelete = myToDo.indexOf(`\n        ${theTask}\n        `)
	            let templateTodo = (`\n        ${theTask}\n        `)
	            sessionStorage.setItem("recentToDoDeleted", templateTodo)
	            myToDo.splice(todoToDelete, 1)
	            localStorage.setItem("myToDo", JSON.stringify(myToDo))
	            let tasksFromLocalStorage = JSON.parse(localStorage.getItem("myToDo"))
	            myToDo = tasksFromLocalStorage
	            add(myToDo)
	            countTheTodo(myToDo)
	            sessionStorage.removeItem("recentClearedTodo")
	        }
	    }
	}
}
addBtn.addEventListener("click", () => {
    if (input.value == ""||input.value == " ") {
    }
    else{
        myToDo.push(`
        <div><p>${input.value}</p></div>
        `)
        input.value = ""
        add(myToDo)
        localStorage.setItem("myToDo", JSON.stringify(myToDo))
        countTheTodo(myToDo);
    }
})
function add(theTodo) {
    let task = ""
    for (let i = 0; i < theTodo.length; i++) {
        task += `
        <ul class="task-container">
        <li class="task">
                <input type="checkbox" id="check">
                ${theTodo[i]}
                <button class="delete-btn"><span class="material-symbols-outlined">delete</span></button>
            </li>
        </ul>
        `
    }
    listRender.innerHTML = task
    if (myToDo.length == 0){
	    listRender.innerHTML = `<h1 id="check-todo">No Todo avialable.</h1>`
    }else{
        loadDeleteBtn();
        loadCheckbox();
    }
}
clearBtn.addEventListener("dblclick", () => {
    if (myToDo.length == 0) {
    } else if (myToDo.length !== 0) {
        sessionStorage.setItem("recentClearedTodo", JSON.stringify(myToDo))
        localStorage.removeItem("myToDo")
        myToDo = []
        add(myToDo);
        countTheTodo(myToDo);
        sessionStorage.removeItem("recentToDoDeleted")
    }
})
clearBtn.addEventListener("click", () => {
    if (myToDo.length == 0) {
    } else if (myToDo.length !== 0) {
    }
})
input.addEventListener("input", () => {
    input.value == "" || input.value == " " 
})
loadDeleteBtn();