import { getTasks, saveTasks } from './localStorage.js';

const tasksContainer = document.querySelector('.tasks');
const taskTemplate = document.getElementById('task-template');

export default class Tasks {
  constructor() {
    this.getData();
  }

  getData() {
    this.taskArray = getTasks();
  }

  addTask(task) {
    this.taskArray.push(task);
    saveTasks(this.taskArray);
  }

  removeTask(index) {
    this.taskArray.splice(index, 1);
    for (let i = 0; i < this.taskArray.length; i += 1) {
      this.taskArray[i].index = i + 1;
    }
    saveTasks(this.taskArray);
  }

  display() {
    tasksContainer.innerHTML = '';
    this.taskArray.forEach((task) => {
      const taskElement = document.importNode(taskTemplate.content, true);
      const checkbox = taskElement.querySelector('input');
      checkbox.id = task.index;
      checkbox.checked = task.complete;
      const label = taskElement.querySelector('label');
      label.htmlFor = task.index;
      label.append(task.name);
      tasksContainer.appendChild(taskElement);
    });
  }
}
