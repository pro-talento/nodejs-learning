const db = require('./db')

async function createUserModel(newUser) {
  const createdUser = await db.users.create(newUser)
  //...
  return createdUser
}

module.exports = {
  create: createUserModel
}