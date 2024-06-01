const express =require('express')

const userController= require('../Controllers/userController')

const serviceController=require('../Controllers/serviceController')

const jwtMiddleware=require('../Middlewares/jwtMiddleware')


const router = express.Router()


//Api call for register

router.post('/register',userController.register)

//Api call for login
router.post('/login', userController.login)

//Api call for add service
router.post('/service/add-service',jwtMiddleware,serviceController.addService)

//Get all user service
router.get('/service/all-user-service',jwtMiddleware,serviceController.getAllUserservice)

//Get a user service
router.get('/service/a-user-service',jwtMiddleware,serviceController.getAUserService)

//Delete a user service
router.delete('/service/delete-user-service/:pid',jwtMiddleware,serviceController.deleteUserService)

//update user service
router.put('/service/update-user-service/:sid',jwtMiddleware,serviceController.updateUserService)

//get all user
router.get('/user/all-user',jwtMiddleware,userController.getAllUser)

//Email approve service
router.post('/service/approve-service',jwtMiddleware,serviceController.approveService)






module.exports= router