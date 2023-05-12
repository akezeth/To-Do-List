const editTask = (tasks) => {
  const taskName = document.querySelectorAll('.task-name');
  for (let i = 0; i < tasks.taskArray.length; i += 1) {
    // event listener for using the keyboard to edit the description of the task.
    taskName[i].addEventListener('keydown', (e) => {
      // if the user press Enter or press esc.
      if (e.keyCode === 13) {
        e.preventDefault();
        if (taskName[i].innerHTML === '') {
          alert('Please add task discription!');
          taskName[i].focus();
        }
        tasks.editTask(i, taskName[i].innerHTML);
        taskName[i].blur();
      }
      // if the user press esc
      const taskElementName = tasks.taskArray[i].name;
      if (e.keyCode === 27) {
        taskName[i].innerHTML = taskElementName;
        // console.log(taskele);
        taskName[i].blur();
      }
    });
    // event listener for clicking outside the description of the task.
    const deleteIcon = document.querySelector('.delete-icon');
    const deleteButton = document.querySelector('.delete-btn');
    document.addEventListener('click', (e) => {
      if (
        taskName[i] !== e.target
        && e.target !== deleteIcon
        && e.target !== deleteButton
      ) {
        if (taskName[i].innerHTML === '') {
          alert('Please add task discription!');
          taskName[i].focus();
        } else {
          tasks.editTask(i, taskName[i].innerHTML);
        }
      }
    });
  }
};

export default editTask;
