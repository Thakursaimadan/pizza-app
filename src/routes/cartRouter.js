const express=require('express');
const { getCartbyUser, addProductToCart } = require('../controllers/cartController');
const { isLoggedIn } = require('../validation/authValidator');

const cartRouter=express.Router();

cartRouter.get('/',isLoggedIn,getCartbyUser);

cartRouter.post('/add/:productId',isLoggedIn,addProductToCart)

module.exports={cartRouter}