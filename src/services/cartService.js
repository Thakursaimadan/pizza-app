const { getCartbyuserId, clearCart } = require("../repository/cartRepository");
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
async function ModifyCart(userId,productId,shouldAdd=true) {
    const quantity_value=(shouldAdd==true)?1:-1;
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
        //console.log(item.product,productId)
        if(item.product._id==productId)
        {
           if(shouldAdd)
           {
            if(product.quantity>=item.quantity+1)
                item.quantity+=quantity_value;
            else
            throw new BadRequestError(['product not available in stock'])
           }
           else
           {
            if(item.quantity>0)
            {
                item.quantity+=quantity_value;
                if(item.quantity==0)
                {
                    cart.items=cart.items.filter(item=>item.product._id!=productId)
                    foundproduct=true
                    return;  
                }
            }
            
            else
            throw new BadRequestError(['product not available in stock'])
           }
            
           foundproduct=true;
        }
    });
    if(!foundproduct)
    {
        if(shouldAdd)
        {
            cart.items.push({
                product:productId,
                quantity:1
            })
        }
        else{
            throw new NotFoundError('not found in the cart');
        }
        
    }
    await cart.save();
    return cart;

    
}
async function clearTheCart(userId)
{
    const res=await clearCart(userId);
    return res;
    
}
module.exports={
    getCart,ModifyCart,clearTheCart
}