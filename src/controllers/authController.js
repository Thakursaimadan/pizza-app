const { loginUser } = require("../services/authService");

async function login(req,res)
{
    const loginpayload=req.body;
    try{
        const response=await loginUser(loginpayload);
        res.cookie("authToken",response,{httpOnly:true,secure:false,maxAge:7*24*60*60*1000})
        res.status(200).json({
            sucess:true,
            message:"logged in successfully",
            data:{},
            error:{}
        })
    }
    catch(err)
    {
        return res.status(err.statusCode).json({
            sucess:false,
            message:"logged in successfully",
            data:{},
            error:err
        })
    }
    
}
module.exports={login};