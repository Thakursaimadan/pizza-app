
const cloudinary=require('../config/cloudinaryconfig');

const fs=require('fs/promises');
const productRepo = require('../repository/productRepo');
const InternalServerError = require('../utils/internalServerError');
const NotFoundError = require('../utils/notFoundError');

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
            //console.log("iam here123")
            // console.log('Cloudinary Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME);
            // console.log('Cloudinary API Key:', process.env.CLOUDINARY_API_KEY);
            // console.log('Cloudinary API Secret:', process.env.CLOUDINARY_API_SECRET);
            console.log(err)

            throw new InternalServerError()
        }
        
    }

    //2.then use the url from cloudinary and other product details to add product in db

    
    const product=await productRepo.createProduct({...productDetails,
        ProductImage:productImage
    });
    return product;
}

async function getProductbyId(id)
{
    const product=await productRepo.getbyId(id);
    if(!product)
    {
        throw new NotFoundError('product')
    }
    return product
}
async function deleteProductbyId(id)
{
    const product=await productRepo.deletebyId(id);
    if(!product)
    {
        throw new NotFoundError('product')
    }
    return product;
}
module.exports={
    registerProduct,getProductbyId,deleteProductbyId
}