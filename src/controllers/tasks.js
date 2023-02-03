const database = require('../models');

const createTask = (req, res) => {
  console.log('CREAR TAREAS');
  const task = req.body;
  const createdTask = database.tasks.create(task)
  return res.status(200).json(createdTask);
};

const getTasks = async (req, res) => {
  console.log('Busca la lista de tareas');
  const taskList = await database.tasks.fetchAll()
  return res.status(200).json({ list: taskList, count: taskList.length });
};

const getTask = (req, res) => {
  console.log(`Busca la tarea ${req.params.id}`);
  const task = database.tasks.fetch(req.params.id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  return res.status(200).json(task);
};

const updateTask = (req, res) => {
  console.log(`Actualiza la tarea ${req.params.id}`);
  console.log(req.body)
  const updatedTask = database.tasks.update(req.params.id, req.body);
  if (!updatedTask) {
    return res.status(404).json({ message: 'Task not found' });
  }
  return res.status(200).json(updatedTask);
};

const deleteTask = (req, res) => {
  console.log(`Borra la tarea ${req.params.id}`);
  const deletedTask = database.tasks.delete(req.params.id);
  if (!deletedTask) {
    return res.status(404).json({ message: 'Task not found' });
  }
  return res.status(200).json(deletedTask);
};

module.exports = {
  createTask,
  getTasks,
  getTask, 
  updateTask,
  deleteTask,
}