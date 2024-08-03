const express=require('express');
const { getCartbyId } = require('../controllers/cartController');

const cartRouter=express.Router();

cartRouter.get('/:id',getCartbyId);

module.exports={cartRouter}