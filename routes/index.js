const express = require('express')
 
const passport = require('passport')

const routes = express.Router()

const registerController = require('../Controller/registerLoginController')
const categoryController = require('../Controller/categoryController')


// Register And login
routes.post('/insertdata',registerController.insertdata)
routes.get('/viewRegisterdata',passport.authenticate('jwt', { session: false }),registerController.viewdata)
routes.delete('/deleteRegisterdata',registerController.deletedata)
routes.put('/editRegisterdata',registerController.editdata)
routes.post('/login',registerController.login)

//Category
routes.post('/addcategory',categoryController.addcategory)

module.exports = routes

