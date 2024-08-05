const { loginUser } = require("../services/authService");

async function login(req,res)
{
    const loginpayload=req.body;
    try{
        const response=await loginUser(loginpayload);
        res.status(200).json({
            sucess:true,
            message:"logged in successfully",
            data:response,
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