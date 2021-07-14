const todoList = document.querySelector("#todo-list");
const todoForm= document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");

function handleTodoSubmit(event){

    event.preventDefault();
    //console.log(todoInput.value);
    
    const newTodo = todoInput.value;
    todoInput.value="";
    paintTodo(newTodo);
}

function deleteTodo(event){
    //console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){

    const li = document.createElement("li");
    const span =document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "X";

    button.addEventListener("click",deleteTodo)

    li.appendChild(span);
    li.appendChild(button);
    
    todoList.appendChild(li);
}


todoForm.addEventListener("submit", handleTodoSubmit);

