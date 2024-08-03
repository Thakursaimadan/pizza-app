const UserRepository = require("../repository/userRepository")
const { userRouter } = require("../routes/userRoute")
const { userService } = require("../services/userService")

async function createUser(req,res)
{
    // console.log("create user controller called")
    // console.log(req.body)

    const userService=new userService(new UserRepository)
    try{
        const response=await userService.registerUser(req.body)
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