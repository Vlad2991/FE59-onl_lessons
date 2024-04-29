"use strict";
const addButton = document.querySelector(".add-btn");
const divTodoItems = document.querySelector(".todo-items");
const inputTodo = document.querySelector(".todo-input");
const deleteAll = document.querySelector(".delete-all");


if (localStorage.getItem('todos')) {
  divTodoItems.innerHTML = localStorage.getItem('todos');
}


function generateUniqueID() {
  return Math.random().toString(36).substr(2, 9);
}


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


function addTask() {
  const newTodo = {
    id: generateUniqueID(),
    date: new Date().toLocaleString(),
    text: inputTodo.value.trim(),
    isChecked: false,
  };

  if (newTodo.text) {
    const taskTodoHTML = createToDo(newTodo);
    divTodoItems.insertAdjacentHTML('beforeend', taskTodoHTML);

    inputTodo.value = '';
    saveToLocal();
  }
}


function deleteTask(event) {
  const clickedElement = event.target;
  const todoId = clickedElement.dataset.id;

  if (clickedElement.classList.contains('todo-item__btn-x')) {
    const todoItem = clickedElement.closest('.todo-item');
    todoItem.remove();
    saveToLocal();
  }
}


function taskDone(event) {
  const clickedElement = event.target;
  const todoId = clickedElement.dataset.id;

  if (clickedElement.tagName === 'INPUT' && clickedElement.type === 'checkbox') {
    const todoItem = clickedElement.closest('.todo-item');
    const todoText = todoItem.querySelector('.todo-item__search');

    todoItem.classList.toggle('done');
    todoText.classList.toggle('done');

    const isDone = todoItem.classList.contains('done');
    todoText.style.textDecoration = isDone ? 'line-through' : 'none';
    todoItem.style.backgroundColor = isDone ? 'black' : '';

    saveToLocal();
  }
}


function showCurrentDateTime(event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains('todo-item__date-btn')) {
    const todoItem = clickedElement.closest('.todo-item');
    const dateDisplay = todoItem.querySelector('.todo-item__date');
    dateDisplay.textContent = new Date().toLocaleString();
  }
}


function deleteAllTasks() {
  divTodoItems.innerHTML = '';
  saveToLocal();
}


function saveToLocal() {
  const todoItemsHTML = divTodoItems.innerHTML;
  localStorage.setItem('todos', todoItemsHTML);
}


addButton.addEventListener('click', addTask);
divTodoItems.addEventListener('click', deleteTask);
divTodoItems.addEventListener('click', taskDone);
divTodoItems.addEventListener('click', showCurrentDateTime);
deleteAll.addEventListener('click', deleteAllTasks);