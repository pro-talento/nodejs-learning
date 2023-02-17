const db = require('./db')

async function createUserModel(newUser) {
  const createdUser = await db.users.create(newUser)
  //...
  return createdUser
}

async function loginUserModel(credentials) {
  const userToLog = await db.users.getByEmail(credentials.email)

  if (userToLog.password !== credentials.password) {
    return null
  }
  
  return userToLog
}

module.exports = {
  create: createUserModel,
  login: loginUserModel
}