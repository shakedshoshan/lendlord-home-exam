const Router = require('koa-router')
const router = new Router()

const ctrl =  require('../controllers/users')

router.get('/user/:id', ctrl.getUserById)

router.get('/users', ctrl.getAllUsers)

router.post('/users', ctrl.create)

router.put('/users/:id', ctrl.update)

router.delete('/users/:id', ctrl.delete)

router.get('/managers/:managerId/employees', ctrl.getManagerAndEmployees)

router.allowedMethods()

module.exports = router
