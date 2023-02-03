const db = require('./db')

const createTask = (task) => {

  return taskToCreate;
};

const deleteTask = (id) => {

  return deletedTask;
};

const fetchTask = (id) => {
  
  return task;
};

const fetchTasks = async () => {
  const tasks = await db.selectAllTasks()
  return tasks;
};

const updateTask = (id, values) => {

  return updatedTask;
};

module.exports = {
  create: createTask,
  fetch: fetchTask,
  fetchAll: fetchTasks,
  update: updateTask,
  delete: deleteTask
}
