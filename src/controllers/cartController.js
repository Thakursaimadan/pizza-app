const { getCart } = require("../services/cartService");
const AppError = require("../utils/appError");


async function getCartbyUser(req,res)
{
    try{
        const cart=await getCart(req.user.id);
        return res.staus(200).json({
            sucess:true,
            message:"successfully fetched cart",
            error:{},
            data:cart
        })
    }
    catch(err)
    {
        console.log(err);
        if(err instanceof AppError)
        {
            return res.staus(err.statusCode).json({
                sucess:false,
                message:" ",
                error:err.message,
                data:{}
            })

        }
        return res.staus(500).json({
            sucess:false,
            message:" ",
            error:"some thing went wrong",
            data:{}
        })
    }

}
module.exports={getCartbyUser}