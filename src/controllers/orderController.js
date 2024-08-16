const { createOrder } = require("../services/orderService");
const AppError = require("../utils/appError");

async function createTheOrder(req,res)
{
    try{
        const order=await createOrder(req.user.id,req.body.paymentMethod);
        return res.status(201).json({
            success:true,
            message:"successfully created order",
            error:{},
            data:order
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
            error:"could not able clear cart",
            data:{}
        })
    }
}
module.exports={
    createTheOrder
}