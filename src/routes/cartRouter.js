const express=require('express');
const { getCartbyUser } = require('../controllers/cartController');
const { isLoggedIn } = require('../validation/authValidator');

const cartRouter=express.Router();

cartRouter.get('/',isLoggedIn,getCartbyUser);

module.exports={cartRouter}