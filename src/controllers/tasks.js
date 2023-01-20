const database = require('../models');

const createTask = (req, res) => {
  console.log('CREAR TAREAS');
  const task = req.body;
  const createdTask = database.tasks.create(task)
  return res.status(200).json(createdTask);
};

const getTasks = (req, res) => {
  console.log('Busca la lista de tareas');
  const taskList = database.tasks.fetchAll()
  return res.status(200).json({ list: taskList, count: taskList.length });
};

const getTask = (req, res) => {
  console.log(`Busca la tarea ${req.params.id}`);
  const searchTask = database.tasks.fetch(req.params.id)
  console.log(searchTask);
  return res.status(200).json(searchTask);
};

const updateTask = (req, res) => {
  console.log(`Actualiza la tarea ${req.params.id}`);
  return res.status(200).json({});
};

const deleteTask = (req, res) => {
  console.log(`Borra la tarea ${req.params.id}`);
  return res.status(200).json({ message: 'Tarea eliminada' });
};

module.exports = {
  createTask,
  getTasks,
  getTask, 
  updateTask,
  deleteTask,
}