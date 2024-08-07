
const cloudinary=require('../config/cloudinaryconfig');

const fs=require('fs/promises');
const productRepo = require('../repository/productRepo');

async function registerProduct(productDetails) {

    //1.we should check if an image is coming to create product the we should upload it in cloudinary
    const imagePath=productDetails.imagePath;
    if(imagePath)
    {
        try{
            const cloudinaryResponse=await cloudinary.uploader.upload(imagePath);
            var productImage=cloudinaryResponse.secure_url
            try {
                await fs.unlink(imagePath);
                console.log(`Successfully deleted ${imagePath}`);
            } catch (err) {
                console.error(`Error deleting file ${imagePath}:`, err);
            }
            
        }
        catch(err)
        {
            console.log("iam here123")
            // console.log('Cloudinary Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME);
            // console.log('Cloudinary API Key:', process.env.CLOUDINARY_API_KEY);
            // console.log('Cloudinary API Secret:', process.env.CLOUDINARY_API_SECRET);
            console.log(err)

            throw {reason:'not able create product',statusCode:500}
        }
        
    }

    //2.then use the url from cloudinary and other product details to add product in db

    
    console.log("product Image",productImage)
    const product=await productRepo.createProduct({...productDetails,
        ProductImage:productImage
    });
    console.log(product)

    if(!product)
    {
        
        throw {reason:'not able create product',statusCode:500}
    }
    return product;
}
module.exports={
    registerProduct
}