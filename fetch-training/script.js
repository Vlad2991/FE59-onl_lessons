
const addButton = document.querySelector(".add-btn");
const divTodoItems = document.querySelector(".todo-items");
const inputTodo = document.querySelector(".todo-input");
const deleteAll = document.querySelector(".delete-all");
const deleteLast = document.querySelector(".delete-last");
const completedCount = document.querySelector(".completed");
const postsContainer = document.querySelector('.posts');
const loadPostsPromiseButton = document.getElementById('load-posts-promise');

const postIds = [15, 23, 7, 3];

// Функция для получения данных из localStorage
function getDate() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

// Функция для записи данных в localStorage
function setDate(data) {
  localStorage.setItem("todos", JSON.stringify(data));
}

// Функция для генерации уникального идентификатора
function generateUniqueID() {
  return Math.random().toString(36).substr(2, 9);
}

// Функция для создания HTML-разметки карточки дела
function createToDoHTML(todo) {
  return `
    <div class="todo-item" data-id="${todo.id}">
      <input type="checkbox" class="standard ${todo.isChecked ? 'done' : ''}" data-id="${todo.id}">
      <input type="text" class="todo-item__search" value="${todo.text}" data-id="${todo.id}">
      <button class="todo-item__date-btn" data-id="${todo.id}">Дата</button>
      <p class="todo-item__date" id="date-display-${todo.id}">${todo.date}</p>
      <button class="todo-item__btn-x" data-id="${todo.id}">X</button>
    </div>
  `;
}

// Функция для добавления новой задачи
function addTask(newTodo) {
  const todos = getDate();

  if (newTodo.text) {
    todos.push(newTodo);
    setDate(todos);

    const taskTodoHTML = createToDoHTML(newTodo);
    divTodoItems.insertAdjacentHTML('beforeend', taskTodoHTML);

    updateCounts();
  }
}

// Функция для удаления задачи
function deleteTask(event) {
  const clickedElement = event.target;
  const todoId = clickedElement.dataset.id;

  if (clickedElement.classList.contains('todo-item__btn-x')) {
    const todos = getDate();
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setDate(updatedTodos);

    const todoItem = clickedElement.closest('.todo-item');
    todoItem.remove();
    updateCounts();
  }
}

// Функция для удаления последней задачи
function deleteLastTask() {
  const todos = getDate();
  if (todos.length > 0) {
    const lastTodoId = todos[todos.length - 1].id;
    const updatedTodos = todos.filter(todo => todo.id !== lastTodoId);
    setDate(updatedTodos);

    const todoItem = document.querySelector(`.todo-item[data-id="${lastTodoId}"]`);
    if (todoItem) {
      todoItem.remove();
      updateCounts();
    }
  }
}

// Функция для обновления состояния задачи (выполнена/не выполнена)
function taskDone(event) {
  const clickedElement = event.target;
  const todoId = clickedElement.dataset.id;

  if (clickedElement.tagName === 'INPUT' && clickedElement.type === 'checkbox') {
    const todos = getDate();
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.isChecked = !todo.isChecked;
      }
      return todo;
    });
    setDate(updatedTodos);

    const todoItem = clickedElement.closest('.todo-item');
    todoItem.classList.toggle('done');
    const todoText = todoItem.querySelector('.todo-item__search');
    todoText.classList.toggle('done');
    const isDone = todoItem.classList.contains('done');
    todoText.style.textDecoration = isDone ? 'line-through' : 'none';

    updateCounts();
  }
}

// Функция для отображения текущей даты и времени
function showCurrentDateTime(event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains('todo-item__date-btn')) {
    const todoItem = clickedElement.closest('.todo-item');
    const dateDisplay = todoItem.querySelector('.todo-item__date');
    dateDisplay.textContent = new Date().toLocaleString();
  }
}

// Функция для удаления всех задач
function deleteAllTasks() {
  divTodoItems.innerHTML = '';
  setDate([]);
  updateCounts();
}

// Функция для обновления счетчиков задач
function updateCounts() {
  const totalTodos = document.querySelectorAll(".todo-item").length;
  const completedTodos = document.querySelectorAll(".todo-item input[type='checkbox']:checked").length;

  completedCount.textContent = completedTodos;
}
window.addEventListener('load', () => {
  const todos = getDate();
  todos.forEach(todo => {
    const taskTodoHTML = createToDoHTML(todo);
    divTodoItems.insertAdjacentHTML('beforeend', taskTodoHTML);
  });
  updateCounts();
});

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(res => {
//     res.forEach(item => {
//       const ul = document.querySelector('.todo-items');
//       addTask({
//         id: String(item.id),
//         date: item.userId,
//         text: item.body,
//         isChecked: true
//       }, false, ul);
//     });
//   });
// Функция для получения поста по ID
function fetchPostById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res=> {
          if (!res.ok) {
              throw new Error(`Не удалось загрузить пост с ID ${id}`);
          }
          return res.json();
      });
}

// Функция для создания HTML разметки поста
function createPostHTML(post) {
  const postDiv = document.createElement('div');
  postDiv.classList.add('post');
  postDiv.innerHTML = `
      <h3>ID: ${post.id}</h3>
      <p>${post.title}</p>
  `;
  return postDiv;
}

// Функция для отображения постов с использованием цепочек промисов
function displayPostsWithPromiseChaining(postIds) {
  let promiseChain = Promise.resolve();

  postIds.forEach(postId => {
      promiseChain = promiseChain
          .then(() => fetchPostById(postId))
          .then(post => {
              const postHTML = createPostHTML(post);
              postsContainer.appendChild(postHTML);
          })
          .catch(error => {
              console.error(error.message);
          });
  });
}

// Обработчик события для кнопки загрузки постов
loadPostsPromiseButton.addEventListener('click', () => {
  postsContainer.innerHTML = '';  
  displayPostsWithPromiseChaining(postIds);
});


// Обработчики событий
addButton.addEventListener('click', addTask);
divTodoItems.addEventListener('click', deleteTask);
divTodoItems.addEventListener('click', taskDone);
divTodoItems.addEventListener('click', showCurrentDateTime);
deleteAll.addEventListener('click', deleteAllTasks);
deleteLast.addEventListener('click', deleteLastTask);