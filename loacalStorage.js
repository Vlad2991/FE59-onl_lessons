// локал
function saveToLocal() {
  const divTodoItems = document.querySelector(".todo-items");
  const todoItemsHTML = divTodoItems.innerHTML;
  localStorage.setItem('todos', todoItemsHTML);
}

export { saveToLocal };