import Task from './Task-Class.js';

const newTaskInput = document.querySelector('[data-new-task-Input]');

const newTask = (tasks) => {
  if (newTaskInput.value === null || newTaskInput.value === '') return;
  const newTask = new Task(
    tasks.taskArray.length + 1,
    newTaskInput.value,
    false,
  );
  tasks.addTask(newTask);
  tasks.display();
  newTaskInput.value = '';
};

export default newTask;
