//resourse-user

const express=require('express');
const { login } = require('../controllers/authController');

//we have to intialise a router objext to add routes in a new file
//routers are used for segregating your routes in different modules

const authRouter=express.Router();

authRouter.post('/login',login)

module.exports={authRouter} //exporing the router