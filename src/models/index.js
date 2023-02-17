const tasksModels = require('./tasks-sql');
const usersModels = require('./users');

module.exports = {
  tasks: tasksModels,
  users: usersModels,
}