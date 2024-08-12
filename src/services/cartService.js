const { getCartbyuserId } = require("../repository/cartRepository");
const { getbyId } = require("../repository/productRepo");
const BadRequestError = require("../utils/BadRequestError");
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
async function addToCart(userId,productId) {
    const cart= await getCart(userId);
  //  console.log("got cart of the user",cart.id)

    const product=await getbyId(productId);
  //  console.log("got product",product)

    if(!product)
    {
        throw new NotFoundError('product');
    }
    if(!product.instock){
        throw new BadRequestError(['product not available in stock'])
    }

    //may be the product is already in the cart
    let foundproduct=false;
    cart.items.forEach(item=>{
        if(item.product===productId)
        {
            item.quantity+=1;
            foundproduct=true;
        }
    });
    if(!foundproduct)
    {
        cart.items.push({
            product:productId,
            quantity:1
        })
    }
    await cart.save();
    product.quantity-=1;
    if(product.quantity===0)
        product.instock=false;

    await product.save();

    return cart;

    
}
module.exports={
    getCart,addToCart
}