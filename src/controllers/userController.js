
const { registerUser } = require("../services/userService")

async function createUser(req,res)
{
    // console.log("create user controller called")
    // console.log(req.body)
    try{
        const response=await registerUser(req.body)
        return res.json({
        message:"successfully registered user",
        data:response,
        error:{}
    });
    }
    catch(error)
    {
        return res.json({
            success:false,
            message:error.reason,
            data:{},
            error:error
        })

    }
}
module.exports={createUser} 