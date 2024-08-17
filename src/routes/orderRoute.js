const express=require('express');
const { isLoggedIn, isAdmin } = require('../validation/authValidator');
const { createTheOrder, getAllordersByUser, getOrder, CancelOrder, ChangeOrderStatus } = require('../controllers/orderController');

const orderRouter=express.Router();

orderRouter.post('/',isLoggedIn,createTheOrder)
orderRouter.get('/',isLoggedIn,getAllordersByUser)
orderRouter.get('/:orderId',isLoggedIn,getOrder)
orderRouter.put('/:orderId/cancel',isLoggedIn,CancelOrder)
orderRouter.put('/:orderId/status',isLoggedIn,isAdmin,ChangeOrderStatus)

module.exports={orderRouter}