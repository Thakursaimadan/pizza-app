const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverconfig");

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
    const decoded=jwt.verify(token,JWT_SECRET);
    if(!decoded)
    {
        return res.status(401).json({
            success:false,
            data:{},
            error:"not authenticated",
            message:"No auth token provided"
        })
    }
    //if reached here then user is authenticated allow them to access
    req.user={
        email:decoded.email,
        id: decoded.id
    }
    next()
}
module.exports={
    isLoggedIn
}