const tasksContainer = document.querySelector(".tasks");
const taskTemplate = document.getElementById("task-template");
import { getTasks, saveTasks } from "./localStorage.js";

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
}
