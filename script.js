//selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

//functions
const addTodo = (event) => {
    event.preventDefault()  //prevent form from submitting
    const todoDiv = document.createElement("div")  //creating div
    todoDiv.classList.add("todoDiv")               //adding class to div
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    // let's create complete button
    const completedButton = document.createElement("button")
    completedButton.innerHTML="<i class='fas-fa-check'></i>"
    completedButton.classList.add("completed-btn")
    todoDiv.appendChild(completedButton)
    // let's delete complete button
    const deleletedButton = document.createElement("button")
    deletedButton.innerHTML="<i class='fas-fa-trash'></i>"
    deletedButton.classList.add("deleted-btn")
    todoDiv.appendChild(deletedButton)
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}

//creating delete and complete functions
const deleteComplete = (event) => {
    const item = event.target
    if (itemclassList.contains("delete-btn")) {
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener("transitioned", () => {
            todo.remove()
        })
        
    } else if (itemclassList.contains("comleted-btn")) {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    } 
    
}


//event listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteComplete)