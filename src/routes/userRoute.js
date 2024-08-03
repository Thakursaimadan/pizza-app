//resourse-user

const express=require('express');
const { createUser } = require('../controllers/userController');

//we have to intialise a router objext to add routes in a new file
//routers are used for segregating your routes in different modules

const userRouter=express.Router();

userRouter.post('/',createUser)

module.exports={userRouter} //exporing the router