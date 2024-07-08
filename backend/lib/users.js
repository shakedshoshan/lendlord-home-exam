const UsersRepo = require('../repository/users')


class Users {
  async initialize() {
    this.repo = new UsersRepo()
  }

  async findUser(query, projection = {}) {
    const user = await this.repo.findOne(query)
    return user
  }
}


module.exports = Users