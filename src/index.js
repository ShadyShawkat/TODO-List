import './style.css';

const todoArr = [
  {
    index: 0,
    describtion: 'Do chores',
    completed: false,
  },
  {
    index: 1,
    describtion: 'Join board meeting',
    completed: false,
  },
  {
    index: 2,
    describtion: 'Walk the dog',
    completed: true,
  },
];

window.onload = () => {
  const todoList = document.querySelector('.todo-list');
  todoArr.forEach((todoItem) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
    <label class="${todoItem.completed ? 'todo-completed' : ''}">
      <input type="checkbox" class="todo-item-check" ${todoItem.completed ? 'checked' : ''}>
      ${todoItem.describtion}
    </label>
    <i class="fas fa-ellipsis-v item-edit-icon"></i>
    `;
    todoList.appendChild(li);
  });
};