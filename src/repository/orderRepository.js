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
async function getOrderByUserId(userId)
{
    try{
        const orders=await Order.find({user:userId}).populate("items.product");
        return orders;
    }catch(err)
    {
        console.log(err);
        throw new InternalServerError();
    }
}
async function getOrderById(orderId)
{
    try{
        const order=await Order.findById({orderId}).populate("items.product");
        return order;
    }catch(err)
    {
        console.log(err);
        throw new InternalServerError();
    }
}
async function updateOrderStatus(orderId,status)
{
    try{
        const order=await Order.findByIdAndUpdate(orderId,{status:status},{new:true});
        return order
    }
    catch(err)
    {
        console.log(err);
        throw new InternalServerError();
    }
} 
module.exports={
    createNewOrder,getOrderById,getOrderByUserId,updateOrderStatus
}