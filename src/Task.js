import Store from './Store.js'

export default class Task {
  static tasks = [];

  constructor(description) {
    this.index = Task.tasks.length;
    this.description = description;
    this.completed = false;
  }

  static toggleTaskStatus(index) {
    console.log(index)
    Task.tasks = Task.tasks.map((task) => {
      if (task.index === parseInt(index)) {
        task.completed = !task.completed;
      }
      return task;
    });
    Store.setData(Task.tasks);
    Task.renderUI();
  }

  static renderUI() {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';
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
    const tasksCheckboxes = document.querySelectorAll('.todo-item-check');
    [...tasksCheckboxes].forEach((chkBox) => {
      chkBox.addEventListener('change', (e) => {
        const taskNode = e.target.parentNode;
        Task.toggleTaskStatus(taskNode.dataset.index);
      })
    });
  }
}