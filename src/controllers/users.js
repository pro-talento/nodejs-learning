const models = require('../models')

async function createUser(req, res) {
  const user = await models.users.create(req.body)
  return res.status(200).json(user)
}

async function loginUser(req, res) {
  const user = await models.users.login(req.body)

  if (!user) {
    return res.status(404).json({ message: 'Not Authorized :('})
  }
  return res.status(200).json(user)
}

module.exports = {
  create: createUser,
  login: loginUser
}