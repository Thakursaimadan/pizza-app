const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverconfig");
const UnauthorisedError = require("../utils/unouthoroisedError");

//middle ware

async function isLoggedIn(req,res,next)
{
    const token=req.cookies["authToken"];
    if(!token)
    {
        return res.status(401).json({
            success:false,
            data:{},
            error:"not authenticated",
            message:"No auth token provided"
        })
    }
    try{
        const decoded=jwt.verify(token,JWT_SECRET);
        if(!decoded)
        {
            throw new UnauthorisedError();

        }
        req.user={
            email:decoded.email,
            id: decoded.id,
            role:decoded.role
        }
        next()
    }
    catch(err)
    {
        return res.status(401).json({
            success:false,
            data:{},
            error:err,
            message:"No auth token provided"
        })

    }
    //if reached here then user is authenticated allow them to access
    
}

function isAdmin(req,res,next)
{
    //this function checks if the authenticated user or not
    //because we call isAdmin after isLoggedin we will recieve user details
    const loggdinuser=req.user;
    if(loggdinuser.role==='ADMIN')
    {
        next();
    }
    else{

        return res.status(401).json({
            success:false,
            data:{},
            message:"you are not authorised for this action",
            error:{
                statusCode:401,
                reason:"Unauthorised user for this action"
            }
        })

    }
    




}
module.exports={
    isLoggedIn,isAdmin
}