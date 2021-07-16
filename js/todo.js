const todoList = document.querySelector("#todo-list");
const todoForm= document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");

let todos = [];
const TODOS_KEYS ="todos";

function saveTodo(){
    localStorage.setItem(TODOS_KEYS,JSON.stringify(todos));
}

function handleTodoSubmit(event){

    event.preventDefault();
    //console.log(todoInput.value);
    
    const newTodo = todoInput.value;
    todoInput.value="";

    const newTodoObj = {
        text: newTodo,
        id:Date.now(),
    }

    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

function deleteTodo(event){
    //console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    
    li.remove();

    saveTodo();
}

function paintTodo(newTodoObj){

    const li = document.createElement("li");
    li.id = newTodoObj.id;

    const span =document.createElement("span");
    span.innerText = newTodoObj.text;

    const button = document.createElement("button");
    button.innerText = "X";

    button.addEventListener("click",deleteTodo)

    li.appendChild(span);
    li.appendChild(button);
    
    todoList.appendChild(li);
}


todoForm.addEventListener("submit", handleTodoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEYS);


 

if(savedTodos){
    const parsedTodos =JSON.parse(savedTodos);
    console.log(savedTodos);
    //parsedTodos.forEach(element => )
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);

}
else{

}