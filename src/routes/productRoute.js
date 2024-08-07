//resourse-user

const express=require('express');
const CreateProduct = require('../controllers/productController');
const uploader = require('../middlewares/multermiddleware');

//we have to intialise a router objext to add routes in a new file
//routers are used for segregating your routes in different modules

const productRouter=express.Router();

productRouter.post('/',uploader.single('productImage'),CreateProduct)

module.exports={productRouter} //exporing the router