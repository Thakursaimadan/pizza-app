const { findUser } = require('../repository/userRepository');
const jwt=require('jsonwebtoken')

const bcrypt=require('bcrypt');
const { JWT_SECRET, JWT_EXPIRY } = require('../config/serverconfig');
async function loginUser(authDetails)
{
    const email=authDetails.email;
    const Plainpassword=authDetails.password;
    //check if there is a registered user with given emailid

    const user=await findUser({email});

    if(!user)
    {
        throw {message:"no user found with this given email id",statusCode:404}
    }
    //2 if the user is found we need to compare password
    
    const isvalidpassword= await bcrypt.compare(Plainpassword,user.password)

   // console.log("passwaord is ",isvalidpassword)

    if(!isvalidpassword)
    {
        throw {message1: "invalid password,please try again",StatusCode:401};
    }
    const userRole=user.role?user.role:"USER"
    //if the password is validated ,create a token and return it
    try{
        const token=jwt.sign({email:user.email,id:user._id,role:userRole},JWT_SECRET,{expiresIn: JWT_EXPIRY})
        //console.log("token",token)
        console.log("token",token)
        return {token}
    }
    catch(err)
    {
        console.log("error is here 8125 ",err)
    }
    
}   

module.exports={loginUser}
