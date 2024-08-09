const { getCartbyuserId } = require("../repository/cartRepository");
const NotFoundError = require("../utils/notFoundError");

async function getCart(userId)
{
    const cart=await getCartbyuserId(userId);
    if(!cart)
    {
        throw new NotFoundError('cart');
    }
    return cart;
}
module.exports={
    getCart
}