const { ObjectId } = require('mongodb')
const Users = require('../lib/users')
const users = new Users()

/**
 * Gets all users
 */
exports.getAllUsers = async ctx => {
  try {
    const allUsers = await users.findUsers({})
    ctx.status = 200
    ctx.body = allUsers
  } catch (err) {
    ctx.status = err.status || 500
    ctx.message = err.message || 'Internal server error'
  }
}

/**
 * Gets user by id
 */
exports.getUserById = async ctx => {
  const { id } = ctx.params
  try {
    const user = await users.findUser({ _id: new ObjectId(id) })
    ctx.status = 200
    ctx.body = user  
  } catch (err) {
    ctx.status = err.status || 500
    ctx.message = err.message || 'Internal server error'
  }
}

/**
 * Updates a user
 */
exports.update = async ctx => {
  const { id } = ctx.params
  const updateData = ctx.request.body
  try {
    const updatedUser = await users.updateUser(id, updateData)
    ctx.status = 200
    ctx.body = updatedUser
  } catch (err) {
    ctx.status = err.status || 500
    ctx.message = err.message || 'Internal server error'
  }
}

/**
 * Creates a new user
 */
exports.create = async ctx => {
  const userData = ctx.request.body
  try {
    const newUser = await users.createUser(userData)
    ctx.status = 201
    ctx.body = newUser
  } catch (err) {
    ctx.status = err.status || 500
    ctx.message = err.message || 'Internal server error'
  }
}

/**
 * Deletes a user
 */
exports.delete = async ctx => {
  const { id } = ctx.params
  try {
    await users.deleteUser(id)
    ctx.status = 204
  } catch (err) {
    ctx.status = err.status || 500
    ctx.message = err.message || 'Internal server error'
  }
}

/**
 * Gets a manager and their employees
 */
exports.getManagerAndEmployees = async ctx => {
  const { managerId } = ctx.params
  try {
    const manager = await users.findUser({ _id: new ObjectId(managerId) })
    if (!manager) {
      ctx.status = 404
      ctx.message = 'Manager not found'
      return
    }
    const employees = await users.findUsers({ managerId: managerId })
    ctx.status = 200
    ctx.body = {
      manager,
      employees
    }
  } catch (err) {
    ctx.status = err.status || 500
    ctx.message = err.message || 'Internal server error'
  }
}

async function initialize() {
  await users.initialize();
}

initialize()