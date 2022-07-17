const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODO_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function toDoFilter(item) {
  return item.id !== id;
}

function deleteToDoById(id) {
  const savedToDoArr = JSON.parse(localStorage.getItem(TODO_KEY));
  savedToDoArr.filter(toDoFilter);
}

function deleteToDo(event) {
  const parent = event.target.parentElement;
  parent.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(parent.id));
  saveToDos();
}

function paintToDo(obj) {
  const li = document.createElement("li");
  li.id = obj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  span.innerText = obj.text;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const todoObj = {
    text: newTodo,
    id: Date.now()
  };

  toDos.push(todoObj);

  paintToDo(todoObj);

  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
  toDos = parsedToDos;
}
