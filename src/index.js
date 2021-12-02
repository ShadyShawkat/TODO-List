import './style.css';
import Task from './Task.js';
import Store from './Store.js';

window.onload = () => {
  const todoInput = document.querySelector('.todo-input');
  const addTodoBtn = document.querySelector('.btn-add-todo');

  const data = Store.getData();
  if (!data) {
    const dataToBeStored = [
      {
        index: 0,
        description: 'Do chores',
        completed: false,
      },
      {
        index: 1,
        description: 'Join board meeting',
        completed: false,
      },
      {
        index: 2,
        description: 'Walk the dog',
        completed: true,
      },
    ];
    Store.setData(dataToBeStored);
    Task.tasks = dataToBeStored;
  } else {
    Task.tasks = data;
  }
  Task.renderUI();

  addTodoBtn.addEventListener('click', () => {
    Task.add(todoInput.value.trim());
    Task.renderUI();
  });

  todoInput.addEventListener('keyup', function (e) {
    if(todoInput.value.trim()!== '') {
      addTodoBtn.disabled = false;
      if(e.key === 'Enter') {
        Task.add(todoInput.value.trim());
        Task.renderUI();
      }
    } else {
      addTodoBtn.disabled = true;
    }
  });
};