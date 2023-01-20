let tasks = [];

const createTask = (task) => {
  const taskToCreate = { ...task, id: new Date().getTime() };
  tasks = tasks.concat(taskToCreate);
  return taskToCreate;
};

const deleleTask = (id) => {

};

const fetchTask = (id) => {
  console.log('Aqui va el id');
  console.log(id);
  console.log(tasks);
  const searchTask = tasks.find(task => task.id == id)
  console.log(searchTask);
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
