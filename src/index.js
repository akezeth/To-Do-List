import './style.css';
import { saveTasks } from './modules/localStorage.js';
import Tasks from './modules/tasks.js';
import newTask from './modules/newTask.js';
import clearCompletedTasks from './modules/clearCompletedTasks.js';
import deleteTask from './modules/deleteTask.js';
import editTask from './modules/editTask.js';

const addTaskBtn = document.querySelector('#addTaskBtn');
const refreshBtn = document.querySelector('#refreshBtn');
const tasks = new Tasks();

// display all tasks which are stored in the local storage
tasks.display();

// Add new task
const newTaskForm = document.querySelector('[data-new-task-form]');
newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newTask(tasks);
});
addTaskBtn.addEventListener('click', () => {
  newTask(tasks);
});
// EventListener for the checkbox
const tasksContainer = document.querySelector('.tasks');
tasksContainer.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'input') {
    // select the task whose checkbox has been clicked.
    const selectedTask = tasks.taskArray.find(
      (task) => task.index === parseInt(e.target.id, 10),
    );
    // toggle checked value of the checkbox.
    selectedTask.complete = e.target.checked;
    // toggle contentEditable value for the label of the clicked checkbox.
    const siblings = e.target.parentElement.children;
    siblings[1].contentEditable = !selectedTask.complete;
    // update the localStorage
    saveTasks(tasks.taskArray);
  }
  // event listener for clicking the delete button.
  if (e.target.tagName.toLowerCase() === 'i') {
    const taskElement = e.target.parentElement.parentElement;
    const taskElementIndex = parseInt(taskElement.children[0].children[0].id, 10) - 1;
    deleteTask(tasks, taskElementIndex);
  }
  // event listener to edit task description.
  if (e.target.tagName.toLowerCase() === 'label') {
    editTask(tasks);
  }
});
// clear all completed tasks
const clearBtn = document.querySelector('[data-clear-completed-task]');
clearBtn.addEventListener('click', () => {
  clearCompletedTasks(tasks);
});
refreshBtn.addEventListener('click', () => {
  clearCompletedTasks(tasks);
});
