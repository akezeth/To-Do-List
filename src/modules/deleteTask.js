const deleteTask = (tasks, index) => {
  tasks.removeTask(index);
  tasks.display();
};

export default deleteTask;
