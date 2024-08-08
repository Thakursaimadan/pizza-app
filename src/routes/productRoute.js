//resourse-user

const express=require('express');
const {CreateProduct, getProduct, deleteProduct} = require('../controllers/productController');
const uploader = require('../middlewares/multermiddleware');
const { isLoggedIn, isAdmin } = require('../validation/authValidator');

//we have to intialise a router objext to add routes in a new file
//routers are used for segregating your routes in different modules

const productRouter=express.Router();

productRouter.post('/',isLoggedIn,isAdmin,uploader.single('productImage'),CreateProduct)

productRouter.get('/:id',getProduct)

productRouter.delete('/:id',deleteProduct)


module.exports={productRouter} //exporing the router