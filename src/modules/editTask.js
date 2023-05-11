const editTask = (tasks) => {
  for (let i = 0; i < tasks.taskArray.length; i += 1) {
    const taskName = document.querySelectorAll('.task-name');
    taskName[i].addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });
    taskName[i].addEventListener('input', () => {
      tasks.editTask(i, taskName[i].innerHTML);
    });
  }
};

export default editTask;
