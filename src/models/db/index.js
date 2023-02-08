const { Pool } = require('pg')
const pool = new Pool()
 
// SELECT * FROM tasks;
async function selectAllTasks() {
  const res = await pool.query('SELECT * FROM todos;')
  return res.rows
}

// INSERT INTO todos (title) VALUES ('Hacer ejercicio');
async function createTask(task) {
  const res = await pool.query("INSERT INTO todos (title) VALUES ($1) RETURNING *;", [task])
  return res.rows[0]
}

async function getTask(taskId) {
  const res = await pool.query("SELECT * FROM todos WHERE id=$1", [taskId])
  return res.rows[0]
}

module.exports = {
  selectAllTasks: selectAllTasks,
  tasks: {
    create: createTask,
    get: getTask,
  }
}
