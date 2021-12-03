import './style.css';
import Todo from './Todo.js';
import Store from './Store.js';

window.onload = () => {
  const todoInput = document.querySelector('.todo-input');
  const addTodoBtn = document.querySelector('.btn-add-todo');
  const clearAllBtn = document.querySelector('.btn-clear');

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
    Todo.todos = dataToBeStored;
  } else {
    Todo.todos = data;
  }
  Todo.renderUI();

  addTodoBtn.addEventListener('click', (e) => {
    Todo.add(todoInput.value.trim());
    todoInput.value = '';
    e.target.parentNode.disabled = true;
    Todo.renderUI();
  });

  todoInput.addEventListener('keyup', (e) => {
    if (todoInput.value.trim() !== '') {
      addTodoBtn.disabled = false;
      if (e.key === 'Enter') {
        Todo.add(todoInput.value.trim());
        todoInput.value = '';
        addTodoBtn.disabled = true;
        Todo.renderUI();
      }
    } else {
      addTodoBtn.disabled = true;
    }
  });

  clearAllBtn.addEventListener('click', () => {
    const todosToBeRemoved = Todo.todos.filter((todo) => todo.completed);
    const todosIndices = todosToBeRemoved.map((todo) => todo.index);
    Todo.deleteTodos(...todosIndices);
  });
};