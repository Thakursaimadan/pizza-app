const express=require('express');
const { getCartbyUser, ModifyProductToCart, clearProductsinCart} = require('../controllers/cartController');
const { isLoggedIn } = require('../validation/authValidator');

const cartRouter=express.Router();

cartRouter.get('/',isLoggedIn,getCartbyUser);

cartRouter.post('/:operation/:productId',isLoggedIn,ModifyProductToCart)

cartRouter.delete('/products',isLoggedIn,clearProductsinCart)

module.exports={cartRouter}