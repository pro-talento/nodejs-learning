const { Pool } = require('pg')
const pool = new Pool()
 
// SELECT * FROM tasks;
async function selectAllTasks() {
  const res = await pool.query('SELECT * FROM todos;')
  return res.rows
}

module.exports = {
  selectAllTasks: selectAllTasks
}
