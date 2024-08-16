const Order = require("../schema/orderSchema");
const InternalServerError = require("../utils/internalServerError");

async function createNewOrder(orderDetails)
{
    try{

        const order=await Order.create(orderDetails); 
        return order;

    }catch(err)
    {
        console.log(err);
        throw new InternalServerError();
    }
}
module.exports={
    createNewOrder
}