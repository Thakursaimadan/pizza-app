const { createOrder, UpdateOrder, getOrderDetailsById, getAllOrdersCreatedByUser } = require("../services/orderService");
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
            return res.status(err.statusCode).json({
                sucess:false,
                message:" ",
                error:err.message,
                data:{}
            })

        }
        return res.status(500).json({
            sucess:false,
            message:" ",
            error:"could not place order",
            data:{}
        })
    }
}

async function getAllordersByUser(req,res)
{
    try{
        const order=await getAllOrdersCreatedByUser(req.user.id);
        return res.status(200).json({
            success:true,
            message:"successfully fetched orders",
            error:{},
            data:order
        })

    }
    catch(err)
    {
        console.log(err);
        if(err instanceof AppError)
        {
            return res.status(err.statusCode).json({
                sucess:false,
                message:" ",
                error:err.message,
                data:{}
            })

        }
        return res.status(500).json({
            sucess:false,
            message:" ",
            error:"could not able get all items of cart",
            data:{}
        })
    }
}
async function getOrder(req,res)
{
    try{
        const order=await getOrderDetailsById(req.params.orderId);
        return res.status(201).json({
            success:true,
            message:"successfully fetched order",
            error:{},
            data:order
        })

    }
    catch(err)
    {
        console.log(err);
        if(err instanceof AppError)
        {
            return res.status(err.statusCode).json({
                sucess:false,
                message:" ",
                error:err.message,
                data:{}
            })

        }
        return res.status(500).json({
            sucess:false,
            message:" ",
            error:"could not able clear cart",
            data:{}
        })
    }
} 

async function CancelOrder(req,res)
{
    try{
        const order=await UpdateOrder(req.params.orderId,'CANCELLED');
        return res.status(201).json({
            success:true,
            message:"successfully update order",
            error:{},
            data:order
        })

    }
    catch(err)
    {
        console.log(err);
        if(err instanceof AppError)
        {
            return res.status(err.statusCode).json({
                sucess:false,
                message:" ",
                error:err.message,
                data:{}
            })

        }
        return res.status(500).json({
            sucess:false,
            message:" ",
            error:"could not able clear cart",
            data:{}
        })
    }
}

async function ChangeOrderStatus(req,res)
{
    try{
        const order=await UpdateOrder(req.params.orderId,req.body.status);
        return res.status(201).json({
            success:true,
            message:"successfully update order",
            error:{},
            data:order
        })

    }
    catch(err)
    {
        console.log(err);
        if(err instanceof AppError)
        {
            return res.status(err.statusCode).json({
                sucess:false,
                message:" ",
                error:err.message,
                data:{}
            })

        }
        return res.status(500).json({
            sucess:false,
            message:" ",
            error:"could not able clear cart",
            data:{}
        })
    }
}
module.exports={
    createTheOrder,getAllordersByUser,getOrder,CancelOrder,ChangeOrderStatus
}