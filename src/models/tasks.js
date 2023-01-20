let tasks = [];

const createTask = (task) => {
  const taskToCreate = { ...task, id: new Date().getTime() };
  tasks = tasks.concat(taskToCreate);
  return taskToCreate;
};

const deleleTask = (id) => {

};

const fetchTask = (id) => {

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
