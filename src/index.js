import "./style.css";
import tasks from "./modules/tasks";

const displayTasks = () => {
  tasks.forEach((task) => {
    const taskContent = `
      <li class="taskContent flex list">
        <div class="taskInfo flex">
          <input type="checkbox" class="completed-btn" ${
            task.completed ? "checked" : ""
          }>
          <p>${task.description}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical task-icon cross"></i>
      </li>
    `;
    document.querySelector(".tasks").innerHTML += taskContent;
  });
};

displayTasks();
