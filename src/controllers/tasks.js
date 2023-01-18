const createTask = (req, res) => {
  console.log('CREAR TAREAS');
  return res.status(200).json({ message: 'Tarea creada' });
};

const getTasks = (req, res) => {
  console.log('Busca la lista de tareas');
  return res.status(200).json({ list: [], count: 0 });
};

const getTask = (req, res) => {
  console.log(`Busca la tarea ${req.params.id}`);
  return res.status(200).json({});
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