const editTask = (tasks) => {
  const taskName = document.querySelectorAll('.task-name');
  for (let i = 0; i < tasks.taskArray.length; i += 1) {
    // event listener for using the keyboard to edit the description of the task.
    taskName[i].addEventListener('keydown', (e) => {
      // if the user press Enter or press esc.
      if (e.keyCode === 13) {
        e.preventDefault();
        if (taskName[i].innerHTML === '') {
          tasks.display();
        } else {
          tasks.editTask(i, taskName[i].innerHTML);
          taskName[i].blur();
        }
      }
      // if the user press esc
      if (e.keyCode === 27) {
        tasks.display();
      }
    });
  }
};

export default editTask;
