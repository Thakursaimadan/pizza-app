const Product = require("../schema/productSchema")

async function createProduct(productDetails){
    try{
        const response=await Product.create(productDetails)
        return response;

    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports={createProduct}

