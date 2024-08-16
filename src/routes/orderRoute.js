const express=require('express');
const { isLoggedIn } = require('../validation/authValidator');
const { createTheOrder } = require('../controllers/orderController');

const orderRouter=express.Router();

orderRouter.post('/',isLoggedIn,createTheOrder)


module.exports={orderRouter}