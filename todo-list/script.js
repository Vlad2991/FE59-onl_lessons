"use strict"

const addButton = document.querySelector('.add');
const todoList = document.querySelector('.todo-list');
const deleteAllButton = document.querySelector('.delete-all');

function generateDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

let taskCount = 0;


function handleCheckboxChange() {
  const todoText = this.nextElementSibling;
  const todoItem = this.parentElement;


  if (this.checked) {
    todoText.style.textDecoration = 'line-through';
    todoItem.style.backgroundColor = '#cceeff';
  } else {
    todoText.style.textDecoration = 'none';
    todoItem.style.backgroundColor = '';
  }
}

addButton.addEventListener('click', function () {
  if (taskCount >= 3) {
    alert('Вы исчерпали лимит задач.');
    return;
  }

  const newTodoText = document.querySelector('.place').value.trim();
  if (newTodoText.length === 0) {
    return;
  }
  const newTodoItem = document.createElement('div');
  newTodoItem.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', handleCheckboxChange);
  newTodoItem.appendChild(checkbox);

  const todoText = document.createElement('input');
  todoText.type = 'text';
  todoText.value = newTodoText;
  newTodoItem.appendChild(todoText);


  const todoDate = document.createElement('input');
  todoDate.type = 'date';
  todoDate.value = generateDate();
  newTodoItem.appendChild(todoDate);


  const deleteButton = document.createElement('button');
  deleteButton.classList.add('button-item');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', function () {
    todoList.removeChild(this.parentNode);
    taskCount--;
  });
  newTodoItem.appendChild(deleteButton);
  todoList.appendChild(newTodoItem);
  document.querySelector('.place').value = '';
  taskCount++;
});

deleteAllButton.addEventListener('click', function () {
  todoList.innerHTML = '';
  taskCount = 0;
});