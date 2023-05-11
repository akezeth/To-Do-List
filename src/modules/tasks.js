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
}
