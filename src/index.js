import './style.css';
import Task from './Task.js';
import Store from './Store.js';

window.onload = () => {
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
};