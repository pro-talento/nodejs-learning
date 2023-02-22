const db = require('./db')

async function createUserModel(newUser) {
  
  // TODO: Cifrar contraseña
  const createdUser = await db.users.create(newUser)
  return createdUser
}

async function loginUserModel(credentials) {
  const userToLog = await db.users.getByEmail(credentials.email)

  // TODO: Cifrar contraseña
  if (userToLog.password !== credentials.password) {
    return null
  }
  
  return userToLog
}

module.exports = {
  create: createUserModel,
  login: loginUserModel
}