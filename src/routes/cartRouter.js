const express=require('express');
const { getCartbyUser, ModifyProductToCart} = require('../controllers/cartController');
const { isLoggedIn } = require('../validation/authValidator');

const cartRouter=express.Router();

cartRouter.get('/',isLoggedIn,getCartbyUser);

cartRouter.post('/:operation/:productId',isLoggedIn,ModifyProductToCart)

module.exports={cartRouter}