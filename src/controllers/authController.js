const { loginUser } = require("../services/authService");

async function login(req,res)
{
    const loginpayload=req.body;
    try{
        console.log("in auth controller")
        const response=await loginUser(loginpayload);
        console.log("hello res",response)
        res.cookie("authToken",response.token,{httpOnly:true,secure:false,maxAge:7*24*60*60*1000})
      //  console.log("hello 545646")
        res.status(200).json({
            sucess:true,
            message:"logged in successfully",
            data:{},
            error:{}
        })
    }
    catch(err)
    {
        return res.status(401).json({
            sucess:false,
            message:"something happened",
            data:{},
            error:err
        })
    }
    
}
async function logout(req,res)
{
    res.cookie('authToken','',{
        httpOnly:true,
        secure:false,
        maxAge:7*24*60*60*1000
    });
    return res.status(200).json({
        success:true,
        message:"logged out successfully",
        data:{},
        error:{}
    })
}
module.exports={login,logout};