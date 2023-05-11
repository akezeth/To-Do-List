import "./style.css";
import { saveTasks } from "./modules/localStorage.js";
import Tasks from "./modules/Tasks.js";
import newTask from "./modules/newTask.js";
import clearCompletedTasks from "./modules/clearCompletedTasks.js";
import editTask from "./modules/editTask.js";

const addTaskBtn = document.querySelector("#addTaskBtn");
const refreshBtn = document.querySelector("#refreshBtn");
const tasks = new Tasks();

tasks.display();
// Add new task
const newTaskForm = document.querySelector("[data-new-task-form]");
newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  newTask(tasks);
});
addTaskBtn.addEventListener("click", () => {
  newTask(tasks);
});
// EventListener to check completed tasks
const tasksContainer = document.querySelector(".tasks");
tasksContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedTask = tasks.taskArray.find(
      (task) => task.index === parseInt(e.target.id, 10)
    );
    selectedTask.complete = e.target.checked;
    saveTasks(tasks.taskArray);
  }
});
// clear all completed tasks
const clearBtn = document.querySelector("[data-clear-completed-task]");
clearBtn.addEventListener("click", () => {
  clearCompletedTasks(tasks);
});
refreshBtn.addEventListener("click", () => {
  clearCompletedTasks(tasks);
});

editTask(tasks);
