const { getCartbyuserId, clearCart } = require("../repository/cartRepository")
const { createNewOrder, getOrderByUserId, getOrderById, updateOrderStatus } = require("../repository/orderRepository")
const { findUser } = require("../repository/userRepository")
const {BadRequestError}=require('../utils/BadRequestError')
const InternalServerError = require("../utils/internalServerError")
const NotFoundError = require("../utils/notFoundError")

async function createOrder(userId,paymentmethod)
{
    const cart=await getCartbyuserId(userId,paymentmethod)
   
    const user=await findUser({_id:cart.user})
    if(!cart)
    {
        throw new NotFoundError("cart")
    }
    if(cart.items.length===0)
    {
        throw "cart is empty add some items in cart";
    }
    const orderObject ={};
    orderObject.user=cart.user;
    orderObject.items=cart.items.map(cartItem=>{
        return {product:cartItem.product._id,quantity: cartItem.quantity}
    });
    orderObject.status='ORDERED';
    orderObject.totalPrice=0;
    cart.items.forEach((cartItem)=>{
        orderObject.totalPrice+= cartItem.quantity*cartItem.product.price;
    })
    orderObject.address=user.address;
    orderObject.PaymentMethod=paymentmethod;
    const order=await createNewOrder(orderObject);

    if(!order)
    {
        throw new InternalServerError()
    }

    await clearCart(userId);
    return order;

}
async function getAllOrdersCreatedByUser(userId)
{
    
    const orders = await getOrderByUserId(userId);
    if(!orders)
    {
        throw new NotFoundError("orders")
    }
    return orders;

}
async function getOrderDetailsById(orderId)
{
    const order = await getOrderById(orderId);
    if(!order)
    {
        throw new NotFoundError("orders")
    }
    return order;
}

async function UpdateOrder(orderId,status)
{
    
    const order=await updateOrderStatus(orderId,status);
    if(!order)
    {
        throw new NotFoundError("orders")
    }
    return order;
}
module.exports={
    createOrder,getAllOrdersCreatedByUser,getOrderDetailsById,
    UpdateOrder
}