const { Pool } = require('pg')
const pool = new Pool()
 
// Obtener lista de tareas
async function selectAllTasks() {
  const res = await pool.query('SELECT * FROM todos ORDER BY id;')
  return res.rows
}

// Crear tarea
async function createTask(task) {
  const res = await pool.query("INSERT INTO todos (title) VALUES ($1) RETURNING *;", [task])
  return res.rows[0]
}

// Obtener una tarea
async function getTask(taskId) {
  const res = await pool.query("SELECT * FROM todos WHERE id=$1", [taskId])
  return res.rows[0]
}

// Actualizar tarea
async function updateTask(taskId, taskChanges) {
  const { title, completed } = taskChanges

  let res = null

  // TODO: Hacer una buena implementación del nombre de columna dinámico
  // TODO: Evitar cambios si la data cambia
  if (taskId) {
    if (title !== undefined) {
      res = await pool.query(
        `UPDATE todos SET ${'title'}=$2 WHERE id=$1 RETURNING *;`, 
        [taskId, title]
      )
    }
  
    if (completed !== undefined) {
      res = await pool.query(
        `UPDATE todos SET ${'completed'}=$2 WHERE id=$1 RETURNING *;`, 
        [taskId, completed]
      )
    }
  }

  if (res) {
    return res.rows[0]
  }
  return null
}

// Delete task
async function deleteTask(taskId) {
  // TODO: Cambiar valor default de columna completed de tabla todos
  const res = await pool.query('DELETE FROM todos WHERE id=$1 RETURNING *;', [taskId])
  return res.rows[0]
}

async function createUser(newUser) {
  const { email, password, name } = newUser
  
  const res = await pool.query(`
      INSERT INTO users (email, password, name)
      VALUES ($1, $2, $3) 
      RETURNING *;`, 
    [email, password, name]
  );

  return res.rows[0]
}

async function getUserByEmail(email) {
  const res = await pool.query(`SELECT * FROM users WHERE email=$1`, [email])
  return res.rows[0]
}

module.exports = {
  selectAllTasks: selectAllTasks,
  tasks: {
    create: createTask,
    get: getTask,
    update: updateTask,
    delete: deleteTask,
  }, 
  users: {
    create: createUser,
    getByEmail: getUserByEmail
  }
}
