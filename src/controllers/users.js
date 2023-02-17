const models = require('../models')

async function createUser(req, res) {
  const user = await models.users.create(req.body)
  return res.status(200).json(user)
}

module.exports = {
  create: createUser
}