
const User=require("../schema/userSchema")
class UserRepository{
    async findUser(parameters){
        const reponse=await User.findOne({...parameters})

    }
    async createUser(userDetails)
    {
        const response=await User.create(userDetails);
        return response;
    }
}

module.exports=UserRepository