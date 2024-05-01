//  id
function generateUniqueID() {
    return Math.random().toString(36).substr(2, 9);
  }
//    супер  мсое добавлние задачи 
  function createToDo(todo) {
    return `
      <div class="todo-item" id="${todo.id}">
        <input type="checkbox" class="standard ${todo.isChecked ? 'done' : ''}" data-id="${todo.id}">
        <input type="text" class="todo-item__search" value="${todo.text}" data-id="${todo.id}">
        <button class="todo-item__date-btn" data-id="${todo.id}">Дата</button>
        <p class="todo-item__date" id="date-display-${todo.id}">${todo.date}</p>
        <button class="todo-item__btn-x" data-id="${todo.id}">X</button>
      </div>
    `;
  }
  
  export { generateUniqueID, createToDo };