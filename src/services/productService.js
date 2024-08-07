
const cloudinary=require('../config/cloudinaryconfig');
const Product = require('../schema/productSchema');
const fs=require('fs/promises')
async function registerProduct(productDetails) {

    //1.we should check if an image is coming to create product the we should upload it in cloudinary
    const imagePath=productDetails.imagePath;
    if(imagePath)
    {
        try{
            const cloudinaryResponse=await cloudinary.uploader.upload(imagePath);
            var productImage=cloudinaryResponse.secure_url
            await fs.unlink(imagePath);
        }
        catch(err)
        {
            console.log(err)
            throw {reason:'not able create product',statusCode:500}
        }
        
    }

    //2.then use the url from cloudinary and other product details to add product in db
    const product=await Product.create({...productDetails,
        productImage:productImage
    });

    if(!product)
    {
        throw {reason:'not able create product',statusCode:500}
    }
    return product;
}
module.exports={
    registerProduct
}