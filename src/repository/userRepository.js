
//const { response } = require("express");
const User=require("../schema/userSchema")
    async function findUser(parameters){
        try{
            const response=await User.findOne({...parameters})
            //console.log("repos response",response)
            return response;
        }
        catch(err)
        {
            console.log(err)
        }

    }
    async function createUser(userDetails)
    {
        try{
            
            const response=await User.create(userDetails);
            return response;
        }
        catch(err)
        {
            console.log(err)
        }
       
    }

module.exports={findUser,createUser}