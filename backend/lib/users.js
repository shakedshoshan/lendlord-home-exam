const UsersRepo = require('../repository/users')


class Users {
  async initialize() {
    this.repo = new UsersRepo()
  }

  async findUser(query, projection = {}) {
    const user = await this.repo.findOne(query)
    return user
  }

  async findUsers(query = {}, projection = {}) {
    const users = await this.repo.findUsers(query, projection)
    return users
  }

  async createUser(userData) {
    const newUser = await this.repo.createUser(userData)
    return newUser
  }

  async updateUser(id, updateData) {
    const updatedUser = await this.repo.updateUser(id, updateData)
    return updatedUser
  }

  async deleteUser(id) {
    await this.repo.deleteUser(id)
  }

  async getManagerAndEmployees(managerId) {
    const manager = await this.repo.findOne({ _id: managerId })
    if (!manager) {
      throw new Error('Manager not found')
    }
    const employees = await this.repo.findUsers({ managerId: managerId })
    return { manager, employees }
  }
}


module.exports = Users