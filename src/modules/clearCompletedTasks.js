const clearCompletedTasks = (tasks) => {
  const remainingTasks = tasks.taskArray.filter((task) => task.complete);
  remainingTasks.forEach((task) => {
    tasks.removeTask(task.index - 1);
  });
  tasks.display();
};

export default clearCompletedTasks;
