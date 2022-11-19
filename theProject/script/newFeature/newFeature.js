// DOM is been manipulation in /*DOM.js*/
let doneTask = []
if (doneTasksFromLocalStorage) {
    doneTask = doneTasksFromLocalStorage
}
addDone(doneTask)
function countDoneTheTodo(itemToCount) {
 function taskCounted(noOfTask) {
    doneCountTask.textContent = noOfTask
 }
 if (itemToCount.length == 0) {
     taskCounted("No Todo")
 } else if (itemToCount.length == 1) {
     taskCounted("Done(1)")
 } else {
     taskCounted(`Done(${itemToCount.length})`)
 }
}
countDoneTheTodo(doneTask)

const viewDone = () => {

}

viewDoneBtn.addEventListener("click", () => {
    
})



function doneLoadCheckbox() {
	let doneMotherItemsToCheck = document.querySelectorAll(".done-task")
    let doneItemsToCheck = document.querySelectorAll("#done-check")
    for (let i = 0; i < doneItemsToCheck.length; i++) {
        doneItemsToCheck[i].onclick = () => {
			console.log(doneItemsToCheck[i].checked)
            if (!doneItemsToCheck[i].checked) {
                if (doneTask.length == 1) {
                    setTimeout(() => {
                        let doneIndex = doneMotherItemsToCheck[i].childNodes[3]
                        let index = doneIndex.childNodes[1].innerHTML
                        let doneTasktoDeleteFormMyToDo = `\n        ${index}\n        `
                        myToDo.push(doneTasktoDeleteFormMyToDo)
                        localStorage.setItem("myToDo", JSON.stringify(myToDo))
                        add(myToDo)
                        doneTask = []
                        localStorage.removeItem("doneTask")
                        addDone(doneTask)
                        countTheTodo(myToDo)
                        countDoneTheTodo(doneTask)    
                    }, 500)
                } else {
                    setTimeout(() => {
                        let doneIndex = doneMotherItemsToCheck[i].childNodes[3]
                        let index = doneIndex.childNodes[1].outerHTML
                        console.log(index)
                        let doneTasktoDeleteFormMyToDo = `\n        ${index}\n        `
                        myToDo.push(doneTasktoDeleteFormMyToDo)
                        localStorage.setItem("myToDo", JSON.stringify(myToDo))
                        let undoneTaskFromLocalStorage = JSON.parse(localStorage.getItem("myToDo"))
                        myToDo = undoneTaskFromLocalStorage
                        add(myToDo)
                        let indexOfDoneTaskToRemoveFromMyToDo = doneTask.indexOf(doneTasktoDeleteFormMyToDo)
                        doneTask.splice(indexOfDoneTaskToRemoveFromMyToDo, 1)
                        localStorage.setItem("doneTask", JSON.stringify(doneTask))
                        tasksFromLocalStorage = JSON.parse(localStorage.getItem("doneTask"))
                        doneTask = tasksFromLocalStorage
                        addDone(doneTask)
                        countTheTodo(myToDo)
                        countDoneTheTodo(doneTask)
                    }, 500)
                }
            }
        }
    }
}

function doneLoadDeleteBtn() {
	let doneMotherContainer = document.querySelectorAll(".done-task")
	let  doneCurrentTodo = document.querySelectorAll(".done-delete-btn")
	for (let i = 0; i < doneCurrentTodo.length; i++) {
	    doneCurrentTodo[i].onclick = () => {
	        if (doneTask.length == 1) {
	            let doneIndex = doneMotherContainer[i].childNodes[3]
				let doneTheTask = doneIndex.childNodes[1].outerHTML
	            let doneTemplateTodo = (`\n        ${doneTheTask}\n        `)
	            sessionStorage.setItem("recentToDoDeleted", doneTemplateTodo)
	            localStorage.removeItem("doneTask")
	            doneTask = []
	            addDone(doneTask);
	            countDoneTheTodo(doneTask)
	            sessionStorage.removeItem("recentClearedTodo")
	        } else {
	            let doneIndex = doneMotherContainer[i].childNodes[3]
				let doneTheTask = doneIndex.childNodes[1].outerHTML
	            let doneTodoToDelete = doneTask.indexOf(`\n        ${doneTheTask}\n        `)
				console.log(doneTodoToDelete)
	            let doneTemplateTodo = (`\n        ${doneTheTask}\n        `)
	            sessionStorage.setItem("recentToDoDeleted", doneTemplateTodo)
	            doneTask.splice(doneTodoToDelete, 1)
	            localStorage.setItem("doneTask", JSON.stringify(doneTask))
	            let doneTasksFromLocalStorage = JSON.parse(localStorage.getItem("doneTask"))
	            doneTask = doneTasksFromLocalStorage
	            addDone(doneTask)
	            countDoneTheTodo(doneTask)
	            sessionStorage.removeItem("recentClearedTodo")
	        }
	    }
	}
}

doneClearAllBtn.addEventListener("dblclick",() => {
    if (doneTask.length == 0) {
    } else if (doneTask.length !== 0) {
        doneTask = []
        addDone(doneTask);
        countDoneTheTodo(doneTask);
        sessionStorage.removeItem("recentToDoDeleted")
        doneList.innerHTML = `<h1 id="check-todo">No Todo been done.</h1>`
    }
})

function addDone(theTodo) {
    let addDoneTask = ""
    for (let i = 0; i < theTodo.length; i++) {
        addDoneTask += `
        <ul class="task-container">
        	<li class="done-task">
            	<input type="checkbox" id="done-check" checked>
                <strike>${doneTask[i]}</strike>
                <button class="green done-delete-btn"><span class="material-symbols-outlined">delete</span></button>
            </li>
        </ul>
        `
    }
    doneList.innerHTML = addDoneTask
	if (doneTask.length == 0){
	    doneList.innerHTML = `<h1 id="check-todo">No Todo been done.</h1>`}
	else {
        doneLoadDeleteBtn();
	    doneLoadCheckbox();
    }
}