let doneTask = []

if (doneTasksFromLocalStorage) {
    doneTask = doneTasksFromLocalStorage
    addDone(doneTask)
}

if (doneTask.length == 0) {
    doneList.innerHTML = `<h1 id="check-todo">No Todo been done.</h1>`
}

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


function doneLoadDeleteBtn() {
	let doneMotherContainer = document.querySelectorAll(".done-task")
	let  doneCurrentTodo = document.querySelectorAll(".done-delete-btn")
	for (let i = 0; i < doneCurrentTodo.length; i++) {
	    doneCurrentTodo[i].onclick = () => {
	        if (doneTask.length == 1) {
	            let doneTheTask = doneMotherContainer[i].firstElementChild.outerHTML
	            let doneTemplateTodo = (`\n        ${doneTheTask}\n        `)
	            sessionStorage.setItem("recentToDoDeleted", doneTemplateTodo)
	            localStorage.removeItem("doneTask")
	            doneTask = []
	            addDone(doneTask);
	            countDoneTheTodo(doneTask)
	            result(`A Todo as been deleted. <button onclick="result('')" id="okay-btn">OK</button> <button onclick="undoDelete()" id="okay-btn">Undo Delete</button>`)
	            sessionStorage.removeItem("recentClearedTodo")
	            doneList.innerHTML = `<h1 id="check-todo">No Todo available.</h1>`        
	        } else {
	            let doneTheTask = doneMotherContainer[i].firstElementChild.outerHTML
	            let todoToDelete = doneTask.indexOf(`\n        ${doneTheTask}\n        `)
	            let doneTemplateTodo = (`\n        ${doneTheTask}\n        `)
	            sessionStorage.setItem("recentToDoDeleted", doneTemplateTodo)
	            doneTask.splice(todoToDelete, 1)
	            localStorage.setItem("doneTask", JSON.stringify(doneTask))
	            let tasksFromLocalStorage = JSON.parse(localStorage.getItem("doneTask"))
	            doneTask = tasksFromLocalStorage
	            addDone(doneTask)
	            countDoneTheTodo(doneTask)
	            result(`A Todo as been deleted. <button onclick="result('')" id="okay-btn">OK</button> <button onclick="undoDelete()" id="okay-btn">Undo Delete</button>`)
	            sessionStorage.removeItem("recentClearedTodo")
	            if (doneTask.length == 0) {
	                doneList.innerHTML = `<h1 id="check-todo">No Todo available.</h1>`
	            }    
	        }
	
	
	    }
	}
}

doneClearAllBtn.addEventListener("dblclick",() => {
    if (doneTask.length == 0) {
        result(`No Todo to clear. <button onclick="result('')" id="okay-btn">OK</button>`)
    } else if (doneTask.length !== 0) {
        doneTask = []
        addDone(doneTask);
        countDoneTheTodo(doneTask);
        result(`Your Todo has been cleared. <button onclick="result('')" id="okay-btn">OK</button> <button onclick="undoClearAll()" id="okay-btn">Undo Clear all</button>`)
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
            	<input type="checkbox" id="done-el" checked>
                <strike>${doneTask[i]}</strike>
                <button class="green done-delete-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </li>
        </ul>
        `
    }
    doneList.innerHTML = addDoneTask
    doneLoadDeleteBtn();
    loadCheckbox();
}
doneLoadDeleteBtn();
loadCheckbox();
// if (myToDo.length == 1) {
//     let deleteTheTask = deleteDoneMotherContainer[i].firstElementChild.outerHTML
//     let deleteTemplateTodo = (`\n        ${deleteTheTask}\n        `)
//     sessionStorage.setItem("recentToDoDeleted", deleteTemplateTodo)
//     localStorage.removeItem("myToDo")
//     myToDo = []
//     add(myToDo);
//     countTheTodo(myToDo);
//     result(`A Todo as been deleted. <button onclick="result('')" id="okay-btn">OK</button> <button onclick="undoDelete()" id="okay-btn">Undo Delete</button>`)
//     sessionStorage.removeItem("recentClearedTodo")
//     listRender.innerHTML = `<h1 id="check-todo">No Todo available.</h1>`        
// } else {
//     let deleteTheTask = deleteDoneMotherContainer[i].firstElementChild.outerHTML
//     let todoToDelete = myToDo.indexOf(`\n        ${deleteTheTask}\n        `)
//     let deleteTemplateTodo = (`\n        ${deleteTheTask}\n        `)
//     sessionStorage.setItem("recentToDoDeleted", deleteTemplateTodo)
//     myToDo.splice(todoToDelete, 1)
//     localStorage.setItem("myToDo", JSON.stringify(myToDo))
//     let tasksFromLocalStorage = JSON.parse(localStorage.getItem("myToDo"))
//     myToDo = tasksFromLocalStorage
//     add(myToDo)
//     countTheTodo(myToDo)
//     result(`A Todo as been deleted. <button onclick="result('')" id="okay-btn">OK</button> <button onclick="undoDelete()" id="okay-btn">Undo Delete</button>`)
//     sessionStorage.removeItem("recentClearedTodo")
//     if (myToDo.length == 0) {
//         listRender.innerHTML = `<h1 id="check-todo">No Todo available.</h1>`
//     }    
// }

// let deleteDoneMotherContainer = document.querySelectorAll(".task")
// let deleteCurrentTodo = document.querySelectorAll(".delete-btn")
// for (let i = 0; i < deleteCurrentTodo.length; i++) {
//     deleteCurrentTodo[i].onclick = function () {
//         if (myToDo.length == 1) {
//             let deleteTheTask = deleteDoneMotherContainer[i].firstElementChild.outerHTML
//             let deleteTemplateTodo = (`\n        ${deleteTheTask}\n        `)
//             sessionStorage.setItem("recentToDoDeleted", deleteTemplateTodo)    
//             localStorage.removeItem("myToDo")
//             myToDo = []
//             add(myToDo);
//             countTheTodo(myToDo);
//             result(`A Todo as been deleted. <button onclick="result('')" id="okay-btn">OK</button> <button onclick="undoDelete()" id="okay-btn">Undo Delete</button>`)
//             sessionStorage.removeItem("recentClearedTodo")
//             listRender.innerHTML = `<h1 id="check-todo">No Todo available.</h1>`        
//         } else {
//             let deleteTheTask = deleteDoneMotherContainer[i].firstElementChild.outerHTML
//             let todoToDelete = myToDo.indexOf(`\n        ${deleteTheTask}\n        `)
//             let deleteTemplateTodo = (`\n        ${deleteTheTask}\n        `)
//             sessionStorage.setItem("recentToDoDeleted", deleteTemplateTodo)
//             myToDo.splice(todoToDelete, 1)
//             localStorage.setItem("myToDo", JSON.stringify(myToDo))
//             let tasksFromLocalStorage = JSON.parse(localStorage.getItem("myToDo"))
//             myToDo = tasksFromLocalStorage
//             add(myToDo)
//             countTheTodo(myToDo)
//             result(`A Todo as been deleted. <button onclick="result('')" id="okay-btn">OK</button> <button onclick="undoDelete()" id="okay-btn">Undo Delete</button>`)
//             sessionStorage.removeItem("recentClearedTodo")
//             if (myToDo.length == 0) {
//                 listRender.innerHTML = `<h1 id="check-todo">No Todo available.</h1>`
//             }    
//         }
//     }
// }
