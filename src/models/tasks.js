let tasks = [];

const createTask = (task) => {
  const taskToCreate = { ...task, id: new Date().getTime() };
  tasks = tasks.concat(taskToCreate);
  return taskToCreate;
};

const deleleTask = () => {

};

const fetchTask = () => {

};

const fetchTasks = () => {
  return tasks;
};

const updateTask = () => {

};

module.exports = {
  create: createTask,
  fetch: fetchTask,
  fetchAll: fetchTasks,
  update: updateTask,
  delete: deleleTask
}
