const Cart=require('../schema/cartSchema')
const InternalServerError=require('../utils/internalServerError')

async function createcart(userId){
    try{
        const newcart=await Cart.create({
            user:userId
        });
        return newcart;
    }catch(error)
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

async function getCartbyuserId(userId)
{
    try{
        const cart=await Cart.findOne({user:userId}).populate('items.product');
        return cart;

    }
    catch(err)
    {
        console.log(err);
        throw new InternalServerError()
    }
}

module.exports={
    createcart,getCartbyuserId
}