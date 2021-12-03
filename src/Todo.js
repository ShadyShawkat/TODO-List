import Store from './Store.js';

export default class Todo {
  static todos = [];

  constructor(description) {
    this.index = Todo.todos.length;
    this.description = description;
    this.completed = false;
  }

  static toggleTodoStatus(index) {
    Todo.todos = Todo.todos.map((todo) => {
      if (todo.index === parseInt(index, 10)) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    Store.setData(Todo.todos);
    Todo.renderUI();
  }

  static renderUI() {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';
    Todo.reassignTodoIndices();
    Todo.todos.forEach((todoItem) => {
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.innerHTML = `
      <label data-index=${todoItem.index} class="${todoItem.completed ? 'todo-completed' : ''}">
        <input type="checkbox" class="todo-item-check" ${todoItem.completed ? 'checked' : ''}>
        <input type="text" class="todo-item-description" value="${todoItem.description}" disabled>
      </label>
      <i class="fas fa-ellipsis-v item-edit-icon"></i>
      <i class="fas fa-trash-alt item-delete-icon"></i>
      `;
      todoList.appendChild(li);
    });

    // Event listeners for the checkboxes on each todo item
    const todosCheckboxes = document.querySelectorAll('.todo-item-check');
    [...todosCheckboxes].forEach((chkBox) => {
      chkBox.addEventListener('change', (e) => {
        const todoNode = e.target.parentNode;
        Todo.toggleTodoStatus(todoNode.dataset.index);
      });
    });

    // Event listeners for the edit icons to edit the todo description
    const editIcons = document.querySelectorAll('.item-edit-icon');
    [...editIcons].forEach((icon) => {
      icon.addEventListener('click', (e) => {
        const todoNode = e.target.parentNode;
        const todoDescription = todoNode.querySelector('.todo-item-description');
        todoNode.classList.add('editing');
        if (todoNode.querySelector('.todo-completed')) return; // prevents editing in already completed todos
        todoDescription.disabled = false;
        todoDescription.focus();
        todoDescription.selectionStart = todoDescription.value.length;
      });
    });

    // Event listeners for the todos description on blurring out of the input field
    const todoItemDescription = document.querySelectorAll('.todo-item-description');
    [...todoItemDescription].forEach((input) => {
      input.addEventListener('blur', (e) => {
        const todoNode = e.target.parentNode.parentNode;
        const todoIndex = e.target.parentNode.dataset.index;
        const todo = Todo.todos.find((todo) => todo.index === parseInt(todoIndex, 10));
        e.target.value = todo.description;
        e.target.disabled = true;
        setTimeout(() => {
          todoNode.classList.remove('editing');
        }, 100);
      });
    });

    // Event listeners for the todos description on pressing Enter to change it
    [...todoItemDescription].forEach((input) => {
      input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          const todoIndex = e.target.parentNode.dataset.index;
          const todoNewDescription = e.target.value;
          if (!todoNewDescription) {
            alert('Please add a new description to the selected todo. If you want to delete the todo, you can click the red bin button next to it in edit mode.');
            return;
          }
          Todo.editTodo(todoIndex, todoNewDescription);
        }
      });
    });

    // Event listeners for the todos delete button
    const deleteIcons = document.querySelectorAll('.item-delete-icon');
    [...deleteIcons].forEach((icon) => {
      icon.addEventListener('click', (e) => {
        const itemIndexToBeRemoved = parseInt(e.target.parentNode.querySelector('label').dataset.index, 10);
        Todo.deleteTodos(itemIndexToBeRemoved);
      });
    });
  }

  static add(description) {
    const newTodo = new Todo(description);
    Todo.todos.push(newTodo);
    Store.setData(Todo.todos);
  }

  static editTodo(todoIndex, newDescription) {
    Todo.todos = Todo.todos.map((todo) => {
      if (todo.index === parseInt(todoIndex, 10)) {
        todo.description = newDescription;
      }
      return todo;
    });
    Store.setData(Todo.todos);
    Todo.renderUI();
  }

  static deleteTodos(...indices) {
    indices.forEach((index) => {
      Todo.todos = Todo.todos.filter((todo) => todo.index !== index);
    });
    Todo.renderUI();
    Store.setData(Todo.todos);
  }

  static reassignTodoIndices() {
    Todo.todos = Todo.todos.map((todo, counter) => {
      todo.index = counter;
      return todo;
    });
  }
}
