const Product = require("../schema/productSchema");
const BadRequestError = require("../utils/BadRequestError");
const InternalServerError = require("../utils/internalServerError");

async function createProduct(productDetails){
    try{
        const response=await Product.create(productDetails)
        return response;

    }
    catch(err)
    {
        if(err.name==='ValidationError'){
            const errormsglist=Object.keys(err.errors).map((property)=>{
                return err.errors[property].message;
            })
            throw new BadRequestError(errormsglist)
        }
        console.log(err)
            throw new InternalServerError();
    }
}

async function getbyId(id)
{
    try{

        const response = await Product.findById(id);
        return response;

    }
    catch(err)
    {
        console.log(err)
        throw new InternalServerError();

    }
   
}
async function deletebyId(id)
{
    try{

        const response = await Product.findByIdAndDelete(id);
        //console.log("iam in delete",response)
        return response;

    }
    catch(err)
    {
        console.log(err)
        throw new InternalServerError();
    }
}

module.exports={createProduct,getbyId,deletebyId}

