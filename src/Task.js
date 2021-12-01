export default class Task {
  static tasks = [
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

  constructor(description) {
    this.index = Task.tasks.length;
    this.description = description;
    this.completed = false;
  }

  static toggleTaskStatus(index) {
    Task.tasks = Task.tasks.map((task) => {
      if (task.index === index) {
        task.completed = !task.completed;
      }
      return task;
    });
  }
}