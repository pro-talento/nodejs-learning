let tasks = [];

const createTask = (task) => {
  const taskToCreate = { ...task, id: new Date().getTime() };
  tasks = tasks.concat(taskToCreate);
  return taskToCreate;
};

const deleleTask = (id) => {
  const deleteTask = tasks.filter((task) => task.id != id);
  const newTasks = [...deleteTask];
  return newTasks;
};

const fetchTask = (id) => {
  const searchTask = tasks.find(task => task.id == id)
  return searchTask;
};

const fetchTasks = () => {
  return tasks;
};

const updateTask = (id) => {
  

};

module.exports = {
  create: createTask,
  fetch: fetchTask,
  fetchAll: fetchTasks,
  update: updateTask,
  delete: deleleTask
}
