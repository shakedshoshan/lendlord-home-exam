const Router = require('koa-router')
const router = new Router()

const ctrl =  require('../controllers/users')

router.get('/user/:id', ctrl.getUserById)

router.allowedMethods()

module.exports = router
