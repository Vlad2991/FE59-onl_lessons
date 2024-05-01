//  импорты
import { saveToLocal } from './loacalStorage.js';
import { generateUniqueID, createToDo } from './todoUtils.js';
'use strict';
// переменные 
const addButton = document.querySelector(".add-btn");
const divTodoItems = document.querySelector(".todo-items");
const inputTodo = document.querySelector(".todo-input");
const deleteAll = document.querySelector(".delete-all");
//  проверка данных 
if (localStorage.getItem('todos')) {
  divTodoItems.innerHTML = localStorage.getItem('todos');
}


//  добавление 
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
//  удаление задачи  по 1
function deleteTask(event) {
  const clickedElement = event.target;
  const todoId = clickedElement.dataset.id;

  if (clickedElement.classList.contains('todo-item__btn-x')) {
    const todoItem = clickedElement.closest('.todo-item');
    todoItem.remove();
    saveToLocal();
  }
}
//  отметка о выполнении 
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
//  время 
function showCurrentDateTime(event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains('todo-item__date-btn')) {
    const todoItem = clickedElement.closest('.todo-item');
    const dateDisplay = todoItem.querySelector('.todo-item__date');
    dateDisplay.textContent = new Date().toLocaleString(); 
  }
}
//  удаление всех задач 
function deleteAllTasks() {
  divTodoItems.innerHTML = '';
  saveToLocal();
}

addButton.addEventListener('click', addTask);
divTodoItems.addEventListener('click', deleteTask);
divTodoItems.addEventListener('click', taskDone);
divTodoItems.addEventListener('click', showCurrentDateTime); 
deleteAll.addEventListener('click', deleteAllTasks);
