import './style.css';
import Task from './Task'

window.onload = () => {
  const todoList = document.querySelector('.todo-list');
  Task.tasks.forEach((todoItem) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
    <label data-index=${todoItem.index} class="${todoItem.completed ? 'todo-completed' : ''}">
      <input type="checkbox" class="todo-item-check" ${todoItem.completed ? 'checked' : ''}>
      ${todoItem.description}
    </label>
    <i class="fas fa-ellipsis-v item-edit-icon"></i>
    `;
    todoList.appendChild(li);
  });
};