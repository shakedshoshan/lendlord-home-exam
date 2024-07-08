const { ObjectId } = require('mongodb')
const Users = require('../lib/users')
const users = new Users()

/**
 * Gets user by id
 */
exports.getUserById = async ctx => {
  const { id } = ctx.params
  try {
    console.log(1)
    const user = await users.findUser({ _id: new ObjectId(id) })
    
    ctx.status = 200
    ctx.body = user  
  } catch (err) {
    ctx.status = err.status || 500
    ctx.message = err.message || 'Internal server error'
  }
}

async function initialize() {
  await users.initialize();
}


initialize()