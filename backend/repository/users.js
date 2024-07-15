const usersModel = require('../models/users')

class Users {
  async findOne(query, projection = {}) {
    const user = await usersModel.findOne(query).select(projection)
    return user
  }

  async findUser(query) {
    return this.findOne(query)
  }

  async findUsers(query = {}, projection = {}) {
    const users = await usersModel.find(query).select(projection)
    return users
  }

  async createUser(userData) {
    const newUser = new usersModel(userData)
    await newUser.save()
    return newUser
  }

  async updateUser(id, updateData) {
    const updatedUser = await usersModel.findByIdAndUpdate(id, updateData, { new: true })
    return updatedUser
  }

  async deleteUser(id) {
    await usersModel.findByIdAndDelete(id)
  }
}

module.exports = Users